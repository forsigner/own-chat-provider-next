import { Box } from '@fower/react'
import { IconProps } from '@bone-ui/iconify'
import { MoonOutline } from '@bone-ui/icons'
import { Form, useForm } from 'fomir'
import { useMode } from '../../hooks'
import { FC } from 'react'

type Props = {
  icon?: FC<IconProps>
  text: string
}

export const Title = ({ text, icon: Icon }: Props) => {
  return (
    <Box toCenterY gray400 mt8 mb3 spaceX2>
      {Icon && <Icon square4 />}
      <Box>{text}</Box>
    </Box>
  )
}

export const Theme = () => {
  const { mode, setMode } = useMode()
  const form = useForm({
    children: [
      {
        name: 'theme',
        component: 'Select',
        options: [
          { label: 'Light', value: 'light' },
          { label: 'Dark', value: 'dark' },
          // { label: 'System theme', value: 'system' },
        ],
        value: mode,
        onValueChange({ value }) {
          if (['light', 'dark'].includes(value)) {
            setMode(value)
          }
        },
        componentProps: {
          width: 200,
          w: 200,
        },
      },
    ],
  })
  return (
    <Box>
      <Title text="Theme" icon={MoonOutline} />

      <Box>
        <Form form={form} />
      </Box>
    </Box>
  )
}

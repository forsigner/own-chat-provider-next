import { Box } from '@fower/react'
import { TranslateOutline } from '@bone-ui/icons'
import { Form, useForm } from 'fomir'
import { useLang } from '../../hooks/useLang'
import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { IconProps } from '@bone-ui/iconify'

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

export const Lang = () => {
  const { lang, setLang } = useLang()
  const { t } = useTranslation('common')
  const form = useForm({
    children: [
      {
        name: 'theme',
        component: 'Select',
        options: [
          { label: 'English', value: 'en' },
          { label: '简体中文', value: 'zh-CN' },
        ],
        value: lang,
        onValueChange({ value }) {
          console.log('value:', value)

          setLang(value)
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
      <Title text={t('language')} icon={TranslateOutline} />
      <Box>
        <Form form={form} />
      </Box>
    </Box>
  )
}

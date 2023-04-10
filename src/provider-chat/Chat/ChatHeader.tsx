import { Box } from '@fower/react'
import { EasyModal } from '@common/easy-modal'
import { Button, ChevronDownOutline } from 'bone-ui'
import { ModalSessionList } from '../ModalSessionList'
import { useSessions } from '../hooks'

export const ChatHeader = () => {
  const { currentSession } = useSessions()
  return (
    <Box h-72 borderBottom borderBottomGray100 p4 toCenterY columnGap-4 borderBottomGray800--dark>
      <Box textLG fontBold>
        {currentSession?.name}
      </Box>
      <Button
        p1
        colorScheme="gray400"
        variant="ghost"
        size="sm"
        icon={<ChevronDownOutline />}
        onClick={() => EasyModal.show(ModalSessionList)}
      />
    </Box>
  )
}

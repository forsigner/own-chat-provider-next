import { Box } from '@fower/react'
import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from 'bone-ui'
import { useModal } from '@common/easy-modal'
import { SessionList } from './Sidebar/SessionList'
import { AddSessionButton } from './AddSessionButton'

export const ModalSessionList = () => {
  const { register } = useModal()

  return (
    <Modal {...register('bone-ui')}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Box px8 py2>
          <Box fontBold textXL leadingLoose mb2>
            Sessions
          </Box>

          <Box>
            <SessionList />
            <Box mt6 mb3>
              <AddSessionButton />
            </Box>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  )
}

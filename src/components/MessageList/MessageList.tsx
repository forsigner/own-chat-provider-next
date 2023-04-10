import { Box } from '@fower/react'
import MessageItem from './MessageItem'
import { Message } from '../../provider-chat/hooks'

interface Props {
  messages: Message[]
}

export const ChatList = ({ messages }: Props) => {
  return (
    <Box column rowGap-10>
      {messages.map((item, index) => (
        <MessageItem key={index} message={item} />
      ))}
    </Box>
  )
}

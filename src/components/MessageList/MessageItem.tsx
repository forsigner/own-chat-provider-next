import { format } from 'date-fns'
import { Box } from '@fower/react'
import { Avatar } from 'bone-ui'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { memo } from 'react'
import { Markdown } from '../Markdown'
import { IconChatLoading } from '../../icons/IconChatLoading'
import { IconChatgpt } from '../../icons/IconChatgpt'
import { useHover } from '../../hooks/useHover'
import { Message } from '../../provider-chat/hooks'

interface Props {
  message: Message
}

const MessageItem = ({ message }: Props) => {
  const isUser = ChatCompletionResponseMessageRoleEnum.User === message.role
  const [hoverRef, isHovered] = useHover<HTMLDivElement>()

  return (
    <Box toLeft py3 ref={hoverRef}>
      <Box mr-10>
        {!isUser && <IconChatgpt />}
        {isUser && <Avatar roundedLG name={'U'} />}
      </Box>

      <Box flex-1>
        <Box mb2 toCenterY toBetween h-30>
          <Box toCenterY columnGap-8>
            <Box>
              {!isUser && <Box fontMedium>AI</Box>}
              {isUser && <Box fontMedium>User</Box>}
            </Box>
            <Box textXS gray400 selfBottom>
              {message.createdAt && format(new Date(message.createdAt), 'yyyy-MM-dd HH:mm:ss')}
            </Box>
          </Box>
        </Box>
        {message.streaming && <IconChatLoading />}
        {!message.streaming && <Markdown content={message.content} />}
      </Box>
    </Box>
  )
}

export default memo(MessageItem, (prev, next) => {
  return prev.message.content === next.message.content
})

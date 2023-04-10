import { request } from '@boter/request'
import { useRouter } from 'next/router'
import { mutateToken } from '../stores'

export function useLogout() {
  const { push } = useRouter()
  async function logout() {
    if (process.env.NEXT_PUBLIC_PLATFORM === 'WEB') {
      await request('/api/logout')
      location.href = '/'
    }

    push('/')

    mutateToken(null)
  }

  return { logout }
}

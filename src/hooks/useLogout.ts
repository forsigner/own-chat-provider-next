import { request } from '@boter/request'
// import { useRouter } from 'next/router'
import { mutateToken } from '../stores'

export function useLogout() {
  // const { push } = useRouter()
  async function logout() {
    await request('/api/logout')

    setTimeout(() => {
      location.reload()
    }, 50)

    mutateToken(null)
  }

  return { logout }
}

import '../styles/markdown.scss'
import '../styles/globals.css'
import { ToastContainer } from 'bone-ui'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { EasyModalProvider } from '@common/easy-modal'
import { init } from '../init'

interface Props extends AppProps {
  Component: AppProps['Component'] & { Layout: any }
}

init()

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.Layout ? Component.Layout : Fragment

  return (
    <>
      <EasyModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EasyModalProvider>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default MyApp

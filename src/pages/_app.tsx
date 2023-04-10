import '../styles/markdown.scss'
import '../styles/globals.css'
import { ToastContainer } from 'bone-ui'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { Fragment, useEffect } from 'react'
import { EasyModalProvider } from '@common/easy-modal'
import { mutate } from 'stook'
import { init } from '../init'

interface Props extends AppProps {
  Component: AppProps['Component'] & { Layout: any }
}

init()

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.Layout ? Component.Layout : Fragment

  useEffect(() => {
    mutate('ROUTER_NAVIGATE', Router)
  }, [])

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

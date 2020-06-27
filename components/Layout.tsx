import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
  className?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="border-b">
      <nav className="m-auto container flex">
        <div className="flex-1 flex">
          <Link href="/">
            <a className="p-4 text-black-light">WeChat</a>
          </Link>
          <Link href="/">
            <a className="p-4 text-black-light">DingTalk</a>
          </Link>
        </div>
        <Link href="/">
          <a className="p-4 text-black-light">Setting</a>
        </Link>
      </nav>
    </header>
    <main className="m-auto container py-10">
      {children}
    </main>
    <footer className="m-auto container">
      <a href="https://github.com/yuler/bot" className="text-xs text-black-lighter">[Source Code]</a>
    </footer>

    <style jsx>{`
      main {
        min-height: calc(100vh - 100px)
      }  
    `}</style>
  </div>
)

export default Layout

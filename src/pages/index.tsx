import Contents from '@/components/Contents'
import MenuContainer from '@/components/MenuContainer'
import Overlay from '@/components/Overlay'
import ThreeCanvas from '@/components/ThreeCanvas'
import { MyStoreContext } from '@/store/mystore'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { state } = useContext(MyStoreContext);
  const {menuOpen} = state
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-white absolute w-full min-h-full top-0 left-0 ${menuOpen && 'overflow-hidden'}`}>
        <ThreeCanvas />
        <Contents />
        <MenuContainer />
        <Overlay />
      </main>

    </>
  )
}

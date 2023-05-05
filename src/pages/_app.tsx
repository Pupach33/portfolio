import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import "../styles/button.css"
import "../styles/project.css"
import "../styles/paperStone.css"
import "../styles/TicTacToe.css"
import "../styles/about.css"
import "../styles/contact.css"
import Panel from '@/components/panel'
import LowerPanel from '@/components/LowerPanel'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='screen'>
      <Header />
      <Panel />
      <LowerPanel />
      <div >
       <Component {...pageProps} />
      </div>
      
    </div>
  
  )
}

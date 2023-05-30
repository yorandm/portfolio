import 'swiper/css';
import 'swiper/css/bundle';
import './globals.css'

import { Inter } from 'next/font/google'
import Link from 'next/link';
// import style from './css/layout.module.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yoran Demunter',
  description: 'Yoran Demunter portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <main className="page">
      <div className="headerNav">
        <div className="header">
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/img_8685.jpg" alt="Picture of the Yoran Demunter" className="headerImg" />
          <div className="headerInfo">
            <h1>Yoran Demunter</h1>
            <p>{"Hi I'm Yoran. I am a Belgian software engineer student at HoGent, currently in my final year. Apart from that I am volountier at FabLab Erpe-Mere where I am responsible for the Youth part of the organisation. Another passion I have is WSC Dr. Tistaertvrienden VZW, we create cycling races in and around Affligem, my home town. There I'm responsible for the applications at the municipalities, Belgian Cycling,... As well as the orginazation of two races, 'Abdijkoers voor dames' and 'Affligem Classic'. And last but not least, I love themeparks. I love them so much that even I work in one as studentjob. In Plopsaland De Panne I'm in the operations department. "}</p>
          </div>
        </div>
        <nav className="nav">
          <ul>
            <li data-selected="true"><Link href="/aboutme" >About me</Link></li>
            <li data-selected="true"><Link href="/projecten">Projects</Link></li>
            <li data-selected="true"><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

      </div>
      <div className="content">
      {children}
      </div>
    </main>
        </body>
    </html>
  )
}

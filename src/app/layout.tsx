import './globals.css'

import { Inter } from 'next/font/google'
// import style from './css/layout.module.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis ipsa labore officia tempora itaque, libero, inventore consectetur doloremque rerum ullam exercitationem necessitatibus! Laboriosam, quae dignissimos fugiat numquam cum eum?</p>
          </div>
        </div>
        <nav className="nav">
          <ul>
            <li data-selected="true"><a href="#about" >About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
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

import AboutMe from '@/components/aboutMe';
import style from './css/style.module.css';
import Projects from '@/components/Projects';
import Contact from '@/components/contact';
export default function Home() {
  return (
    <main className={style.page}>
      <div className={style.headerNav}>
        <div className={style.header}>
          <img src="/img/img_8685.jpg" alt="Picture of the Yoran Demunter" className={style.headerImg} />
          <div className={style.headerInfo}>
            <h1>Yoran Demunter</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis ipsa labore officia tempora itaque, libero, inventore consectetur doloremque rerum ullam exercitationem necessitatibus! Laboriosam, quae dignissimos fugiat numquam cum eum?</p>
          </div>
        </div>
        <nav className={style.nav}>
          <ul>
            <li data-selected="true"><a href="#about" >About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

      </div>
      <div className={style.content}>
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

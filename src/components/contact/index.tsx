import style from "./css/contact.module.css"
export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className={style.contactDiv}>
        <a href="mailto:yoran.demunter@hotmail.com?subject=contact%20via%20website"><img src="/svg/email.svg" alt="email" /> <span>yoran.demunter@hotmail.com</span></a>
        <a href="github.com/yorandm"> <img src="/svg/github.svg" alt="github" /> <span>github.com/yorandm</span></a>
        <a href="linkedin.com/in/yorandemunter"><img src="/svg/linkedin.svg" alt="linked in " /> <span>linkedin.com/in/yorandemunter</span></a>
      </div>
    </section>
  )
}
import style from "./css/projectCard.module.css"

export default function ProjectCard() {
  return (<>
    <div className={style.card}>
      <img className={style.img} src="/img/fluvius.png" alt="scoolproject voor fluvius" />
      <div className={style.cardText}>
        <h3>Fluvius</h3>
        <p>Dashboard and desktop application for Fluvius</p>
      </div>
    </div>
  </>)
}
import timeline from "../../data/timeline.json";
import style from "./css/aboutMe.module.css";
export default function AboutMe() {
  return (
    <section id="about">
      <h2>About me</h2>
      {
        timeline.timeline.sort((a,b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          if (dateA < dateB) {
            return timeline.reverse_chronological==="true"?1:-1;
          } else if (dateA > dateB) {
            return timeline.reverse_chronological==="true"?-1:1;
          } else {
            return 0;
          }
        }).map((item, index) => (
          <div key={index} className={style.timelineitem}>
            <p className={style.date}>{Intl.DateTimeFormat("nl-BE", {day: "2-digit", month: "2-digit", year: "numeric"}).format(new Date(item.date))}</p>
            <div className={style.line}><div className={style.bol}></div></div>
            <p className={style.tekst}>{item.tekst}</p>
          </div>
        ))
      }
    </section>
  )
}
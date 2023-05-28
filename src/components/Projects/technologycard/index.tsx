import style from "./css/techcardstyle.module.css"
export default function TechnologyCard({technology}:{technology:Technology}) {
    return <>
    <div className={style.container}>
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img src={technology.icon} alt={technology.name} className={style.icon} />
        <span className={style.name}>{technology.name}</span>
    </div>
    </>
}
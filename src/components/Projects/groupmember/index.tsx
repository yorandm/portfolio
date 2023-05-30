/* eslint-disable @next/next/no-img-element */
import style from './css/groupmember.module.css';
export default function GroupMember({ groupmember }: { groupmember: GroupMember }) {
    return (
        <div className={style.groupmember}>
            <p>{groupmember.name}</p>
           {groupmember.github && <a href={groupmember.github} className={style.links}> <img src="/svg/github.svg" alt="github" className={style.img} /> <span>{groupmember.github}</span></a>}
            {groupmember.portfolio && <a href={groupmember.portfolio} className={style.links}> <img src="/svg/portfolio.png" alt="portfolioIcon" className={style.img} /> <span>{groupmember.portfolio}</span></a>}
        </div>
    )

}
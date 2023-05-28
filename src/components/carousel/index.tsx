"use client";
import { ReactComponentElement, useState } from "react"
import style from "./css/carrouselStyle.module.css"
export default function Carousel({
    children,
  }: {
    children: React.ReactNode[]
  }){
    const [active, setActive] = useState(0);
    const [interval, setIntervalId] = useState(setInterval(updateActive, 5000));
    
    

    return (
        <>
        <div className={style.carousel}>
          <div className={style.active}>
              {children[active]}
          </div>
          <div className={style.carouselContainer}>
            {children.map((child, index) => (
              <div onClick={()=>handleClick(index)} key={index} className={`${style.carousel__item} ${index===active?"active":""}`}>
                {child}
              </div>
            ))}
          </div>
        </div>
        </>
    )

    function updateActive(){
        if(active < children.length-1){
            setActive(active+1)
        }else{
            setActive(0)
        }
    }

    function handleClick(clicked: number){
        setActive(clicked-1);
        updateActive();
        clearInterval(interval);
        setIntervalId(setInterval(updateActive, 5000))
    }
}
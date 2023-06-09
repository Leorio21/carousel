"use client"
import Image from "next/image";
import style from "./Carousel.module.css";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

interface CarouselProps {
  inData: string[],
}

export default function Carousel({inData}: CarouselProps): JSX.Element {

  
  const [rotation, setRotation] = useState<number>(0);
  const angle = 360/inData.length;
	const containerImgRef = useRef<HTMLDivElement>(null);

	const changeDeg = (DegToAdd: number) => {
		setRotation((current) => current + DegToAdd)
	}

	useEffect(() => {
		containerImgRef.current!.style.transform = `rotateY(${rotation}deg)`;
  }, [rotation])
	
  return (
      <>
      <div className={style.container}>
        <ChevronLeftIcon onClick={() => {changeDeg(angle)}} className={`${style.button} ${style.buttonPrev}`} />
        <ChevronRightIcon onClick={() => {changeDeg(-angle)}} className={`${style.button} ${style.buttonNext}`}/>
        <div id="carousel" className={style.containerImg} ref={containerImgRef}>
          {inData.map((el, idx) => {
            const rotateAngle = angle * idx
            const tranlateLength = 50 * inData.length //44.5
            return (
              <Image 
                className={style.img}
                  src = {el}
                  blurDataURL = {el}
                  alt = "Capture d'ecran du projet"
                  priority = {true}
                  style={{transform: `rotateY(${rotateAngle}deg) translateZ(${tranlateLength}px)`}}
                  sizes="50vw"
                  fill
                  key = {idx}
                />
            )})}
        </div>
      </div>
    </>
  )
}

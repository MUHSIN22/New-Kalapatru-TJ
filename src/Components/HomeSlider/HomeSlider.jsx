import React, { useEffect, useRef, useState } from 'react'
import './HomeSlider.css'

export default function HomeSlider({itemMargin,itemsPerWindow,children}) {
    const sliderRef = useRef(null)
    const [gridWidth,setGridWidth] = useState(0)
    const [itemCount,setItemCount] = useState(0)
    const [marginLeft,setMarginLeft] = useState(0)
    let posX1,posX2;
    let threshold = 50;
    let cw,ic;
    let cardIndex = 0;

    useEffect(() => {
        let parentWidth = document.querySelector('.slider-container').offsetWidth;
        console.log(parentWidth);
        let childCount = sliderRef.current.children.length;
        let width = parentWidth / itemsPerWindow
        setGridWidth(width);
        cw = width
        ic = childCount;
        setItemCount(childCount)
        
        sliderRef.current.onmousedown = dragStart;
        sliderRef.current.ontouchstart = dragStart
        sliderRef.current.ontouchend = dragEnd;
    },[])

    


    const dragStart = (event) => {
        event = event || event.window;
        event.preventDefault();
        let pos1;
        if(event.type === "touchstart"){
            pos1 = event.touches[0].clientX;
        }else{
            pos1 = event.clientX;
            document.onmouseup = dragEnd
        }
        posX1 = pos1;
    }

    const dragEnd = (event) => {
        let pos;
        if(event.type === 'touchend'){
            pos = event.changedTouches[0].clientX
        }else{
            pos = event.clientX;
        }

        console.log(posX1,pos,threshold);
        if(posX1 - pos > threshold ){
           shiftSlide(-1);
        }else if(posX1 - pos < -threshold){
            shiftSlide(1)
        }
    }


    const shiftSlide = (direction) => {
        if(direction === -1){
            console.log(cw);
            console.log(cardIndex,-(ic - itemsPerWindow));
            if(cardIndex > -(ic - itemsPerWindow)){
                setMarginLeft((prev) => prev - cw);   
                cardIndex--;
            }
            // if(cardIndex >= )
        }else{
            console.log(cardIndex,(ic - itemsPerWindow));
            if(cardIndex < 0){
                setMarginLeft((prev) => prev + cw);   
                cardIndex++;
            }
        }
    }

    return (
        <div className="home-slider" ref={sliderRef} style={{gridTemplateColumns:`repeat(${itemCount},${gridWidth}px)`,marginLeft: `${marginLeft}px`}}>
            {children}
        </div>
    )
}
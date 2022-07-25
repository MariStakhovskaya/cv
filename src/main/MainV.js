import React, { useState} from 'react'
import style from './MainV.module.css';
import styleContainer from '../common/styles/Container.module.css'
import firstImg from '../common/assets/mariafirst.png'
import secondImg from '../common/assets/mariasecond.png'

function MainV() {
  const [mousePosition, SetMousePosition ] = useState()
    const myRef = React.createRef();
    const myRefWrapper = React.createRef();
console.log(myRefWrapper)
    const handleMouseMove = (e) => {
        /*//координата левого угла слайдера в пикселях
        const sliderLeftX = e.nativeEvent.offsetX
        console.log(e.nativeEvent.offsetX)
            //Ширина всего слайдера (включая только паддинг)
        const sliderWidth = myRef.current.clientWidth
        console.log(sliderWidth)

        const mouseX = e.pageX - sliderLeftX

        console.log(mouseX)*/
        let currentTargetRect = e.currentTarget.getBoundingClientRect();
        let mouseX = e.pageX - currentTargetRect.left
        console.log(currentTargetRect, mouseX)
        SetMousePosition(mouseX)
        if (mouseX<0) mouseX = 0 ;
        else if (mouseX > currentTargetRect) mouseX=currentTargetRect
         myRefWrapper.current.style.width = `${mouseX}px`;
        //`${currentTargetRect -mouseX }px`




      /* // SetMousePosition({left: e.clientX, top: e.clientY})
        const width =  myRef.current.offsetWidth
        const height =  myRef.current.offsetHeight
       // const height = myRef.current.getBoundingClientRect().height
        const oX = (e.nativeEvent.offsetX/width)*100
        const oY = (e.nativeEvent.offsetY/height)*100
        console.log(Math.floor(oX), Math.floor(oY))
        SetMousePosition({x:oX,y:oY})*/
    }


    return (
        <div className={style.mainBlock}>

            <div className={styleContainer.container}>

                <div className={style.text}>
                    <h4>Hello World! I am</h4>

                    <h2>Maria Stakhovskaya </h2>
                    <p> Frontend React developer</p>
                </div>

                <div className={style.imageComparisonSlider}
                     ref={myRef}
                onMouseMove={(e)=>{handleMouseMove(e)}}>

                    <img src={firstImg} alt='before'/>

                    <div className={style.imageWrapper} ref={myRefWrapper}>
                        <img src={secondImg} alt='after'/>
                    </div>

                   {/* <div className={style.handle}>
                        <div className={style.handleLine}></div>

                        <div className={style.handleCircle}>
                            <i className="fa-solid fa-chevron-left"></i>
                            <i className="fa-solid fa-chevron-right"></i>

                        </div>
                        <div className={style.handleLine}></div>
                    </div>*/}


                </div>


                <div className={style.text}>
                    <h4>Hello World! I am</h4>

                    <h2>Maria Stakhovskaya </h2>
                    <p> Frontend React developer</p>
                </div>
            </div>
        </div>
    )
        ;
}

export default MainV;
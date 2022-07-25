import React, { useState} from 'react'
import style from './MainP.module.css';
import styleContainer from '../common/styles/Container.module.css'
import firstImg from '../common/assets/myphotof.jpg'
import secondImg from '../common/assets/myphoto.jpg'

function MainP() {
  const [mousePosition, SetMousePosition ] = useState({
      x:0,
      y: 0
  })
    const myRef = React.createRef();

    const handleMouseMove = (e) => {
       // SetMousePosition({left: e.clientX, top: e.clientY})
        const width =  myRef.current.offsetWidth
        const height =  myRef.current.offsetHeight
       // const height = myRef.current.getBoundingClientRect().height
        const oX = (e.nativeEvent.offsetX/width)*100
        const oY = (e.nativeEvent.offsetY/height)*100
        console.log(Math.floor(oX), Math.floor(oY))
        SetMousePosition({x:oX,y:oY})
    }

        const maskStyle = {
        '--maskX': mousePosition.x,
        '--maskY': mousePosition.y
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
                onMouseMove={(e)=>{handleMouseMove(e)}}
                style={maskStyle}>
                    {mousePosition.left}
                    {mousePosition.top}
                    <img src={firstImg} alt='before'/>
                    <div className={style.imageWrapper}>
                        <img src={secondImg} alt='after'/>
                    </div>

                    <div className={style.handle}>
                        <div className={style.handleLine}></div>

                        <div className={style.handleCircle}>
                            <i className="fa-solid fa-chevron-left"></i>
                            <i className="fa-solid fa-chevron-right"></i>

                        </div>
                        <div className={style.handleLine}></div>
                    </div>


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

export default MainP;
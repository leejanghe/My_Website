import React ,{ useCallback, useEffect, useRef, useState }from 'react'
import Typical from 'react-typical'
import styles from '../styles/Intro.module.css'
import { IoIosArrowDropdown } from 'react-icons/io';

function Intro(props) {

    const textLocation = useRef();
    const arrowLocation = useRef();

    const FuncNone = () => {
      const { current } = textLocation;
      current.style.display = 'none'
    }
    const FuncBlock = () => {
      const { current } = textLocation;
      current.style.display = 'inline-block'
    }
  
    const handleFadeOut = () => {
      const { current } = textLocation;
      const scrollTop = document.documentElement.scrollTop;
      current.style.transition = 'all .5s';
  
      // fade in-out
      if (scrollTop >= 300) {
        current.style.opacity = 0
        setTimeout(FuncNone, 500)
      }
      else {
        current.style.opacity = 1
        setTimeout(FuncBlock, 500)

        if (scrollTop >= 50) {
            arrowLocation.current.style.transition = 'all .5s'
            arrowLocation.current.style.opacity = 0
          }
          else {
            arrowLocation.current.style.transition = 'all .5s'
            arrowLocation.current.style.opacity = 1
          }
      
        }
    }
  
    useEffect(() => {
      window.addEventListener("scroll", handleFadeOut)
      return () => {
  
        window.addEventListener("scroll", handleFadeOut)
      }
    })


    return (
        <div className={styles.IntroBg}>
            {/* <img src='./img/intro.jpg'/> */}
              <p className={styles.IntroText} ref={textLocation}>
                {'  '}<Typical
                        loop={Infinity}
                        wrapper="border"
                        steps={[
                 '안녕하세요! 반갑습니다!!!', 2000, 
                 '프론트 개발자 이장희입니다.', 3000,
                 '제 웹사이트에 오신 것을 환영합니다 :)', 3000, 
                ]}/></p> 
                 <div className={styles.arrow} onClick={props.handleScroll} ref={arrowLocation}>
                 <IoIosArrowDropdown />
                 </div>
        </div>
    )
}

export default Intro


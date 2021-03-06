import React ,{useEffect, useRef}from 'react'
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
    const ArrowFuncNone = () => {
        const { current } = arrowLocation;
        current.style.display = 'none'
      }
      const ArrowFuncBlock = () => {
        const { current } = arrowLocation;
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
            setTimeout(ArrowFuncNone, 500)
          }
          else {
            arrowLocation.current.style.transition = 'all .5s'
            arrowLocation.current.style.opacity = 1
            setTimeout(ArrowFuncBlock, 500)
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
            <>
              <p className={styles.IntroText} ref={textLocation}>
                {'  '}<Typical
                        loop={Infinity}
                        wrapper="border"
                        steps={[
                 '???????????????! ???????????? ?????? ????????????~', 2000, 
                 '?????? ????????? ???????????? ????????? ??????????????????.', 3000,
                 '??? ??????????????? ?????? ?????? ??????????????? :)', 5000, 
                ]}/></p> 
                </>
                 <div className={styles.arrow} onClick={props.handleScroll} ref={arrowLocation}>
                 <IoIosArrowDropdown />
                 </div>
        </div>
    )
}

export default Intro


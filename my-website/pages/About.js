import React from 'react'
import styles from '../styles/about.module.css'
import useScrollFadeIn from '../components/useScrollFadeIn.js'
import useScrollAnimation from '../components/useScrollAnimation'

const CircleBox = ({style}) => {
    return (
        <div className={styles.circleBox} style={style}></div>
    )
}

const MakeCircle = () => {
    let animationDelay = "";
    const arr = Array.from("코딩을 즐기고 사랑합니다! 꾸준함과 성실함을 잃지 않고 발전하는 개발자가 되겠습니다!!!!! 화이팅!");

    return arr.map((el, i) => {
        animationDelay = `${(Math.random()*16).toFixed(2)}s`;
        const style = {
            animationDelay,
    }
    return <CircleBox key={i} style={style} /> })
}


function About() {
    return (
    <>
        <div className={styles.about_Bg}> 
                {MakeCircle()}
        </div>
            <div className={styles.about_Text}>
                <h1 {...useScrollFadeIn('up', 1, 0.2)}>About Me!</h1>
                <p {...useScrollFadeIn('up', 1, 0.3)}>
                    안녕하십니까! 주니어 프론트 개발자 이장희 입니다!
                    <br />
                </p>
                <br />
                <p {...useScrollFadeIn('down', 1, 0.4)}>
                   <strong>"느린 거북이도 결승점에 도달한다!"</strong> 라는 말이 있습니다.<br />
                   어떤 분야든 배움에 끝이 없으며 어려움이 많습니다.
                </p>
                <p {...useScrollFadeIn('down', 1, 0.4)}>
                   하지만 꾸준히 한걸음 한걸음 다가가다 보면 끝이 보이길 마련이며 <br />
                   결승점에 도달 했을 때에 성취감은 이뤄말 할 수 없습니다.
                </p>
                <p {...useScrollFadeIn('down', 1, 0.4)}>
                   결국 꾸준함과 성실함이 결승점에 갈 수 있는 원동력이라 생각합니다. <br />
                </p>
                <p {...useScrollAnimation()}>
                   어떤 일이든 겸손의 자세로 배움을 게을리 하지 않고 빠르게 변화하는 <br />
                   트렌드에 맞춰 발전하는 프론드 앤드 개발자가 되겠습니다.
                </p>
            </div>
    </>     
    )
}
export default About
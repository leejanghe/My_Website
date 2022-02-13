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
                    {/* <br /> */}
                </p>
                <p {...useScrollFadeIn('down', 1, 0.4)}>
                   처음 개발공부를 했을 때, 이해도 못하고 <br />
                   공부하는 과정에서 많은 어려움이 있었습니다.
                </p>
                <p {...useScrollFadeIn('down', 1, 0.5)}>
                   하지만 알게 된 내용을 꾸준히 기록하고, 실험하면서 <br />
                   저도 모르게 프로그래밍에 익숙해졌고 개발의 매력을 알게 되었습니다.< br />
                   또 한 배운 내용을 바탕으로 다양한 미니프로젝트를 통해 <br />
                   개발을 즐기고 있는 제 모습을 마주하게 되었고 어떤 어려움이라도 <br />
                   헤쳐나갈 수 있다는 자신감을 얻게 되었습니다.
                </p>
                <p {...useScrollFadeIn('down', 1, 0.6)}>
                   결국 꾸준함과 성실함이 개발자로서의 성장하는 원동력이라 생각합니다. <br />
                </p>
                <p {...useScrollAnimation()}>
                   어떤 일이든 겸손의 자세로 배움을 게을리하지 않고, 빠르게 변화하는 <br />
                   트렌드에 맞춰 발전하는 프론드 앤드 개발자가 되겠습니다.
                </p>
            </div>
    </>     
    )
}
export default About
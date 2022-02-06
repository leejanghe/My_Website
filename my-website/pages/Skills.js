import React from 'react'
import styles from '../styles/skills.module.css'
import useScrollFadeIn from '../components/useScrollFadeIn.js'
import useScrollAnimation from '../components/useScrollAnimation'


function Skills() {
    return (
        <div className={styles.skills_bg}>
            <h1 {...useScrollAnimation()}>Skills</h1>
            <div className={styles.skills_container}>
                <div className={styles.skills_front} {...useScrollFadeIn('left', 1, 0.4)}>
                    <h2>Front-End</h2>
                    <img src="./img/front.png"/>
                </div>
                <div className={styles.skills_back} {...useScrollFadeIn('left', 1, 0.5)}>
                    <h2>Back-End</h2>
                    <img src="./img/back.png"/>
                </div>
                <div className={styles.skills_etc} {...useScrollFadeIn('left', 1, 0.6)}>
                    <h2>ETC</h2>
                    <img src="./img/etc.png"/>
                </div>
            </div>
        </div>
    )
}

export default Skills

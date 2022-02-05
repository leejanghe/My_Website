import React from 'react'
import styles from '../styles/skills.module.css'

function Skills() {
    return (
        <div className={styles.skills_bg}>
            <h1>Skills</h1>
            <div className={styles.skills_container}>
                <div className={styles.skills_front}>
                    <h2>Front-End</h2>
                    <img src="./img/front.png"/>
                </div>
                <div className={styles.skills_back}>
                    <h2>Back-End</h2>
                    <img src="./img/back.png"/>
                </div>
                <div className={styles.skills_etc}>
                    <h2>ETC skill</h2>
                    <img src="./img/etc.png"/>
                </div>
            </div>
        </div>
    )
}

export default Skills

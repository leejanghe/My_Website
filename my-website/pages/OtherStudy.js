import React from 'react'
import styles from '../styles/otherstudy.module.css'
import Link from 'next/link'
import {studyData} from '../assets/data.js'
import useScrollAnimation from '../components/useScrollAnimation'

function OtherStudy() {
    
    
    return (
        <div className={styles.study_bg}>
            <h1 className={styles.study_title} {...useScrollAnimation()}>Other Study</h1>
            <div className={styles.study_boxbg}>
            {studyData &&
                studyData.map((el)=>
                <div className={styles.study_box} key={el.id}>

                        <img src={el.image}/>

                    <div className={styles.study_container}>
                    <div className={styles.study_header}>
                        <h1>{el.title}</h1>
                        <p>{el.subtitle}</p>
                        <p>Stack : {el.stack}</p>
                    </div>
                    <div className={styles.study_link}>
                        <Link href={el.github} ><a target="_blank">Github</a></Link>
                        <Link href={el.site} ><a target="_blank">website</a></Link>
                    </div>
                    <div className={styles.study_text}>
                        <p>{el.content}</p>
                    </div>
                    </div>
                </div>
                )
            }
            </div>
        </div>
    )
}

export default OtherStudy

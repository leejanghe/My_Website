import React from 'react'
import styles from '../styles/otherstudy.module.css'
import Link from 'next/link'
import {studyData} from '../assets/data.js'
import {BsGithub} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
import useScrollFadeIn from '../components/useScrollFadeIn.js'
import useScrollAnimation from '../components/useScrollAnimation'

function OtherStudy() {

    console.log(studyData)
    
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
                        <p>stack : {el.stack}</p>
                    </div>
                    <div className={styles.study_link}>
                        <Link href={el.github} ><a target="_blank"><BsGithub/> Github </a></Link>
                        <Link href={el.site} ><a target="_blank"><CgWebsite/> website </a></Link>
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

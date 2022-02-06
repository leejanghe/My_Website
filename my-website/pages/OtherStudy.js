import React from 'react'
import styles from '../styles/otherstudy.module.css'
import Link from 'next/link'
import {studyData} from '../assets/data.js'
import {BsGithub} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'

function OtherStudy() {

    console.log(studyData)
    
    return (
        <div className={styles.study_bg}>
            <h1 className={styles.study_title}>Other Study</h1>
            <div className={styles.study_boxbg}>
            {studyData &&
                studyData.map((el)=>
                <div className={styles.study_box} key={el.id}>
                    
                        <img src={el.image} width="30%"/>
       
                    <div className={styles.study_container}>
                    <div className={styles.study_header}>
                        <h1>{el.title}</h1>
                        <p>{el.subtitle}</p>
                        <p>{el.stack}</p>
                    </div>
                    <div>
                        <Link href={el.github} ><a target="_blank">Github <BsGithub/></a></Link>
                        <Link href={el.site} ><a target="_blank">website <CgWebsite/></a></Link>
                    </div>
                    <div>
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

import React from 'react'
import {projectData} from '../assets/data.js'
import styles from '../styles/project.module.css'
import Link from 'next/link'

function Project3() {
    return (
        <div className={styles.innerProject_bg}>
            <img src={projectData[0].image}/>
            <div className={styles.project_container}>
            <div className={styles.project_header}>
                <h1>{projectData[0].title}</h1>
                <p>{projectData[0].subtitle}</p>
                <p>stack : {projectData[0].stack}</p>
            </div>
                <div className={styles.project_link}>
                    <Link href={projectData[0].github} ><a target="_blank">Github </a></Link>
                    <Link href={projectData[0].site} ><a target="_blank">website </a></Link>
                </div>
                <div className={styles.project_text}>
                    <div>{projectData[0].content}</div>
                </div>
            </div>
        </div>
    )
}

export default Project3

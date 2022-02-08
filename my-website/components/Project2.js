import React from 'react'
import {projectData} from '../assets/data.js'
import styles from '../styles/project.module.css'
import Link from 'next/link'

function Project2() {
    return (
        <div className={styles.innerProject_bg}>
            <img src={projectData[1].image}/>
            <div className={styles.project_container}>
            <div className={styles.project_header}>
                <h1>{projectData[1].title}</h1>
                <p>{projectData[1].subtitle}</p>
                <p>Stack : {projectData[1].stack}</p>
            </div>
                <div className={styles.project_link}>
                    <Link href={projectData[1].github} ><a target="_blank">Github </a></Link>
                    <Link href={projectData[1].site} ><a target="_blank">website </a></Link>
                </div>
                <div className={styles.project_text}>
                    <p>{projectData[1].content}</p>
                </div>
            </div>
        </div>
    )
}

export default Project2

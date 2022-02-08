import React from 'react'
import {projectData} from '../assets/data.js'
import styles from '../styles/project.module.css'
import Link from 'next/link'

function Project4() {
    return (
        <div className={styles.innerProject_bg}>
            <img src={projectData[3].image}/>
            <div className={styles.project_container}>
            <div className={styles.project_header}>
                <h1>{projectData[3].title}</h1>
                <p>{projectData[3].subtitle}</p>
                <p>Stack : {projectData[3].stack}</p>
            </div>
                <div className={styles.project_link}>
                    <Link href={projectData[3].github} ><a target="_blank">Github </a></Link>
                    <Link href={projectData[3].site} ><a target="_blank">website </a></Link>
                </div>
                <div className={styles.project_text}>
                    <p>{projectData[3].content}</p>
                </div>
            </div>
        </div>
    )
}

export default Project4

import React from 'react'
import styles from '../styles/otherstudy.module.css'
import Link from 'next/link'
import {studyData} from '../assets/data.js'


function OtherStudy() {

    console.log(studyData)
    
    return (
        <div className={styles.test}>
            {
                studyData.map((el)=>
                <div key={el.id}>
                    <h1>{studyData[0].title}</h1>
                     <p>{studyData[0].subtitle}</p>
                     <p>{studyData[0].stack}</p>
                     <img src={studyData[0].image} width="30%"/>
                     <Link href={studyData[0].github} ><a target="_blank">Github</a></Link>
                     <Link href={studyData[0].site} ><a target="_blank">Github</a></Link>
                      <p>{studyData[0].content}</p>
                </div>
                )
            }
        </div>
    )
}

export default OtherStudy

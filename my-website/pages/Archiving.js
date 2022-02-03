import React from 'react'
import styles from '../styles/archiving.module.css'
import Link from 'next/link'

function Archiving() {
    return (
        <div className={styles.arch_bg}>
            <div className={styles.arch_container}>
                <div className={styles.arch_title}>
                    <h1>Archiving</h1>
                </div>
                <div className={styles.arch_content}>
                    <div className={styles.arch_content_item}>
                    <h1>GitHub</h1>
                    <Link href="https://github.com/leejanghe" ><a target="_blank">Github</a></Link>
                    <p>저의 소스 코드 저장소 입니당</p>
                    <ul>
                        <li>코코도도로도로</li>
                        <li>코코도도로도로</li>
                        <li>코코도도로도로</li>
                    </ul>
                    </div>
                    <div className={styles.arch_content_item}>
                    <h1>Blog</h1>
                    <Link href="https://joy-codeing-lee.tistory.com/"><a target="_blank">Blog</a></Link>
                    <p>저의 소스 코드 저장소 입니당</p>
                    <ul>
                        <li>코코도도로도로</li>
                        <li>코코도도로도로</li>
                        <li>코코도도로도로</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Archiving
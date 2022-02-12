import React from 'react'
import styles from '../styles/archiving.module.css'
import Link from 'next/link'
import useScrollFadeIn from '../components/useScrollFadeIn.js'

function Archiving() {
    return (
        <div className={styles.arch_bg}>
            <div className={styles.arch_container}>
                <div className={styles.arch_title} {...useScrollFadeIn('down', 1, 0.4)}>
                    <h1>Archiving</h1>
                </div>
                {/* {...useScrollFadeIn('left', 1, 0.4)} */}
                <div className={styles.arch_content} {...useScrollFadeIn('right', 1,0.5)}>
                    <div className={styles.arch_content_box}>
                        <div className={styles.arch_header}>
                            <img src="./img/github.png"/>
                            <Link href="https://github.com/leejanghe" ><a target="_blank">Github</a></Link>
                        </div>
                            <div className={styles.arch_content_text}>
                                <p>노력과 흔적이 담긴 코드 저장소.</p>
                                    <ul>
                                         <li>1일 1커밋을 원칙으로 실천!</li>
                                         <li>학습하면서 겪은 에러 정리!</li>
                                         <li>학습한 내용 기반, 미니프로젝트 진행!</li>
                                     </ul>
                            </div>
                    </div>
                    <div className={styles.arch_content_box}>
                        <div className={styles.arch_header}>
                            <img src="./img/tStory.png"/>
                            <Link href="https://joy-codeing-lee.tistory.com/"><a target="_blank">Blog</a></Link>
                        </div>
                            <div className={styles.arch_content_text}>
                                <p>공부 및 지식을 쌓는 블로그.</p>
                                    <ul>
                                         <li>학습하면서 느꼈던 점, 배운 내용 기록!</li>
                                         <li>공부한 내용을 블로그를 통해 공유!</li>
                                         <li>개념정리 및 웹 관련 지식을 정리!</li>
                                     </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Archiving


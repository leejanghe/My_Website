import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'
import useScrollFadeIn from '../components/useScrollFadeIn.js'
import useScrollAnimation from '../components/useScrollAnimation'

function Footer() {
    return (
        <div className={styles.footer_bg}>
            <div className={styles.footer_container}>
                <div className={styles.footer_text}>
                    <h1 {...useScrollFadeIn('down', 1, 0.5)}>babybye777@gmail.com</h1>
                    <p {...useScrollAnimation()}>좋은 인연이 되어 함께 성장하고 싶습니다.</p>
                </div>
                <div className={styles.footer_link}>
                    <Link href="https://github.com/leejanghe" ><a target="_blank">Github</a></Link>
                    <Link href="https://joy-codeing-lee.tistory.com/"><a id={styles.footer_md} target="_blank">Blog</a></Link>
                    <Link href="https://github.com/leejanghe/My_Website/files/8079797/_._.pdf"><a target="_blank">Resume</a></Link>
                </div>
                <span>© Copyright 2022 Lee Jang He. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer

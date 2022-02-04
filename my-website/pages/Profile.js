import React from 'react'
import styles from '../styles/profile.module.css'
import {FaUser} from 'react-icons/fa'
import {BsCalendarWeekFill} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {FaPen} from 'react-icons/fa'

import useScrollFadeIn from '../components/useScrollFadeIn.js'
import useScrollAnimation from '../components/useScrollAnimation'

function Profile() {
    return (
        <div className={styles.profile_bg}>
            <h1 {...useScrollAnimation()}>Profile</h1>
            <div className={styles.profile_boxgrid} {...useScrollFadeIn('up', 1, 0.4)}>
                <div className={styles.profile_content}>
                    <div className={styles.profile_icon}>
                        <FaUser/>
                    </div>
                    <div className={styles.profile_text}>
                        <h2>이름</h2>
                        <p>이장희</p>
                    </div>
                </div>
                <div className={styles.profile_content}>
                    <div className={styles.profile_icon}>
                        <BsCalendarWeekFill/>
                    </div>
                    <div className={styles.profile_text}>
                        <h2>생년월일</h2>
                        <p>92.03.03</p>
                    </div>
                </div>
                <div className={styles.profile_content}>
                    <div className={styles.profile_icon}>
                        <BsFillTelephoneFill/>
                    </div>
                    <div className={styles.profile_text}>
                        <h2>연락처</h2>
                        <p>010-0000-0000</p>
                    </div>
                </div>
                <div className={styles.profile_content}>
                    <div className={styles.profile_icon}>
                        <MdEmail/>
                    </div>
                    <div className={styles.profile_text}>
                        <h2>이메일</h2>
                        <p>babybye777@gamil.com</p>
                        
                    </div>
                </div>
                <div className={styles.profile_content}>
                    <div className={styles.profile_icon}>
                        <FaPen/>
                    </div>
                    <div className={styles.profile_text}>
                        <h2>학력</h2>
                        <p>서울대학교 컴퓨터공학과 였으면..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

import React from 'react'
import styles from '../styles/project.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Project3 from '../components/Project3';
import Project4 from '../components/Project4';
import useScrollAnimation from '../components/useScrollAnimation'

function Project() {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        Infinity: true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }


    return (
        <div className={styles.project_bg}>
            <h1 className={styles.project_title} {...useScrollAnimation()}>Project</h1>
            <Slider {...settings} className={styles.project_sliderBg}>
                <div>
                    <Project1/>
                </div>
                <div>
                    <Project2 />
                </div>
                <div>
                    <Project3 />
                </div>
                <div>
                    <Project4 />
                </div>
            </Slider>
        </div>
    )
}

export default Project

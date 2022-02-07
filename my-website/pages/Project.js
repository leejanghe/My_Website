import React from 'react'
import styles from '../styles/project.module.css'
import {projectData} from '../assets/data.js'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Project() {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        Infinity: true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }


    console.log(projectData)

    return (
        <div className={styles.test}>
            <h1>projcet!!!</h1>
            <Slider {...settings}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>5</div>
            </Slider>
        </div>
    )
}

export default Project

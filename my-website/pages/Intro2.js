import React from 'react'
import styles from '../styles/test.module.css'


const CircleBox = ({style}) => {
    return (
        <div className={styles.snow} style={style}></div>
    )
}

const MakeCircle = () => {
    let animationDelay = "";
    const arr = Array.from("helloddddddddddfsdafㄴㅇㅁㄹㅁㄴㅇㄹㅁㄴㅇㄹasdfsadfadsf ");

    return arr.map((el, i) => {
        animationDelay = `${(Math.random()*16).toFixed(2)}s`;
        const style = {
            animationDelay,
    }
    return <CircleBox key={i} style={style} /> })
}


function Intro2() {
    return (
        
        <div className={styles.Introbg}> 
        {MakeCircle()}
        
        </div>
         
       
    )
}
export default Intro2
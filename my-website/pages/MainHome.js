import React,{useRef} from 'react'
import Intro from './Intro'
import Intro2 from './Intro2'
import Test from './test'
import Test1 from './Test1'

function MainHome() {

    const aboutSection = useRef(null);
    

    const moveToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    const handleScroll = () => {
        const offsetTop = aboutSection.current.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    }



    return (
        <>
        <section>
            <Intro handleScroll={handleScroll}/>
        </section>
        <section ref={aboutSection}>
            <Intro2 />
        </section>
        <section>
        <Test />
        </section>
        <section>
        <Test1 />
        </section>
        <section>
        <Test />
        </section>
        <section>
        <Test1 />
        </section>

         <div className="ontop" onClick={moveToTop}>위로가기</div>
        </>
    )
}

export default MainHome

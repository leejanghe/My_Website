import MainHome from './MainHome'
import { useEffect } from 'react'

export default function Home() {
  console.log('%c 안녕하세요! 프론트 개발자 이장희 입니다  ', 'color:white; font-size:20px; background: black')
  console.log('%c 개발을 매우 즐깁니다!!! ', 'color:white; font-size:20px; background: black')
  console.log('%c 좋은 인연이 되어 같이 성장하고 싶습니다!! ', 'color:white; font-size:20px; background: black')
  console.log('%c 잘 부탁드립니다 :) ', 'color:white; font-size:20px; background: black')

  useEffect(() => {
    window.onbeforeunload = ()=> {
      window.scrollTo(0, 0);
    };

}, []);


  return (
    <div className="App">
      <MainHome />
    </div>
  )
}

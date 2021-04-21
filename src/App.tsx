import { useSpring, animated ,config} from 'react-spring';
import {useState } from 'react';

export default function App() {

  const [flip, set] = useState(false);
  const num=200;
  const { number } = useSpring({
    reset: false,
    reverse: flip,
    from: { number: 0 },
    number: num,
    delay: 1200,
    config: config.gentle,
    onRest: () => set(!flip),
  })
  const { color } = useSpring({
    reset: false,
    reverse: flip,
    from: { color: `rgb(69, ${num+32}, 145)` },
    color: `rgb(69, 0, 145)`,
    delay: 1200,
    config: config.gentle,
    onRest: () => set(!flip),
  })
  const { color2 } = useSpring({
    reset: false,
    reverse: flip,
    from: { color2: `rgb(69, 0, 145)` },
    color2: `rgb(249, 112, 145)`,
    delay: 1200,
    config: config.gentle,
    onRest: () => set(!flip),
  })
  

  return <div style={{display:"grid",gridAutoFlow:"column",placeContent:"center"}}>
  <animated.div style={{
    color:"white",
    display:"grid",
      justifyItems:"center",
      alignItems:"center",
    width: number.to(n=>(200-n)),
    height: 200,
    minWidth: 40,
    backgroundColor: color,
    borderRadius: 16,}}>
      {number.to(n => (200-n).toFixed(4))}
      </animated.div>
    <animated.div style={{
      color:"white",
      display:"grid",
      justifyItems:"center",
      alignItems:"center",
      width: number,
      height: 200,
      minWidth: 40,
    backgroundColor: color2,
    borderRadius: 16,}}>{number.to(n => n.toFixed(4))}</animated.div>
    </div>
}
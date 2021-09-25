import React,{useState,useEffect} from 'react'
import '../chats_counter/chats.css';


const UseEffectChatsCounter = () => {
    const [count,setCount] = useState(0);

useEffect (() => {
   /* console.log("hello useeffect"); use effect is also called sideEffect as it works at the end,but it runs atleaset once and useState reranders it everytime.*/
document.title = `Chats (${count})` //`Chats ${count}` 
});
//console.log("hello outside");  This will display first and it is inside the function.

    return (
        <div className = "counter">
        <h2 className = "count">Chat Counter App-Use Effect</h2>
            <h1 className="count">{count}</h1>
            <button className= "btn" onClick = { () => setCount(count + 1 )} >Click me</button>
        </div>
    )
}

export default UseEffectChatsCounter

//Change Name and toggle using if else:
/* import React,{useState}from 'react'
import './chats.css';

function useEffectChatsCounter() {
    const[myName,setMyName] = useState("Jayshree");
   
//     const changeName =()=>{
//       let val = myName;
//       if (val ==="Jayshree") {
//     setMyName("Jayshree Upadhyay")}
//     else{
//         setMyName('Jayshree')

//     }
// }
const changeName =()=>{
    let val = myName;
    (val ==="Jayshree")?setMyName("Jayshree Upadhyay"):setMyName('Jayshree')
}
    
    return (
        <div className = "counter">
        <h1 className = "count">{myName}</h1>
            <button className= "btn" onClick = {changeName}>click me</button>
        </div>
    )
}

export default useEffectChatsCounter*/

import React,{useState} from "react";

function Test(){
    // const[count,setCount]=useState(0);
    // const[name,setName]=useState('increment')
    const[state,setState]=useState({count:0,name:'increment'})
   const count=state.count
   const name=state.name

    function increment(){
      //  setCount(count+1);
    //   setCount(prevCount=>prevCount+1)
    //   setCount(prevCount=>prevCount+1)
    //  // setCount(prevCount=>prevCount+1)
       setState(prevState=>{return {...prevState,name:'increment',count:prevState.count+1}})    
}

    function decrement(){
        //setCount(count-1);
        // setCount(prevCount=>prevCount-1)

        // setCount(prevCount=>prevCount-1)
        setState(prevState=>{return {...prevState,name:'Decrement',count:prevState.count-1}}) 
  }


    return (
        <div>{name}<br/>
        <h2>speed meter</h2>
        <button onClick={()=>increment()}> Race </button> {count} <button  onClick={()=>decrement()}> break </button>
         </div>
    )
}export default Test;
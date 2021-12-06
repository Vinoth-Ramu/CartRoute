import React,{useState} from 'react'


 
function Cart() {
const[toggle1,setToggle1]=useState(false)
const[toggle2,setToggle2]=useState(false)
const[toggle3,setToggle3]=useState(false)
const[count,setCount]=useState(0)
const handletoggle1=(e)=>{
setToggle1(!toggle1)
if(e.target.name==="add to cart")
{
    setCount(count+1)
}
else{
    setCount(count-1)
}
}

const handletoggle2=(e)=>{
    setToggle2(!toggle2) 
    if(e.target.name==="add to cart")
    {
        setCount(count+1)
    }
    else{
        setCount(count-1)
    }
    }
const handletoggle3=(e)=>{
    setToggle3(!toggle3) 
    if(e.target.name==="add to cart")
    {
        setCount(count+1)
    }
    else{
        setCount(count-1)
    }
    }

    return (
        <div>
            
            count:{count}
            <button  name={toggle1?"remove from cart":"add to cart"}
            onClick={(e)=>handletoggle1(e)}
            >{toggle1?"remove from cart":"add to cart"}</button>

            <button  name={toggle2?"remove from cart":"add to cart"}
            onClick={(e)=>handletoggle2(e)
            }>{toggle2?"remove from cart":"add to cart"}</button>



            <button   name={toggle3?"remove from cart":"add to cart"}
            onClick={(e)=>handletoggle3(e)}>
                {toggle3?"remove from cart":"add to cart"}</button>
        </div>
    )
}

export{Cart}

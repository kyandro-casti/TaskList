import { useState } from "react"
function Adding(){ 
    const [list, setList] = useState([])
    const [input, setinput] = useState("")
    const handleClick = () =>{
        setList([...list, input])
        setinput("")
    }
    const inputChange = (e) =>{
        const value = e.target.value
        setinput(value)
    }
    return(
        <div>
            <div>
                <input style={{width: "200px"}} value={input} onChange={inputChange} placeholder="Doing groceries, washing dishes, etc"></input>
                <button  onClick={handleClick}>Adding to list</button>
            </div>
            <div style={{marginTop: "50px"}}>
            {list.map((item, index) => (
                <div key={index}>
                    <p >{item}
                    <input type="checkbox"></input>
                    </p>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Adding
import NavigationBar from "../components/NavigationBar"
import React, {useEffect} from "react"
import { useState } from "react"
const Counter = () => {
    // let arr = [1, 2, 3, 4, 5, "kokomi"]
    // arr.push(6)
    // console.log(arr)

    const [num, setNum] = useState(0);
    if(num <0){
        setNum(0)
    }

    const [kanojo, setKanojo] = useState("Kokomi");


    useEffect(() =>{
        if(num > 5){
            setKanojo("Ayaka")
        }
    },[num])

    return(
        <>
        <NavigationBar/>
        <h1>Number : {num}</h1>
        <h1>Kanojo : {kanojo}</h1>
        <button onClick={()=> setNum((prev) => prev+1 )}>+</button>
        <button onClick={()=> setNum((prev) => prev-1 )}>-</button>
        </>
    )
}
export default Counter
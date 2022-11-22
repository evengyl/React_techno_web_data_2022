import { useState, useEffect } from "react"

const Counter = (props) => {

    const [count, setCount] = useState(0)

    const handleClickCounter = () => {
        
        setCount(c => c + 1)
        console.log("1")
    }

    useEffect(() => {
        document.title = `Vous avez cliqué ${count}`
    }, [count])

    return(
        <div>
            <button onClick={ handleClickCounter }>
                Compteur : { count }
            </button>
        </div>
    )
}


export default Counter
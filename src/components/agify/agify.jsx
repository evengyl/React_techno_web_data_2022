import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const Agify = () => {

    const [age, setAge] = useState(0)
    const [prenom, setPrenom] = useState("")

    const baseUrl = "https://api.agify.io/?name="

    const handlePrenom = (e) => {
        setPrenom(e.target.value)
    }

    useEffect(() => {
        axios.get(baseUrl + prenom)
        .then(({data}) => {
            setAge(data.age)
        })

    }, [prenom])



    return(
        <>
            <input type="text" value={prenom} onChange={handlePrenom}></input>
            <p>Age probable de { prenom } : {age} ans</p>
        </>
    )
}


export default Agify
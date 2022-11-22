import Childrens from "../childrens/childrens"
import NameFavorite from "../nameFavorite/nameFavorite"
import { useState } from 'react'


const Parents = (props) => {

    const names = props.listNames

    const [nameFav, setNameFav] = useState("")

    const handleClick = (data) => {
        setNameFav(data)
    }

    return (
        <div>
            <Childrens fctOnParent={handleClick} data={names[0]} />
            <Childrens fctOnParent={handleClick} data={names[1]}/>
            <Childrens fctOnParent={handleClick} data={names[2]}/>
            <Childrens fctOnParent={handleClick} data={names[3]}/>
            <NameFavorite nameChild={ nameFav }/>
        </div>
    )
}


Parents.defaultProps = {
    nameChild : ""
}

export default Parents
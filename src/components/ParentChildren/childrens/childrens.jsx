

const Childrens = (props) => {

    const {data} = props

    const sayHello = (data) => {
        props.fctOnParent(data)
    }

    return (
        <p>
            Bonjour... { data }
            <button onClick={() => sayHello(data)} >Say hello</button>
        </p>
    )
}

Childrens.defaultProps = {
    data : null
}

export default Childrens
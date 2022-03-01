import React from 'react'


const Greet = props =>{
    const{name, title} = props
    return (
        <div>
            <h1>Hello {name} A.K.A {title}</h1>
            {/* {props.children} */}
        </div>
    )
} 

export default Greet
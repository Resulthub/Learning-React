import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Sadik</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className: 'Div'}, 
    React.createElement('h1', null, 'Hello Sadik') )
}

export default Hello
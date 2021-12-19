import React from 'react'

const Wrapper = (props:any) => {
    return (
        <div className={props.className} onKeyPress={props.onKeyPress} onClick={props.onClick}>
            {props.children}
        </div>
    )
}
export default Wrapper
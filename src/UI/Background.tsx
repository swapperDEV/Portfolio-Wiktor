import React from 'react'
import background from '../Assets/bg11.jpg'
const Background = (props:any) => {

    const styles = {
        backgroundImage: `url("${background}")`
    }
    return (
        <div style={styles} className="wrapper_image">
            <div className={props.className} onClick={props.onClick}>
                {props.children}
            </div>
        </div>
    )
}
export default Background
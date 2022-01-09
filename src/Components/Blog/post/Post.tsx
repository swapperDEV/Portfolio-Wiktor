import React from 'react'
import imgTest from '../../../Assets/bg11.jpg'

const Post = (props:any) => {
    const {content, date, creator, description, name, img} = props
    console.log(creator, date, name, description);
    return (
        <>
        <div className='carousel_item'>
            <div className='carousel_item_child'>
                <div className='post_img' style={{backgroundImage: `url("${imgTest}")`}}></div>
                <p className='post_title'> {name}</p>
                <div className='post_data'><p><i className="fas fa-user-alt"></i> {creator}</p> <p className='post_time'><i className="fas fa-clock"></i> {date}</p></div>
                <p className='post_description'>{description}</p>
                <button className='post_readmore'>Read More</button>
            </div>
        </div>
        </>
    )
}

export default Post
import React, {useEffect, forwardRef, useState} from 'react'
//@ts-ignore
import './styles/blog.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Post from './post/Post';
const BlogPost = forwardRef((props, ref) => {
    const [postsData, setPostsData] = useState([])
    const getPost = async () => {
        await fetch('http://192.168.0.45:555/api/').then(res=>res.json()).then(res=>setPostsData(res))
    }
    useEffect(() => {
        getPost()
    },[])
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    const posts = postsData.map((post) => {
        return (
            <div>
                <Post key={post.id} content={post.content} date={post.date} creator={post.creator} description={post.description} name={post.name} img={post.img}/>
            </div>
            )
        })
    
    return (
        <>
        <section className='blog_section' ref={ref}>
                <p className='blog_title'>Latest post from Blog</p>
                <div className='carousel_wrapper'>
                <AliceCarousel mouseTracking items={posts} autoPlay infinite autoPlayInterval={3000} responsive={responsive}/>
                </div>
            <br/>
        </section>
        </>
    )
})

export default BlogPost;
import React, { useEffect, forwardRef, useState } from "react";
import "./styles/blog.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Post } from "./post/Post";
export const Blog = forwardRef((props, ref) => {
  const [postsData, setPostsData] = useState([]);
  const getPost = async () => {};
  useEffect(() => {
    //to do - api
    setPostsData([
      {
        key: 2,
        content: "Lorem, lorem, lorem",
        date: "yesterday",
        creator: "Admin4",
        description: "lorem, lorem lorem",
        name: "Named",
      },
      {
        key: 3,
        content: "Lorem, lorem, lorem",
        date: "yesterday",
        creator: "Admin5",
        description: "lorem, lorem lorem",
        name: "Named",
      },
      {
        key: 1,
        content: "Lorem, lorem, lorem",
        date: "yesterday",
        creator: "Admin1",
        description: "lorem, lorem lorem",
        name: "Named",
      },
      {
        key: 4,
        content: "Lorem, lorem, lorem",
        date: "yesterday",
        creator: "Admin2",
        description: "lorem, lorem lorem",
        name: "Named",
      },
      {
        key: 5,
        content: "Lorem, lorem, lorem",
        date: "yesterday",
        creator: "Admin3",
        description: "lorem, lorem lorem",
        name: "Named",
      },
    ]);
  }, []);
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const posts = postsData.map((post) => {
    return (
      <div>
        <Post
          key={post.id}
          content={post.content}
          date={post.date}
          creator={post.creator}
          description={post.description}
          name={post.name}
        />
      </div>
    );
  });

  return (
    <>
      <section className="blog_section" ref={ref}>
        <p className="blog_title">Latest post from Blog</p>
        <div className="carousel_wrapper">
          <AliceCarousel
            mouseTracking
            items={posts}
            autoPlay
            infinite
            autoPlayInterval={3000}
            responsive={responsive}
          />
        </div>
        <br />
      </section>
    </>
  );
});

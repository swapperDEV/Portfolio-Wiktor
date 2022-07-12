import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const BlogPost = () => {
  const getPost = async () => {
    await fetch("http://192.168.0.45:555/api/")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <NavLink to="/admin">admin</NavLink>
    </>
  );
};

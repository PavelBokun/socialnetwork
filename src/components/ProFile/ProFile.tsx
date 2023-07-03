import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import "./ProFile.module.css";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import { PostType } from "../../Redux/state";

export type ProFileType = {
  data: PostType[];
addPost:(postText:string)=>void

};
const ProFile = (props: ProFileType) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts postData={props.data}  addPost={props.addPost}/>
    </>
  );
};

export default ProFile;

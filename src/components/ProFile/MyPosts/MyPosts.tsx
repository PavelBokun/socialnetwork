import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostDataProps } from "../ProFile";

type MyPostPropsType = {
  postData: PostDataProps[];
};

const MyPosts = (props: MyPostPropsType) => {
  debugger;

  let postsElements = props.postData.map((el) => (
    <Post message={el.message} like={el.like} />
  ));
  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    const text = newPostElement.current.value;

    if (text != null) {
      console.log(text);
    }
  };
  return (
    <div className={s.postsblock}>
      <div>
        <h3 className={s.postsize}>My posts</h3>
      </div>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={s.item}>
        {postsElements}
        {/* <Post message={postData[0].message} like={postData[0].like} />
        <Post message={postData[1].message} like={postData[1].like}/> */}
      </div>
    </div>
  );
};

export default MyPosts;
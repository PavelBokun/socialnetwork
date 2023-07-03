import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../Redux/state";
// import { PostDataProps } from "../ProFile";

type MyPostPropsType = {
  postData: PostType[];
  addPost:(postText:string)=>void
};

const MyPosts = (props: MyPostPropsType) => {
 
  let postsElements = props.postData.map((el) => (
    <Post message={el.message} like={el.like} />
  ));
  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPostHandler = () => {
       let text = newPostElement.current?.value;
      
    if (text != null) {
      props.addPost(text)
      
    }
    text=''
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
        <button onClick={addPostHandler}>Add post</button>
        {/* <button onClick={addPost}>Add post</button> */}

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

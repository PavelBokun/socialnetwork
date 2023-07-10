import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../Redux/state";
//  import { PostDataProps } from "../ProFile";

type MyPostPropsType = {
  postData: PostType[];
  // addPost:(postText:string)=>void
  newPostText:string
  // updateNewPostText:(newText:string)=>void
  dispatch:(action:any)=>void
};

const MyPosts = (props: MyPostPropsType) => {
 
  let postsElements = props.postData.map((el) => (
    <Post message={el.message} like={el.like} />
  ));
  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPostHandler = () => {
    props.dispatch({type:"ADD-POST"})
    //    let text = newPostElement.current?.value;
            
    // if (text != null) {
    //   props.addPost(text)
    //  props.updateNewPostText('')
      
    // }
    // text=''
  };

  const onPostChange=()=> {
    let text = newPostElement.current?.value;

    const action=({type:"UPDATE-NEW-POST-TEXT",newText:text})
    props.dispatch(action)
    //     props.updateNewPostText(text);
  }
  return (
    <div className={s.postsblock}>
      <div>
        <h3 className={s.postsize}>My posts</h3>
      </div>
      <div>
        <textarea onChange={onPostChange} 
        ref={newPostElement}
        value={props.newPostText}
          />
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

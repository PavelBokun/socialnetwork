
import classes from "./Post.module.css";


////////////////////////////////////////////////////////////////////
// это я добавил если будет косяк то дел
type PostPropsType= {
  message:string
  like:string
}
///////////////////////////////////////////////////////////////////
const Post = (props: PostPropsType) => {
  // console.log(props.message)
  return (
    <><div className={classes.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZf_hzY0D5h6nSkrVVrBVZlKo-ts3nuzSqgDFbOaY0oDawMMbK4DlFE1flw7tUCC8PuY&usqp=CAU"></img>
      {props.message}
      <div>
        {/* <span {props.name}></span> */}
        <span>Like {props.like}</span>
      </div>
    </div></>
  );
};

export default Post;

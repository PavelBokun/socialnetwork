import s from "./ProfileInfo.module.css";



const ProfileInfo = () => {
  return (
    <div className={s.con}>
      <div>
        <img className={s.img}
          src="https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg"
          
        />
        <div className={s.avatar}>avatar + descriptions</div>
      </div>
    </div>
  );
};
export default ProfileInfo;

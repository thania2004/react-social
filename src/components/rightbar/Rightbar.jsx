import "../rightbar/rightbar.css";
import {Users} from "../../Data";
import Online from "../Online/Online"

export default function Rightbar({profile}) {
  const HomeRightBar = () => {
    return(
<>


<div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.gif" alt=""/>
            <span className="birthdayText">
              <b>Kim Namjoon</b> and <b>4 other friends</b> have a birthday today
            </span>
          </div>
        
        <img className="rightbarAd" src="assets/ad.jpg" alt=""/>
    <hr className="separationUserFriendsFromConnect"/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">

         <>
         {Users.map((u) => (
          <Online key={u.id} user={u}/>
         ))}
          
          </>
         </ul>  

      

</>
    );
  };

const ProfileRightBar = () => {
  return(
    <>
    <h4 className="rightbarTitle">User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
         <span className="rightbarInfoValue">South Korea</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From</span>
         <span className="rightbarInfoValue">Madrid</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship</span>
         <span className="rightbarInfoValue">Single</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
         <span className="rightbarInfoValue">South Korea</span>
      </div>
    </div>
    <hr className="separationUserFriendsFromConnect"/>
     <h4 className="rightbarTitle">User Friends</h4>
     <div className="rightbarFollowings">

      <div className="rightbarFollowing">
        <img src="assets/rose.webp" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Rose</span>
      </div>

       <div className="rightbarFollowing">
        <img src="assets/jk.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Jungook</span>
      </div>

       <div className="rightbarFollowing">
        <img src="assets/DK.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">DK</span>
      </div>

       <div className="rightbarFollowing">
        <img src="assets/naeun_main_.png" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Na Eun</span>
      </div>

       <div className="rightbarFollowing">
        <img src="assets/namjoon.webp" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Kim Namjoon</span>
      </div>

       <div className="rightbarFollowing">
        <img src="assets/IU.png" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">IU</span>
      </div>

     </div>
    </>
  )
}

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <hr className="separationUserFriendsFromConnect"/>
          <ProfileRightBar/>
          <hr className="separationUserFriendsFromConnect"/>
          <HomeRightBar/>
        </div>
          
        
    
    </div>
  );
}

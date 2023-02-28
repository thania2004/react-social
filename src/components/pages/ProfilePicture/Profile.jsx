import "../ProfilePicture/Profile.css"
import Topbar from "../../topbar/Topbar"
import Sidebar from "../../sidebar/Sidebar"
import Feed from "../../feed/Feed"
import Rightbar from "../../rightbar/Rightbar"

export default function Profile() {
  return (
<>
    <Topbar/>
    <div className="profile">
      <Sidebar/> 
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">

            <img className="profileCoverImg" src="assets/ad.jpg" alt="" />
            <img className="profileUserImg" src="assets/rose.webp" alt="" />

            </div>
           <div className="profileInfo">
            <h4 className="profileInfoName">Thania Gamarra Bruno</h4>
             <span className="profileInfoDesc">Hello my dear developers!</span>
           </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
      <Rightbar Profile/>
      </div>
      </div>
     </div> 
      
</>   

  );
}

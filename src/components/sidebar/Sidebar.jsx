import "../sidebar/sidebar.css";
import {RssFeed,Chat,PlayCircle,Group,Bookmark, HelpOutline, WorkOutline, Event, School} from "@mui/icons-material"
import {Users} from "../../Data";
import CloseFriends from "../CloseFriends/CloseFriends";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
            <li className="sidebarListItem">
             <RssFeed  className="sidebarIcon" style={{fill: 'rgb(126, 24, 222)' }}/>
             <span className="sidebarListItemText">feed</span>
            </li>
            <li className="sidebarListItem">
             <Chat className="sidebarIcon" style={{fill: 'rgb(126, 24, 222)'}}/>
             <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
             <PlayCircle className="sidebarIcon" style={{fill: 'rgb(126, 24, 222)'}}/>
             <span className="sidebarListItemText">videos</span>
            </li>
            <li className="sidebarListItem">
             <Group className="sidebarIcon" style={{fill: 'rgb(126, 24, 222)'}}/>
             <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
             <Bookmark className="sidebarIcon" style={{fill: 'rgb(126, 24, 222)'}}/>
             <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
             <HelpOutline className="sidebarIcon" style={{fill: 'rgb(126, 24, 222)'}}/>
             <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
             <WorkOutline className="sidebarIcon" style={{fill: 'rgb(126, 24, 222)'}}/>
             <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
             <Event className="sidebarIcon" style={{fill: 'rgb(126, 24, 222)'}}/>
             <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
             <School className="sidebarIcon" style={{fill: 'rgb(126, 24, 222)'}}/>
             <span className="sidebarListItemText">Courses</span>
            </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">

                <>
                {Users.map((u) => (
              <CloseFriends key={u.id} user={u}/>
                ))}
               
                   
                
                </>
               
            </ul>
        </div>
    </div>
  )
}

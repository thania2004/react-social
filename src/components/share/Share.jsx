import "../share/share.css"
import {PermMedia,Label, Room,EmojiEmotions } from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
       <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg" src="/assets/jenny.jpg" alt=""/>
            <input placeholder="what's in your mind"
             className="shareInput"/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia  className="shareIcon" style={{fill: 'tomato'}}/>
                    <span className="shareOptionText">Photo</span>
                </div>
                <div className="shareOption">
                    <Label  className="shareIcon" style={{fill: 'blue'}}/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room  className="shareIcon" style={{fill: 'green'}}/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions  className="shareIcon" style={{fill: 'goldenrod'}}/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
       </div>
        </div>
  )
}

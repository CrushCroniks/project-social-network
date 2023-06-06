import CommentItem from "../CommentItem"
import "./content.scss"
import commentsData from "../../data/comments.json"
import Comments from "../Comments"


function Content(){
    return(
      <div className='content'>
        <div className="user-info">
          <img className="user-info__avatar" src="/Avatar.jpg" alt="" />
          <h1 className="user-info__name">Igor</h1>
          <p className="user-info__status">Programming on Java Script</p>
        </div>
        <Comments/>
      </div>
    )
  }

export default Content
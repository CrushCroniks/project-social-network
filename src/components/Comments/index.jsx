import commentsData from "../../data/comments.json"
import CommentItem from "../CommentItem"
function Comments(){
    
    return(
        <div className="comments">
            <textarea name="comment" className="new-comment" rows="5"></textarea>
            <button className="submit">submit</button>
            <div className="comment-item">
                {commentsData.map((com) => (
                    <CommentItem data={com}/>

                ))}
            </div>
            <div className="final-comments">           
            </div>
        </div>
    )
}

export default Comments
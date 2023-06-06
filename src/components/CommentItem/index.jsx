
function CommentItem({data}){
    console.log(data)
    return(
        <div className="comment">
            <img src="/Avatar.jpg" className="avatar" alt="" />
            <div className="name">{data.name}</div>
            <div className="text">{data.text}</div>
        </div>
    )
}

export default CommentItem
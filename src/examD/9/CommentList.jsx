import Comment from "./9";

const comments = [
    {
        people: "이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        people: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        people: "강민경",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((list) => {
                return (
                    <Comment name={list.people} comment={list.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;

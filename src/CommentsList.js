import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from './decorators/toggleOpen'


class CommentsList extends Component {
    render() {
        const {comments, isOpen, toggleOpen} =  this.props;
        if (comments == null) return <h3><b>No comments yet</b></h3>
        const commentsList = isOpen ? comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>): null;
        const linkComments = isOpen ? "Close comments": "Show comments";

        return (
            <ul>
                <a href="#" onClick={toggleOpen}>{linkComments}</a>
                {commentsList}
            </ul>
        )
    }
}

export default toggleOpen(CommentsList)
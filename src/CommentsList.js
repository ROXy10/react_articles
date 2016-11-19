import React, {Component} from 'react'
import Comment from './Comment'


class CommentsList extends Component {

    state = {
        isOpen: false
    };

    render() {
        const article = this.props.article;
        const comments =  article.comments || null;
        const isOpen = this.state.isOpen;
        const commentsList = comments != null && isOpen ? comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>): null;
        const linkComments = comments == null ? "No comments": "Comments";

        return (
            <ul>
                <a href="#" onClick={this.toggleOpen}>{linkComments}</a>
                {commentsList}
            </ul>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentsList
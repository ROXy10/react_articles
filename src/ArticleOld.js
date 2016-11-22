import React from 'react'
import CommentsList from './CommentsList'
import toggleOpen from './mixins/toggleOpen'

const ArticleOld = React.createClass({
    mixins: [toggleOpen],
    render() {
        const article = this.props.article;
        const isOpen = this.state.isOpen;
        const body = isOpen ? <section>{ article.text }<CommentsList comments = {article.comments}/></section> : null;

        return (
            <div>
                <h1 onClick={this.toggleOpen}>{ article.title }</h1>
                {body}
            </div>
        )
    }
});

export default ArticleOld
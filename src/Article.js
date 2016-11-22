import React, {Component, PropTypes} from 'react'
import CommentsList from './CommentsList'

class Artilce extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    };

    render() {
        const {isOpenId, isOpen, openArticle, article: {title, text, comments}} = this.props;
        const body = isOpenId && isOpen? <section>{ text }<CommentsList comments={comments}/></section> : null;
        return (
            <div>
                <h1 onClick={openArticle}>{ title }</h1>
                {body}
            </div>
        )
    };
}

export default Artilce
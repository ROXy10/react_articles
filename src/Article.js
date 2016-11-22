import React, {Component, PropTypes} from 'react'
import CommentsList from './CommentsList'


class Artilce extends Component {

    state = {
        isOpen: false
    };

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isOpen: false
    //     }
    // }

    render() {
        const { isOpen, openArticle, article: { title, text, comments } } = this.props;
        const body = isOpen ? <section>{ text }<CommentsList comments = {comments}/></section> : null;

        return (
            <div>
                <h1 onClick={openArticle}>{ title }</h1>
                {body}
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


// function Artilce(props) {
//     const article = props.article;
//     // const { article: {title, text } } = props
//     return (
//         <div>
//             <h1>{ article.title }</h1>
//             <section>{ article.text }</section>
//         </div>
//     )
// }

export default Artilce
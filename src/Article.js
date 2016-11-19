import React, {Component} from 'react'
import CommentsList from './CommentsList'


class Artilce extends Component {

    state = {
        isOpen: false
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isOpen: false
    //     }
    // }

    render() {
        const article = this.props.article;
        const isOpen = this.state.isOpen;
        const body = isOpen ? <section>{ article.text }</section> : null;

        return (
            <div>
                <h1 onClick={this.toggleOpen}>{ article.title }</h1>
                {body}
                <CommentsList article = {article}/>
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
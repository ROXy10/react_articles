import React, { Component }  from 'react'


export default (Component) => {
    return class DecoratedComponent extends Component {
        state = {
            openArticleId: null,
            isOpen: false
        };
        openArticle = id => ev => {
            if (ev) ev.preventDefault();
            this.setState({
                openArticleId: id,
                isOpen: !this.state.isOpen
            })
        };

        render() {
            return <Component {...this.props} openArticleId={this.state.openArticleId} openArticle={this.openArticle} isOpen={this.state.isOpen}/>
        }
    };
}


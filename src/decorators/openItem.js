import React, { Component }  from 'react'


export default (Component) => {
    return class DecoratedComponent extends Component {
        state = {
            openItemId: null,
            isOpen: false
        };
        openItem = id => ev => {
            if (ev) ev.preventDefault();
            this.setState({
                openItemId: id,
                isOpen: !this.state.isOpen
            })
        };

        render() {
            return <Component {...this.props} openItemId={this.state.openItemId} openItem={this.openItem} isOpen={this.state.isOpen}/>
        }
    };
}


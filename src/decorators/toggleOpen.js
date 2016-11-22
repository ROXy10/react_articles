import React, { Component }  from 'react'


export default (Component) => {
    return class DecoratedComponent extends Component {
        state = {
            isOpen: false
        };
        toggleOpen = (ev) => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        };

        render() {
            return <Component {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen}/>
        }
    };
}
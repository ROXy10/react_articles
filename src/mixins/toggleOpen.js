export default {
    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    },
    getInitialState() {
        return {
            isOpen: false
        }
    }
}
import React, {PropTypes} from 'react'


function Comment(props) {
    const { comment: {user, text} } = props;
    return (
        <div>
            <section><b>Comment:</b> { text }</section>
            <h3><b>Author:</b> { user }</h3>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
};

export default Comment
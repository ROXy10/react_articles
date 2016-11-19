import React from 'react'


function Comment(props) {
    const { comment: {user, text} } = props;
    return (
        <div>
            <section><b>Comment:</b> { text }</section>
            <h3><b>Author:</b> { user }</h3>
        </div>
    )
}

export default Comment
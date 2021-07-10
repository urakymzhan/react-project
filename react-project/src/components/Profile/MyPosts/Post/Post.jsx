import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="data:image/jpeg;base64,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"
                alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
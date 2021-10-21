import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://i.imgur.com/uPOwfbE.png' className={s.profile_image}/>
                {props.message}
            </div>

            <div className={s.like_dislike}>
                <span>
                    <img src='https://i.imgur.com/3BWMVOy.png' alt='like' className={s.like_dislike_image}/>
                </span>
                {props.likesCounter}
                <span>
                    <img src='https://i.imgur.com/8UCDIll.png' alt='like' className={s.like_dislike_image}/>
                </span>
                {props.dislikesCounter}
            </div>
        </div>
    )
}

export default Post;
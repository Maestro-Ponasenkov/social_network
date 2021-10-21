import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post id={p.id} message={p.message} likesCounter={p.likesCounter}
                        dislikesCounter={p.dislikesCounter}/>)

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <div>
                    <textarea id='newPost'>ffasdfasdfasdfasdfasd</textarea>
                </div>
                <div>
                    <button id='addPost'>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;

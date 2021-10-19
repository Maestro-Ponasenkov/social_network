import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    // let textarea = 0;
    // let button = 0;

    // button.addEventListener('click', Post());
    return (
            <div className={s.posts}>
                My posts
                <div>
                    <textarea id='newPost'>ffasdfasdfasdfasdfasd</textarea>
                    {/*{textarea = (document.getElementById('newPost').value)};*/}
                    <button id='addPost'>Add post</button>
                    {/*{button = (document.getElementById('addPost').value)};*/}

                </div>
               <Post message='Hi how are you?' likecount='15' dislikecount='2'/>
               <Post message="It's my first post" likecount='20' dislikecount='5'/>
            </div>
    )
}

export default MyPosts;

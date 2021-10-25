import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you?', likesCounter: 15, dislikesCounter: 2},
            {id: 2, message: 'It\'s my first post', likesCounter: 12, dislikesCounter: 7},
            {id: 3, message: 'It\'s my second post', likesCounter: 17, dislikesCounter: 10},
            {id: 4, message: 'It\'s my third post', likesCounter: 14, dislikesCounter: 1},
            {id: 5, message: 'It\'s my fourth post', likesCounter: 31, dislikesCounter: 4}
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Dasha'},
            {id: 3, name: 'Nastia'},
            {id: 4, name: 'Vlad'},
            {id: 5, name: 'Liza'},
            {id: 6, name: 'Artem'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCounter: 0,
        dislikesCounter: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}



export default state;
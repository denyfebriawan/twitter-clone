import React from "react";
import './TweetBox.css';
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input 
                    type="text" 
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
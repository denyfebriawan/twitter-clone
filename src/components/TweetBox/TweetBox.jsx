import "./TweetBox.css"
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import nextId from "react-id-generator";
import { addTweet } from "../../redux/modules/Stories";
import { useAuth } from "../../context/AuthContext";

const Tweetbox = () => {
    const {currentUser} = useAuth();
    const id = nextId();
    const dispatch = useDispatch();
    const [charAllowed, setCharAllowed] = useState(280);
    const [tweet, setTweet] = useState({
        parentId: null,
        id: "0",
        avatar: "https://media.hitekno.com/thumbs/2022/09/02/30698-one-piece-shanks/730x480-img-30698-one-piece-shanks.jpg",
        displayName: "Shanks",
        userName: "@akataro",
        verified: true,
        context: "",
        imageUrl: "",
    });

    const onChangeHandler = (event) => {
        setCharAllowed(280 - event.target.value.length);
        const { name, value } = event.target;
        setTweet({ ...tweet, [name]: value });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (tweet.context.trim() === "") return;
        
        dispatch(addTweet({ ...tweet, id }));
        setCharAllowed(280);
        setTweet({
            parentId: null,
            id: "0",
            avatar: "https://media.hitekno.com/thumbs/2022/09/02/30698-one-piece-shanks/730x480-img-30698-one-piece-shanks.jpg",
            displayName: "Shanks",
            userName: "@akataro",
            verified: true,
            context: "",
            imageUrl: "",
        });
    };

    return (
        <div className="tweetBox" onSubmit={onSubmitHandler} >
            <form>
                <div className="tweetBox__input">
                    <Avatar src={tweet.avatar} />
                    <input
                        placeholder="What's happening?"
                        type="text"
                        name="context"
                        value={tweet.context}
                        onChange={onChangeHandler}
                    />
                </div>
                <span style={{
                    color: charAllowed < 0 ? "red" : "dodgerblue",
                    marginLeft: "auto"
                }}>
                    Characters remaining: {charAllowed}
                </span>
                <input
                    className="tweetBox__imageInput"
                    placeholder="Enter image URL"
                    type="text"
                    name="imageUrl"
                    value={tweet.imageUrl}
                    onChange={onChangeHandler}
                />
                <button className="tweetBox__tweetButton" disabled={ charAllowed < 0}>Tweet</button>
            </form>
        </div>
    )
};

export default Tweetbox;
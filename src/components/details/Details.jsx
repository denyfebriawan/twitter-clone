import Sidebar from '../sidebar/Sidebar';
import Widgets from '../widgets/Widgets';
import "./Details.css"
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import "../feed/Feed.css"
import { useEffect, useState } from 'react';
import { addReply, getReplyByID, getTweetByID } from '../../redux/modules/stories';
import nextId from "react-id-generator";


const Details = () => {
    const idRep = nextId();
    const { id, id2 } = useParams();
    const dispatch = useDispatch();
    const tweet = useSelector((state) => state.stories.tweet);
    const reps = useSelector((state) => state.stories.tweets);
    console.log('tweet', tweet);
    console.log('reps', reps);
    

    useEffect(() => {
        dispatch(getTweetByID(id));
        // dispatch(getReplyByID(id2));
    }, [dispatch, id]);

    const [reply, setReply] = useState({
        id: idRep,
        parentId: tweet.id,
        avatar: "https://media.hitekno.com/thumbs/2022/09/02/30698-one-piece-shanks/730x480-img-30698-one-piece-shanks.jpg",
        displayName: "Shanks",
        userName: "@akataro",
        verified: true,
        context: "",
        imageUrl: "",
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setReply({ ...reply, [name]: value });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (reply.context.trim() === "") return;

        dispatch(addReply({ ...reply, idRep }));
        console.log('dispatched');
        console.log('parentId', tweet.parentId);
        // console.log('id:', tweet.id);
        // console.log('idRep:', idRep);
        console.log('active tweet', tweet);
        console.log('sent reply:', reply);
        setReply({
            id: idRep,
            parentId: tweet.id,
            avatar: "https://media.hitekno.com/thumbs/2022/09/02/30698-one-piece-shanks/730x480-img-30698-one-piece-shanks.jpg",
            displayName: "Shanks",
            userName: "@akataro",
            verified: true,
            context: "",
            imageUrl: "",
        });
    };
    return (
        // <h1>Tweets</h1>
        <div className='details'>
            {/* {sidebar} */}
            <Sidebar />
            <div className='feed'>
                <h1>Tweets</h1>
                <div className="post" key={tweet.id} >
                    <div className="post__avatar">
                        <Avatar src={tweet.avatar} />
                    </div>
                    <div className="post__body">
                        <div className="post__header">
                            <div className="post_headerText">
                                <h3>
                                    {tweet.displayName}{' '}
                                    <span className="post__headerSpecial">
                                        <VerifiedUserIcon className="post__badge" />{' '}{tweet.userName}
                                    </span>
                                </h3>
                            </div>
                            <div className="post__headerDescription">
                                <p>{tweet.context}</p>
                            </div>
                        </div>
                        <img src={tweet.imageUrl} alt="" />
                        <div className="post__footer">
                            <ChatBubbleOutlineIcon fontSize="small" />
                            <RepeatRoundedIcon fontSize="small" />
                            <FavoriteBorderIcon fontSize="small" />
                            <IosShareOutlinedIcon fontSize="small" />
                        </div>
                    </div>
                </div>

                {/* ReplyBox */}
                <div className="replyBox"
                    onSubmit={onSubmitHandler}
                >
                    <form>
                        <div className="replyBox__input">
                            <Avatar src={tweet.avatar} />
                            <input
                                placeholder="Tweet your reply"
                                type="text"
                                name="context"
                                value={reply.context}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <input
                            className="tweetBox__imageInput"
                            placeholder="Enter image URL"
                            type="text"
                            name="imageUrl"
                            value={reply.imageUrl}
                            onChange={onChangeHandler}
                        />
                        <button
                            className="replyBox__replyButton"
                        >Reply</button>
                    </form>
                </div>
                {/* Replies */}
                {reps.filter((rep) => rep.parentId === tweet.id).map((rep) => {
                    return (
                        <div className="post" key={rep.id} >
                            <div className="post__avatar">
                                <Avatar src={rep.avatar} />
                            </div>
                            <div className="post__body">
                                <div className="post__header">
                                    <div className="post_headerText">
                                        <h3>
                                            {rep.displayName}{' '}
                                            <span className="post__headerSpecial">
                                                <VerifiedUserIcon className="post__badge" />{' '}{rep.userName}
                                            </span>
                                        </h3>
                                    </div>
                                    <div className="post__headerDescription">
                                        <p>{rep.context}</p>
                                    </div>
                                </div>
                                <img src={rep.imageUrl} alt="" />
                                <div className="post__footer">
                                    <ChatBubbleOutlineIcon fontSize="small" />
                                    <RepeatRoundedIcon fontSize="small" />
                                    <FavoriteBorderIcon fontSize="small" />
                                    <IosShareOutlinedIcon fontSize="small" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* <Widgets /> */}
        </div>
    )
};

export default Details;
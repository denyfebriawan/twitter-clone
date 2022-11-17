const ADD_TWEET = "ADD_TWEET";

const ADD_REPLY = "ADD_REPLY";

const GET_TWEET_BY_ID = "GET_TWEET_BY_ID";

const GET_REPLY_BY_ID = "GET_REPLY_BY_ID";

export const addTweet = (payload) => {
    return {
        type: ADD_TWEET,
        payload,
    };
};

export const addReply = (payload) => {
    return {
        type: ADD_REPLY,
        payload,
    };
};

export const getTweetByID = (payload) => {
    return {
        type: GET_TWEET_BY_ID,
        payload,
    };
};

export const getReplyByID = (payload) => {
    return {
        type: GET_REPLY_BY_ID,
        payload,
    };
};

const initialState = {
    tweets: [
        {
        //     parentId: null,
        //     id: "1",
        //     avatar: "https://media.hitekno.com/thumbs/2022/09/02/30698-one-piece-shanks/730x480-img-30698-one-piece-shanks.jpg",
        //     displayName: "Shanks",
        //     userName: "@akataro",
        //     verified: true,
        //     showRep: false,
        //     context: "Kenapa air mata warnanya bening? Karena kalo warnanya ijo namanya air matcha 🙂",
        //     imageUrl: "https://media.giphy.com/media/lQ1nXVifuLqyVAH2Gu/giphy.gif",
        // },
        // {
        //     parentId: null,
        //     id: "2",
        //     avatar: "https://media.hitekno.com/thumbs/2022/09/02/30698-one-piece-shanks/730x480-img-30698-one-piece-shanks.jpg",
        //     displayName: "Shanks",
        //     userName: "@akataro",
        //     verified: true,
        //     showRep: false,
        //     context: "Hehe",
        //     imageUrl: "https://pbs.twimg.com/media/FfmKVsFagAAj_fQ?format=jpg&name=medium",
        // },
        // {
        //     parentId: "1",
        //     id: "3",
        //     avatar: "https://media.hitekno.com/thumbs/2022/09/02/30698-one-piece-shanks/730x480-img-30698-one-piece-shanks.jpg",
        //     displayName: "Shanks",
        //     userName: "@akataro",
        //     verified: true,
        //     showRep: false,
        //     context: "Reply nih",
        //     imageUrl: "",
        // },
        // {
        //     parentId: "2",
        //     id: "4",
        //     avatar: "https://media.hitekno.com/thumbs/2022/09/02/30698-one-piece-shanks/730x480-img-30698-one-piece-shanks.jpg",
        //     displayName: "Shanks",
        //     userName: "@akataro",
        //     verified: true,
        //     showRep: false,
        //     context: "Bucin",
        //     imageUrl: "",
        }
    ],
    tweet: {
        // parentId: null,
        // id: "0",
        // avatar: "",
        // displayName: "",
        // userName: "",
        // verified: false,
        // showRep: false,
        // context: "",
        // imageUrl: "",
    },
}

const Stories = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TWEET:
            return {
                ...state,
                tweets: [...state.tweets, action.payload].filter(tweet => tweet.parentId === null),
            };

        case GET_TWEET_BY_ID:
            return {
                ...state,
                tweet: state.tweets.find((tweet) => {
                    return tweet.id === action.payload;
                }),
            };

        case ADD_REPLY:
            return {
                ...state,
                // tweets: [...state.tweets, action.payload]
                tweets: [...state.tweets, action.payload],
            }

        case GET_REPLY_BY_ID:
            return {
                ...state,
                tweet: state.tweets.find((tweet) => {
                    return tweet.parentId === action.payload;
                }),
            };

        default:
            return state;
    }
};

export default Stories;
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../firebase";
const post_db = firestore.collection("post");

const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const DEL_POST = "DEL_POST";
const EDIT_POST = "EDIT_POST";

const getPost = createAction(GET_POST, post_list => ({ post_list }));

const getPostFB = () => {
    return function (dispatch, getState, { history }) {
        post_db.get().then(docs => {
            let post_data = [];
            docs.forEach(doc => {
                if (doc.exists) {
                    post_data = [...post_data, { id: doc.id, ...doc.data() }];
                }
            });
            dispatch(getPost(post_data));
        });
    };
};

const initialState = {
    list: [],
};

export default handleActions(
    {
        [GET_POST]: (state, action) =>
            produce(state, draft => {
                draft.list = action.payload.post_list;
            }),
    },
    initialState
);

const actionCreators = { getPost, getPostFB };
export { actionCreators };

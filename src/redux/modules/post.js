import { createAction, handleActions } from "redux-actions";
import {produce} from "immer" 
import { initial } from "lodash";


const GET_POST = "GET_POST"
const ADD_POST = "ADD_POST"
const DEL_POST = "DEL_POST"
const EDIT_POST = "EDIT_POST"

const getPost = createAction(GET_POST, post_list=> ({post_list}))

const initialState = {
    list : []
}

export default handleActions({
    [GET_POST]: (state,action)=> produce((state,draft)=>draft.list = action.payload.post_list)
},initialState)

const actionCreators = {getPost}
export {actionCreators}
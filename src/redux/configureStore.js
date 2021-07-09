import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import Post from "./modules/post";

export const history = createBrowserHistory();

//root reducer 만들기
const rootReducer = combineReducers({
    post: Post,
    router: connectRouter(history),
});

//미들웨어
const middlewares = [thunk.withExtraArgument({ history: history })];

//개발환경
const env = process.env.NODE_ENV;
if (env === "development") {
    //require은 import처럼 패키지를 가져오는 역할을 합니다. 개발환경에서만 사용하기 때문에 따로 패키지를 설치하지않고, require로 가져옵니다.
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}
const composeEnhancers =
    //우리가 윈도우인 환경에서만 돌아가기 위한 조건 && 리덕스 데브 툴즈가 설치되어있는지에 대한 조건
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

//미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//스토어 만들기
//미들웨어랑 루트 리듀서 엮어서 스토어 만들기!
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();

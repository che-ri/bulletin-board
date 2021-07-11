import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Write = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [user, setUser] = useState("");
    const [text, setText] = useState("");
    const postWrite = () => {
        const post_tmp = {
            title,
            user,
            text,
        };
        dispatch(postActions.addPostFB(post_tmp));
    };

    return (
        <>
            <Grid
                xs={12}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Grid xs={12} style={{ margin: "10px 0px", display: "flex" }}>
                    <TextField
                        label="제목"
                        id="filled-size-small"
                        variant="filled"
                        size="small"
                        onChange={e => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid xs={12} style={{ margin: "10px 0px" }}>
                    <TextField
                        label="글쓴이"
                        id="filled-size-small"
                        variant="filled"
                        size="small"
                        onChange={e => setUser(e.target.value)}
                    />
                </Grid>
                <Grid xs={12} style={{ margin: "10px 0px" }}>
                    <TextField
                        id="filled-multiline-static"
                        label="내용"
                        multiline
                        rows={5}
                        variant="filled"
                        onChange={e => setText(e.target.value)}
                    />
                </Grid>
                <Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ margin: "0 10px 0 0" }}
                        onClick={postWrite}
                    >
                        글쓰기
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => history.push("/")}
                    >
                        뒤로가기
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Write;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";
import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";

const Detail = props => {
    const idx = props.match.params.id;
    const dispatch = useDispatch();
    const post = useSelector(state => state.post.list);

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
                <Typography subtitle1="h2" component="h2">
                    {post[idx].title}
                </Typography>
                <Typography subtitle1="h2" component="h2">
                    {post[idx].user}
                </Typography>
                <Typography subtitle1="h2" component="h2">
                    {post[idx].contents}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/")}
                >
                    돌아가기
                </Button>
            </Grid>
        </>
    );
};

export default Detail;

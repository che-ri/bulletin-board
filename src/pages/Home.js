import React from "react";
import List from "../components/List";
import { Button, Grid, Typography } from "@material-ui/core";

const Home = () => {
    return (
        <>
            <Grid
                xs={12}
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <Grid>
                    <Typography variant="h4" component="h2">
                        게시판
                    </Typography>
                </Grid>
                <Grid>
                    <Button variant="contained" color="primary">
                        글쓰기
                    </Button>
                </Grid>
            </Grid>
            <List />
        </>
    );
};

export default Home;

import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";

const Write = () => {
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
                    />
                </Grid>
                <Grid xs={12} style={{ margin: "10px 0px" }}>
                    <TextField
                        label="글쓴이"
                        id="filled-size-small"
                        variant="filled"
                        size="small"
                    />
                </Grid>
                <Grid xs={12} style={{ margin: "10px 0px" }}>
                    <TextField
                        id="filled-multiline-static"
                        label="내용"
                        multiline
                        rows={5}
                        variant="filled"
                    />
                </Grid>
                <Grid>
                    <Button variant="contained" color="primary">
                        글쓰기
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Write;

import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";

const Detail = () => {
    const data = [{ user: "글쓴이1", title: "제목", contents: "hello!" }];

    return (
        <>
            {data.map((item, idx) => {
                console.log(item);
                return (
                    <Grid
                        key={idx}
                        xs={12}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography subtitle1="h2" component="h2">
                            {item.title}
                        </Typography>
                        <Typography subtitle1="h2" component="h2">
                            {item.user}
                        </Typography>
                        <Typography subtitle1="h2" component="h2">
                            {item.contents}
                        </Typography>
                        <Button variant="contained" color="primary">
                            돌아가기
                        </Button>
                    </Grid>
                );
            })}
        </>
    );
};

export default Detail;

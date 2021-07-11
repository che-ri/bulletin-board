import React, { useEffect } from "react";
import { actionCreators as postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});

const data = [
    { number: 1, user: "글쓴이1", title: "제목" },
    { number: 2, user: "글쓴이2", title: "제목2" },
];

export default function BasicTable() {
    const dispatch = useDispatch();
    const post_list = useSelector(state => state.post.list);
    const classes = useStyles();
    useEffect(() => {
        dispatch(postActions.getPostFB());
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>글번호</TableCell>
                        <TableCell align="left">글쓴이</TableCell>
                        <TableCell align="left">글제목</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {post_list.map((item, idx) => (
                        <TableRow key={idx} onClick={() => console.log("hi!")}>
                            <TableCell component="th" scope="row">
                                {idx}
                            </TableCell>
                            <TableCell align="left">{item.user}</TableCell>
                            <TableCell align="left">{item.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

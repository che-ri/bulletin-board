import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";

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

export default function BasicTable() {
    const post_list = useSelector(state => state.post.list);
    const dispatch = useDispatch();
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
                    {post_list
                        ? post_list.map((item, idx) => (
                              <TableRow
                                  key={idx}
                                  onClick={() => history.push(`/detail/${idx}`)}
                              >
                                  <TableCell component="th" scope="row">
                                      {idx + 1}
                                  </TableCell>
                                  <TableCell align="left">
                                      {item.user}
                                  </TableCell>
                                  <TableCell align="left">
                                      {item.title}
                                  </TableCell>
                              </TableRow>
                          ))
                        : ""}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

import React from "react";
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
    const classes = useStyles();

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
                    {data.map((item, idx) => (
                        <TableRow key={idx} onClick={() => console.log("hi!")}>
                            <TableCell component="th" scope="row">
                                {item.number}
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

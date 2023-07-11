import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, domain, correct, possible) {
  return { id, date, domain, correct, possible };
}

const rows = [
  createData(0, "7/5/23", "AWS Development", 8, 10),
  createData(0, "7/5/23", "AWS Development", 6, 10),
  createData(0, "7/5/23", "AWS Security", 9, 10),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Quiz Results</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Domain</TableCell>
            <TableCell>Correct</TableCell>
            <TableCell>Possible</TableCell>
            <TableCell align="right">Total Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.domain}</TableCell>
              <TableCell>{row.correct}</TableCell>
              <TableCell>{row.possible}</TableCell>
              <TableCell align="right">
                {Math.floor((row.correct / row.possible) * 100)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

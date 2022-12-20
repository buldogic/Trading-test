import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";

export function ArchiveTrading(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Side</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Instrument</TableCell>
            <TableCell>Volume</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.deals.map((deal, index) => (
            <TableRow key={index}>
              <TableCell >
                {deal.type}
              </TableCell>
              <TableCell>
                {deal.type === "Buy" ? deal.pair.price1 : deal.pair.price2}
              </TableCell>
              <TableCell>
                {deal.pair.coin1}/{deal.pair.coin2} {deal.pair.tom}
              </TableCell>
              <TableCell>{deal.volume}</TableCell>
              <TableCell>
                {format(deal.date, "yyyy.MM.dd HH:mm:ss:SSS")}
              </TableCell>
            </TableRow>
          ))}

          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.calories}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

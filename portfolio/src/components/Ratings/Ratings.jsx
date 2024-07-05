
import React from 'react';
import "./Ratings.scss";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';


const StarRating = ({ value }) => {
    const starStyle = {
        color: 'goldenrod', 
        stroke: 'black', 
        strokeWidth: '5px'
      };
  
    return (
      <Rating
        initialRating={value}
        emptySymbol={<FaRegStar style={starStyle} />}
        fullSymbol={<FaStar style={starStyle} />}
        halfSymbol={<FaStarHalfAlt style={starStyle} />}
        readonly
      />
    );
  };

function createData(Title, Rating, Notes) {
  return { Title, Rating, Notes };
}

const rows = [
  createData('Frozen yoghurt', 1, 'fun'),
  createData('Ice cream sandwich', 2, 'fun'),
  createData('Eclair', 3.5, 'fun'),
  createData('Cupcake', 4, 'fun'),
  createData('Gingerbread', 5, 'fun'),
];

export default function Ratings() {
  return (
    <div className="Ratings">
        <h1>Ratings</h1>
        <TableContainer className="ratings-list" component={Paper}>
            <Table sx={{ minWidth: 50 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='TableTitle'>Title </TableCell>
                        <TableCell className='TableTitle' align="left">Rating</TableCell>
                        <TableCell className='TableTitle' align="left">Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.Title}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.Title}
                        </TableCell>
                        <TableCell align="left"><StarRating value={row.Rating}/></TableCell>
                        <TableCell align="left">{row.Notes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    
  )
}


import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProduct } from '../store/actions/productAction';
import Navbar from '../component/Navbar';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const Home = () => {

  const distpatch = useDispatch();

  //get-data
  const { product, error, loading } = useSelector(state => state.Data)

  useEffect(() => {
    distpatch(getProduct())
    console.log(product);
  }, [distpatch]);

  //delete-data
  const handleDelet = (id) => {
    distpatch(deleteProduct(id));
    distpatch(getProduct());
  }

  return (
    <>
      <Navbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product && product.map((val, ind) => (
              <StyledTableRow key={ind}>
                <StyledTableCell component="th" scope="row">
                  {val.id}
                </StyledTableCell>
                <StyledTableCell align="center">{val.name}</StyledTableCell>
                <StyledTableCell align="center">{val.price}</StyledTableCell>
                <StyledTableCell align="center">{val.description}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button style={{ margin: '2px' }} variant="contained" color='secondary' onClick={() => handleDelet(val.id)}>Delete</Button>
                  <Button variant="contained" color='primary'>Edit</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
}

export default Home;

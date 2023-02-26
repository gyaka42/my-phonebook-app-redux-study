import React, { useEffect } from "react";
import Button, { buttonClasses } from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import { blue, yellow, red } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";

/* COLOR */



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

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: red
  }
});


const Home = () => {
  const navigate=useNavigate()
  let dispatch = useDispatch()
  const { users } = useSelector(state => state.data)


  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  const handleDelete = (id) => {
      if(window.confirm("Are you sure that you want to delete the user?")){
        dispatch(deleteUser(id))
      }
  }
  
function handleClick(){
  navigate("/addUser")
}

  return (
    <ThemeProvider theme={theme}>
      <div style={{marginTop: "50px"}}>
        <Button onClick={handleClick} variant="contained">Add Contact</Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 50 }}>
      <TableContainer sx={{ maxWidth: 1400 }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Phone Number</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Acion</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {user.firstName}
                </StyledTableCell>
                <StyledTableCell align="center">{user.lastName}</StyledTableCell>
                <StyledTableCell align="center">{user.phonenumber}</StyledTableCell>
                <StyledTableCell align="center">{user.address}</StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center"><ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button onClick={()=>handleDelete(user.id)} style={{marginRight: "3px"}} color="secondary">Delete</Button>
                  <Button color="primary">Edit</Button>
                </ButtonGroup></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </ThemeProvider>
  )
}

export default Home
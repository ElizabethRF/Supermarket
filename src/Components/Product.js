import React, {Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

class Product extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <StyledTableRow key={this.props.id}>
              <StyledTableCell component="th" scope="row">
                {this.props.id}
              </StyledTableCell>
              <StyledTableCell align="right">{this.props.descripcion}</StyledTableCell>
              <StyledTableCell align="right">{this.props.precio}</StyledTableCell>
              <StyledTableCell align="right">{this.props.tipo}</StyledTableCell>
              <StyledTableCell align="right">{this.props.cantidad}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="outlined" >
                    EDITAR
                </Button>
              </StyledTableCell>
            </StyledTableRow>
        ); 
    }
}


export default Product;
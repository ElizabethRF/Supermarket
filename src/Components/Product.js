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
      fontSize: 16,
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
        this.state = {
          id: 0
        }
        this.editMode = this.editMode.bind(this);
    }

    componentDidMount(){
      this.setState({id:this.props.id})
    }
    editMode(){
      this.props.funcionParaHijo(this.state);
    }

    render(){
        return(
            <StyledTableRow key={this.props.id}>
              <StyledTableCell component="th" scope="row">
                {this.props.id}
              </StyledTableCell>
              <StyledTableCell align="right">{this.props.descripcion}</StyledTableCell>
              <StyledTableCell align="right">${parseFloat(this.props.precio).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{this.props.tipo}</StyledTableCell>
              <StyledTableCell align="right">{this.props.cantidad}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="outlined" onClick={this.editMode}>
                    EDITAR
                </Button>
              </StyledTableCell>
            </StyledTableRow>
        ); 
    }
}


export default Product;
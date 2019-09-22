import React , {Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

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


class EditProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: 0,
            price:0,
            quantity:0
        }
        this.submitForm = this.submitForm.bind(this);
    }
    componentDidMount(){
        this.setState({id:this.props.id,price:this.props.precio,quantity:this.props.cantidad })
    }

    submitForm() {
        if(this.state.price !== 0){
          this.props.funcionParaHijo(this.state);
          
        }else{
          alert("El precio no puede ser 0");  
        }
          
    }

    handleChange = prop => event => {
        if([prop] == "price"){
          if(event.target.value < 0){
            event.target.value=event.target.value*-1;
            alert("El precio debe ser positivo");
          }

        }else if([prop] == "quantity"){
          if(event.target.value < 0){
            event.target.value=event.target.value*-1;
            alert("La cantidad debe ser positiva");
          }
          if((event.target.value)%1 != 0){
            event.target.value=Math.trunc(event.target.value);
            alert("La cantidad debe ser entera");
          }
          

        }

        this.setState({ [prop]:event.target.value });
        console.log(this.state.type);
      };
  
    render(){
        return(
        <StyledTableRow key={this.props.id}>
              <StyledTableCell component="th" scope="row">
                {this.props.id}
              </StyledTableCell>
              <StyledTableCell align="right">{this.props.descripcion}</StyledTableCell>
              <StyledTableCell align="right">
                  {/* Precio */}
                <TextField
                      id="filled-number"
                      className="priceInput"
                      variant="outlined"
                      type="number"
                      label="Precio"
                      value={this.state.price}
                      onChange={this.handleChange('price')}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                    />
                  
                  
                  </StyledTableCell>
              <StyledTableCell align="right">{this.props.tipo}</StyledTableCell>
              <StyledTableCell align="right">
                  {/*CANTIDAD */}
                  {/*Cantidad*/}
                  <TextField
                        id="filled-number"
                        label="Cantidad"
                        value={this.state.quantity}
                        onChange={this.handleChange('quantity')}
                        type="number"
                        className="quantityInput"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                    />
                  </StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained" color="primary" onClick={this.submitForm} >
                    GUARDAR
                </Button>
              </StyledTableCell>
        </StyledTableRow>
    
    );}
}

export default EditProduct; 
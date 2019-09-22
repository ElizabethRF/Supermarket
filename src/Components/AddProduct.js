import React , {Component} from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
}));

const ranges = [
    {
      value: 'hogar',
      label: 'Hogar',
    },
    {
      value: 'dulceria',
      label: 'Dulcería',
    },
    {
      value: 'lacteos',
      label: 'Lacteos',
    },
  ];

class AddProduct extends React.Component{
    
    constructor(props){
        
        super(props);
        this.state={
            description:"",
            price:0,
            type:"",
            quantity:0,
        }
    }



    submitForm() {
        
      }
    
      
    

    handleChange = prop => event => {
        this.setState({ [prop]:event.target.value });
        console.log(this.state.type);
      };
  
    render(){

        return(
        
        <div>


        <Paper >
        <Grid container spacing={2}>
          <Grid item xs={10} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs >
                {/*Descripción */}
                    <TextField
                        id="outlined-simple-start-adornment"
                        className="descriptionField"
                        variant="outlined"
                        label="Descripción"
                        InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                        margin="normal"
                        onChange={this.handleChange}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />

                    {/*Tipo */}
                    <TextField
                        select
                        className="tipoInput"
                        variant="outlined"
                        label="Tipo"
                        value={this.state.type}
                        onChange={this.handleChange('type')}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">Departamento</InputAdornment>,
                        }}
                        margin="normal"
                        >
                            {ranges.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>

                    {/*Precio*/}
                    <TextField
                        id="filled-number"
                        label="Precio"
                        value={this.state.quantity}
                        onChange={this.handleChange('quantity')}
                        type="number"
                        className="quantityInput"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />

                    {/*Cantidad*/}
                    <TextField
                        id="filled-number"
                        label="Cantidad"
                        value={this.state.price}
                        onChange={this.handleChange('price')}
                        type="number"
                        className="priceInput"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />

                    {/*Botón agregar*/}
                    <Button variant="contained" color="primary" className="AddProductButton" onClick={this.submitForm} style={{justifyContent: 'center'}}>
                        Agregar Producto
                    </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
 



           

            

            

            

            

            
        
        </div>

        


    
    );}
}

export default AddProduct; 
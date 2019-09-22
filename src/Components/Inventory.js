import React, {Component} from 'react';
import TableHeader from './TableHeader';
import Product from './Product';
import AddProduct from './AddProduct';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { products } from '../data/products.json';
import Button from '@material-ui/core/Button';
import EditProduct from './EditProduct';

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


class Inventory extends React.Component{
  constructor(){
    super();
    this.state = {
      productos:products
    }
  }


   newProductData = (params)=>{
     if(this.state.productos.length <100){
        this.setState({ listGrades: params,received : true});
        let actualProd = this.state.productos; 
        let newProd = {id:this.state.productos.length+1,
          descripcion: params.description,
          precio: params.price, 
          tipo: params.type, 
          cantidad: params.quantity,
          edit:false
        }
        
        actualProd.push(newProd);
    }
    else{
      alert("Cantidad de productos inventariados excedida (Máximo 100)");
    }
  }

  editProductData = (params)=>{
    let newProd = this.state.productos.map((x,index) => {
      if(x.id == params.id){
          x.precio = params.price; 
          x.cantidad = params.quantity; 
          x.edit = false; 
      }
      return x; 
    });
    this.setState({productos:newProd});
      
  }

  changeEditState = (params)=>{
    let newProd = this.state.productos.map((x,index) => {
      if(x.id == params.id){
          x.edit = true; 
          console.log("change edit mode");
      }
      return x; 
    });
    this.setState({productos:newProd});
  }


    render(){

      const rows = this.state.productos.map((x,index) => {
        if(!x.edit){
          return(
            
            <Product funcionParaHijo = {this.changeEditState} id={x.id} descripcion={x.descripcion} precio={x.precio} tipo={x.tipo} cantidad={x.cantidad}/>
            
          ); 
        }else{
          return(
          <EditProduct funcionParaHijo = {this.editProductData} id={x.id} descripcion={x.descripcion} precio={x.precio} tipo={x.tipo} cantidad={x.cantidad}/>
          
        ); 
          
        }
      }); 

     

        return(
            <div>
                <h1>Inventario</h1>
                <Paper >
                  <Table>
                  <TableHeader />
                    
                    <TableBody>
                      {rows}
                    </TableBody>
                  </Table>
                </Paper>
                <AddProduct funcionParaHijo = {this.newProductData}/>

            </div>
        ); 
    }
}


export default Inventory;
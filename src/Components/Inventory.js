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
      productoss:products
    }
    this.sendNewProduct = this.sendNewProduct.bind(this); 
  }

  sendNewProduct(){
   console.log("fml");
  }
    render(){

      const rows = this.state.productoss.map((x,index) => {
        return(
          <Product id={x.id} descripcion={x.descripcion} precio={x.precio} tipo={x.tipo} cantidad={x.cantidad}/>
        ); 
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

            </div>
        ); 
    }
}


export default Inventory;
import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import Product from '../interfaces/product.inteface';

interface ProductWithRow extends Product, RowDataPacket{}

const ProductsModel = {

};

export default ProductsModel;
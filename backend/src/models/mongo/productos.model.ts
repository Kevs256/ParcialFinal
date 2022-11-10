import {Schema, model} from 'mongoose';
import IProducto from '../../interfaces/producto.interface';

const schema = new Schema<IProducto>({
    nombre: {type: String},
    descripcion: {type: String},
    marca: {type: String},
    precio: {type: Number},
    descuento: {type: Number},
    uri: {type: String}
});

export default model('productos', schema);

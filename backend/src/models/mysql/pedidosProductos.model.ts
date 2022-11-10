import {DataTypes, Model, BuildOptions, Optional} from 'sequelize';
import uDb from '../../database/mysql.database.js';
import pedidosModel from './pedidos.model.js';
import IPedidoProductos from '../../interfaces/pedidosProductos.interface.js';

interface PPInstanceInstance extends Model<IPedidoProductos, Optional<IPedidoProductos, 'id'>>, IPedidoProductos {}
type PPModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): PPInstanceInstance;
};

const Pedidos_productos = uDb.define('pedidos_productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_pedido: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
}) as PPModelStatic;

Pedidos_productos.belongsTo(pedidosModel, {foreignKey: 'id'});

export default Pedidos_productos;

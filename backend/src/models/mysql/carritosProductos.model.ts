import {DataTypes, Model, BuildOptions, Optional} from 'sequelize';
import uDb from '../../database/mysql.database.js';
import carritosModel from './carritos.model.js';
import ICarritoProductos from '../../interfaces/carritoProductos.interface.js';

interface UserInstance extends Model<ICarritoProductos, Optional<ICarritoProductos, 'id'>>, ICarritoProductos {}
type CPModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserInstance;
};

const Carritos_productos =  uDb.define('carritos_productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_carrito: DataTypes.INTEGER,
    id_producto: DataTypes.STRING,
    cantidad: DataTypes.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
}) as CPModelStatic;


Carritos_productos.belongsTo(carritosModel, {foreignKey: 'id'});

export default Carritos_productos;


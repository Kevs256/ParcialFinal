import {DataTypes, Model, BuildOptions, Optional} from 'sequelize';
import uDb from '../../database/mysql.database.js';
import usersModel from './users.model.js';
import ICarrito from '../../interfaces/carrito.interface.js';

interface CarritoInstance extends Model<ICarrito,Optional<ICarrito, 'id'>>, ICarrito {}
type CarritoModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): CarritoInstance;
};

const Carritos = uDb.define('carritos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: DataTypes.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
}) as CarritoModelStatic;

Carritos.belongsTo(usersModel, {foreignKey: 'id'});

export default Carritos

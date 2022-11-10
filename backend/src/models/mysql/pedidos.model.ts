import {DataTypes, Model, BuildOptions, Optional} from 'sequelize';
import uDb from '../../database/mysql.database.js';
import usersModel from './users.model.js';
import IPedidos from '../../interfaces/pedidos.interface.js';

interface PedidosInstance extends Model<IPedidos, Optional<IPedidos, 'id'>>, IPedidos {}
type PedidosModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): PedidosInstance;
};

const Pedidos = uDb.define('pedidos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subtotal: DataTypes.INTEGER,
    precio_total: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
}) as PedidosModelStatic;

Pedidos.belongsTo(usersModel, {foreignKey: 'id'});

export default Pedidos

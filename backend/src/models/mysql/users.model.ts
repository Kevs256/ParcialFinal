import {Model, DataTypes, BuildOptions, Optional} from 'sequelize';
import uDb from '../../database/mysql.database.js';
import IUsuario from '../../interfaces/usuario.interface.js';

interface UserInstance extends Model<IUsuario,Optional<IUsuario, 'id'>>, IUsuario {}
type UserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserInstance;
};

export default uDb.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: DataTypes.STRING,
    correo: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    freezeTableName: true,
    timestamps: false
}) as UserModelStatic;

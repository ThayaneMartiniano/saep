const Sequelize = require('sequelize');
const database = require('../db')

const Usuario = database.define('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,         // Define idUsuario como chave primaria
        allowNull: false          // Define que idUsuario não pode ser nulo
    },
    nome: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    senha: {
        type: Sequelize.INTEGER
    }
}, {

    freezeTableName: true,         // Evita que o Sequelize mude o nome da tabela
    timestamps: false              // Desativa ceatedAt e updatedAt só aceita que tem que colocar!!!!

});

module.exports = Usuario;
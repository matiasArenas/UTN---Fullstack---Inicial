const pool = require('./../utils/bd');

const getAllUsers = async() => {
    const query = "SELECT * FROM ??";
    const params = [process.env.T_USUARIOS];
    return await pool.query(query, params);
}

const createUser = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_USUARIOS, obj]; console.log('Objeto de createuser',params)
    return await pool.query(query, params);
}

const verifyUser = async(uid) => {
    const query = "UPDATE ?? SET habilitado = 1 WHERE confirmacionCorreo = ?"
    const params = [process.env.T_USUARIOS, uid];
    return await pool.query(query, params);
}

const authUser = async(emailCliente, pass) => {
    const query = "SELECT idCliente, idRol FROM ?? WHERE mailCliente = ? AND pass = ? AND habilitado = 1 AND idRol = 1;";
    const params = [process.env.T_USUARIOS, emailCliente, pass]; console.log(params)
    return await pool.query(query, params);
}

const single = async(idCliente) => {
    const query = "SELECT * FROM ?? WHERE id = ?";
    const params = [process.env.T_USUARIOS, idCliente];
    return await pool.query(query, params);
}

const update = async(idCliente, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_USUARIOS, obj, idCliente];
    return await pool.query(query, params);
}

module.exports = {getAllUsers, single, update, createUser, verifyUser, authUser};
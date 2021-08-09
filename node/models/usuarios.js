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

module.exports = {getAllUsers, createUser, verifyUser};
const pool = require('./../utils/bd');

const getAllLivingRecibidores = async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 1";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const getAllProductos = async() => {
    const query = "SELECT * FROM ?? WHERE eliminado = 1";
    const params = [process.env.T_PRODUCTOS];
    return await pool.query(query, params);
}

const getSingleProducto = async(idProd) => {
    const query = "SELECT * FROM ?? WHERE idProd = ?";
    const params = [process.env.T_PRODUCTOS, idProd];
    const rows = await pool.query(query, params);
    return rows;
}

const getAllLivingMesas = async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 2";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const getAllLivingSillones = async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 6";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const getAllCocinaArrime = async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 9";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const getAllCocinaMesas = async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 7";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const getAllCocinaVitrinas = async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 8";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const getAllDormitorioRoperos = async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 13";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const getAllDormitorioMesas = async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 12";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const getAllDormitorioComodas = async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 11";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const getAllOficinaBibliotecas = async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 4";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const getAllOficinaEscritorio= async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 10";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const deleteProd = async(idProd) => { 
    try {
        const query = "UPDATE ?? SET eliminado = 0 WHERE idProd = ?";
        const params = [process.env.T_PRODUCTOS, idProd];
        return await pool.query(query, params);
    } catch(e) {
        console.log(e);
    }
    
}

const updateProd = async(obj,idProd) => { 
    try {
        const query = "UPDATE ?? SET ? WHERE idProd = ?";
        const params = [process.env.T_PRODUCTOS, obj, idProd];
        return await pool.query(query, params);
    } catch(e) {
        console.log(e);
    }
    
}

module.exports = {getAllProductos,getSingleProducto,updateProd,getAllLivingRecibidores, getAllLivingMesas, getAllLivingSillones, getAllCocinaArrime,getAllCocinaMesas, getAllCocinaVitrinas, getAllDormitorioRoperos,getAllDormitorioMesas,getAllDormitorioComodas,getAllOficinaBibliotecas,getAllOficinaEscritorio, deleteProd};
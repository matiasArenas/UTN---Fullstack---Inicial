const pool = require('./../utils/bd');

const getAllLivingRecibidores = async() => {
    const query = "SELECT p.idProd, p.nombreProd, p.descripcionProd, p.imgProd, p.precioLaqueado FROM ?? AS p JOIN ?? AS c ON p.idCategoria = c.idCategoria AND idSubcategoria = 1";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    return await pool.query(query, params);
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



// const getSingleProductos = async(id) => {
//     const query = "SELECT p.nombre, p.id, c.nombre AS nombreCategoria FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id WHERE p.id = ?"
//     const params = [T_PRODUCTOS, T_CATEGORIAS, id];
//     return await pool.query(query, params);
// }
// const crearProducto = async(obj) => {
//     const query = "INSERT INTO ?? SET ?";
//     const params = [T_PRODUCTOS, obj];
//     return await pool.query(query, params);
// }

// UPDATE ?? SET ? WHERE id = ?

module.exports = {getAllLivingRecibidores, getAllLivingMesas, getAllLivingSillones, getAllCocinaArrime,getAllCocinaMesas, getAllCocinaVitrinas, getAllDormitorioRoperos,getAllDormitorioMesas,getAllDormitorioComodas,getAllOficinaBibliotecas,getAllOficinaEscritorio};
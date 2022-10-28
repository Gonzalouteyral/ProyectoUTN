var pool = require('./bd');

/*sirve para la lista de novedades*/
async function getNovedades() {
    var query = 'select * from galeria order by id desc';
    var rows = await pool.query(query);
    return rows;
}

async function deleteNovedadesById(id) {
    var query = 'delete from galeria where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function insertNovedades(obj) {
    try{

    var query = 'insert into galeria set ?';
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


async function getNovedadesById(id) {
  var query = 'select * from galeria where id = ?';
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function modificarNovedadesById(obj, id) {
  try{
  var query = 'update galeria set ? where id=?';
  var rows = await pool.query(query, [obj, id]);
  return rows;
   } catch (error) {
  throw error;
    }
}



module.exports = { getNovedades, insertNovedades, deleteNovedadesById, getNovedadesById, modificarNovedadesById }
const listarblogservice = require('../service/blogservice');

let listarblog = async (req, res) => {
    try {
        let respuesta = await listarblogservice;
            res.json(respuesta); 
    } catch (e) {
        console.error("Error al obtener los blogs:", e);

    }
};

module.exports = {
    listarblog
};
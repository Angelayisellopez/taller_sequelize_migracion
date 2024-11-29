const { post }  = require('../models');

let listarblogservice = async () => {
    try {
        let resp = await post.findAll();
        return resp; 
    } catch (e) {
   
        console.error("Error al obtener los posts:", e);
    }
};

module.exports = {
    listarblogservice
};
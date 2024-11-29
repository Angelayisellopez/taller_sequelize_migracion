const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;  
const blogroutes = require('./routes/blogroutes')
app.use(express.json());

app.use('/api', blogroutes);



app.listen(port, () => {
            
    console.log(`El servidor está corriendo en el puerto ${port}`);
});
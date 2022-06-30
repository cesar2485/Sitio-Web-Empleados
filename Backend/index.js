const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const app = express(); 

require("./database");
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json()); 
app.use(cors({origin: 'http://localhost:4200'})); 
app.use('/api/empleados',require('./routes/empleado.routes'));
app.listen(app.get('port'), () => {
   console.log('server activo en el puerto', app.get('port'));
});
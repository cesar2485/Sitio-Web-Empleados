const Empleado = require('../models/empleado');
const empleadoCtrl = {};


empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);                        
}                                                
                                               
empleadoCtrl.createEmpleados = async (req, res) => { 
   const empleado = new Empleado(req.body);
   await empleado.save();                              
   res.json({
   'status': 'Empleado guardado'
   });
}

empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    const empleadoUnico = await Empleado.findById(req.params.id); 
    res.json(empleadoUnico);
}

empleadoCtrl.editarEmpleado = async (req, res) =>  {
    const { id } = req.params; 
    const emepleadoEdit = {  
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Empleado.findByIdAndUpdate(id, {$set: emepleadoEdit}, {new:  true}); 
}

empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status: 'Empleado Eliminado'});
}


module.exports = empleadoCtrl;
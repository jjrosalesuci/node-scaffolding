const router = require('express').Router();

//Handlers para los endpoints de la API de Tasks

router.get('/:id', (req, res, next) => {
    // TODO: Usar los modelos para obtener la información necesaria
    
    res.json({
        msg: `Tarea ${req.params.id}`,
    });
});

module.exports = router;
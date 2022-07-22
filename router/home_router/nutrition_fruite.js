const {nutrition_fruite} = require('../../controller/home_controller/nutrition_fruite')

//getAl

const getNutritionFruiteOpts = {
    schema: {
        response: {
            200: {
                type:'array',
                properties:{
                    id:{type :'string'},
                    name:{type :'string'},
                    
                }
            },
        }
    },
    handler: nutrition_fruite
}





function nutritionFruitsRoutes(fastify, options, done) {
    fastify.post('/home/nutrition_fruite', getNutritionFruiteOpts)
    done()
}
module.exports = nutritionFruitsRoutes
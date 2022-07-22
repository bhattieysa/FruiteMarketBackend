const {like_fruite} = require('../../controller/home_controller/like_fruite')

//getAl

const getLikeFruiteOpts = {
    schema: {
        response: {
            200: {
                type:'object',
                properties:{
                    error:{type :'string'},
                    message:{type :'string'},
                    
                }
            },
        }
    },
    handler: like_fruite
}





function likeFruitsRoutes(fastify, options, done) {
    fastify.post('/home/like_fruite', getLikeFruiteOpts)
    done()
}
module.exports = likeFruitsRoutes
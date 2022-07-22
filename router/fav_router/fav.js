const {Fav} = require('../../controller/fav_controller/fav')

//getAl

// const getUserOpts = {
//     schema: {
//         response: {
//             200: {
                
//                     type: 'object',
//                     name:'user',
//                     properties: {
//                         id: { type: 'string' },
//                         name: { type: 'string' },
//                         cnic: { type: 'string' },
//                         mobile_number: { type: 'string' },
//                         pass: { type: 'string' },
//                         image_url: { type: 'string' }
                        
//                     }
                
//             }
//         }
//     },
//     handler: Fav
// }





function favRoutes(fastify, options, done) {
    fastify.post('/fav/view', Fav)
    done()
}
module.exports = favRoutes
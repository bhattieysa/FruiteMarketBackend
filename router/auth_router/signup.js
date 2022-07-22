const {signup} = require('../../controller/auth_controller/signup')
const Multer = require("fastify-multer");
const imageUploader = require("../../image_uploader")
//getAl

const getSignupOpts = {
    schema: {
        response: {
            200: {
                type:'object',
                properties:{
                    error:{type :'string'},
                    message:{type :'string'}
                }
            },
        }
    },
    handler: signup 
}

function signupRoutes(fastify, options, done) {
    fastify.register(Multer.contentParser)
    fastify.post('/signup',  { preHandler: imageUploader.upload.single('file') }, signup)
    done()
}




module.exports = signupRoutes
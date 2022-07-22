const Multer = require("fastify-multer");
const imageUploader = require("../image_uploader")



function signupRoutes(fastify, options, done) {
    fastify.register(Multer.contentParser)
    fastify.post('/',  { preHandler: imageUploader.upload.single('image') },function(request, reply) {
      
       
        if(request.context.onError){
            reply.send({
                error: "true",
                

            })
        }else{
            reply.send({
                error: "false",
                

            })
        }
      
      })
    done()
}




module.exports = signupRoutes
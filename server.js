const fastify = require('fastify')()
// const fastify = require('fastify')({logger:true})
const multer = require('fastify-multer')
const { verify } = require('jsonwebtoken')
require("dotenv").config()
const path = require('path')
fastify.register(require('fastify-stripe'), {
    apiKey: 'sk_test_51L415IJiREfmU884qVpd0lkOp8anxRFCQXbAZ53LJdLLlO3PDZoiZKisWa0hFkblFzwnO1IoSUqvRIEnVtlW1heh00Fd6oXttN'
  })
  

//auth
fastify.register(require('./router/auth_router/signup'), { prefix: "/api/auth" })
fastify.register(require('./router/auth_router/login'), { prefix: "/api/auth" })
fastify.register(require('./router/image_upload_router'), { prefix: "/api/imageupload" })

fastify.register(require('./router/home_router/fruits'),{prefix:'/api'})
fastify.register(require('./router/cart_router/cart'),{prefix:'/api'})
fastify.register(require('./router/cart_router/categories'),{prefix:'/api'})
fastify.register(require('./router/cart_router/quantity'),{prefix:'/api'})

fastify.register(require('./router/stripe_router/stripe_payment'),{prefix:'/api'})


fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'uploads'), // optional: default '/'
  })
  fastify.get('/image', function (req, reply) {
      //get data from url
    const data = req.query;
    console.log(req.query)


    return reply.sendFile(data.image_url, path.join(__dirname, 'uploads')) // serving a file from a different root location
  })

//authorization of API using token
fastify.register(function (route, ops, done) {
    route.addHook("preHandler", (req, res, next) => {
        let { authorization } = req.headers;
        //console.log(authorization)
        if (authorization) {
            verify(authorization, process.env.JSON_TOKEN_CODE, (err, decoded) => {
                if (err) {
                    res.status(403).send('forbidden user')
                }
                else {
                    next()
                }

            })
        } else {
            res.status(401).send('Access denied! unauthorized user')
        }
    })
                 //all routes using the authorization token

    //User Routes

    fastify.register(require('./router/user_router/user'))
    fastify.register(require('./router/user_router/edit_user'))
    fastify.register(require('./router/home_router/fruite_categories.js'))
    fastify.register(require('./router/home_router/like_fruite'))
 
fastify.register(require('./router/home_router/nutrition_fruite'))

fastify.register(require('./router/home_router/add_to_cart'))
fastify.register(require('./router/fav_router/fav'))
   
    done()
},
    {
        prefix: "/api",
    }
)
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' }
    }
})
const start = async () => {
    try {
        // await fastify.listen(process.env.APP_PORT)
        await fastify.listen(5000, '192.168.10.11')
    } catch {
        fastify.log.error(error)
        process.exit(1)
    }
}
start()
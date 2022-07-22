const {stripePayment} = require('../../controller/stripe_controller/stripe_payment')







function stripeRoutes(fastify, options, done) {
 
   
   
    fastify.post('/stripe/payment', async (request, reply) => {
        try {
            // We create a new customer using Stripe API
            const email = 'customer@exemple.com'
            const customers = await stripe.customers.create({ email })
        
            reply.code(201)
            return {
              status: 'ok',
              message: `customer ${email} succesfully added`,
              customers
            }
          } catch (err) {
            reply.code(500)
            return err
          }
    
      })
      done()
      
}
module.exports = stripeRoutes
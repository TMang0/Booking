const routerClients = require('./clientRoutes.js');
const routerUsers = require('./userRoutes.js');
const routerBookings = require('./bookingRoutes');

function APIRoutes(app){
    app.use('/clients', routerClients);
    app.use('/users', routerUsers);
    app.use('/bookings', routerBookings);
}

module.exports = APIRoutes;
const express = require('express');
const dbB =require('../src/db/crudBooking');
const router = express.Router();

router.get('/', (req, res)=>{
    dbB.getBookings(function(arrayBookings){
        res.send(arrayBookings);
    })
});

router.get('/:id', (req, res)=>{
    const bid = req.params.id;
    dbB.getBooking(bid, function(booking){
        res.json(booking);
    })
})

router.post('/', (req, res)=>{
    const booking = req.body;
    dbB.addBooking(booking, function(response){
        res.send(response);
    })
})

router.patch('/:id', (req, res)=>{
    const bid = req.params.id;
    const booking = req.body;
    dbB.updateBookingPartial(bid, booking, function(response){
        res.send(response);
    })
})

router.delete('/:id', (req, res)=>{
    const bid = req.params.id;
    dbB.deleteBooking(bid, function(response){
        res.send(response);
    })
})





module.exports = router;
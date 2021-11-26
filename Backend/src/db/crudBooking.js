const db = require('./firebase.js');

function getBookings(callback){
    return db.collection('Booking').get()
        .then((refDoc) =>{
            var arrayBookings = [];
            refDoc.forEach((doc)=>{
            arrayBookings.push(doc.data());
           
        })
        callback(arrayBookings);
    })
        .catch(err => {
         callback('Error to get Bookings ${err}');
    })

}

function getBooking(bid, callback){
    return db.collection('Booking').doc(bid).get()
    .then((doc)=>{
        callback(doc.data())
    })
    .catch((err)=>{
        callback('Error to get Booking ${err}')
    })
}

function addBooking(booking, callback){
    return  db.collection('Booking'). add(booking)
    .then(()=>{
        callback('Booking Create');
    })
    .catch((err)=>{
        callback('Error to add Booking');
    })
}

function updateBookingPartial(bid, booking, callback){
    return db.collection('Booking'). doc(bid). update(booking)
    .then(()=>{
        callback("Success")
    })
    .catch((err)=>{
        callback('Error to Update Booking ${err}');
    })
}

function deleteBooking(bid, callback){
    return db.collection('Booking').doc(bid).delete()
    .then(()=>{
        callback("Success")
    })
    .catch((err)=>{
        callback('Error to Delete Booking ${err}');
    })
}

module.exports = {
    getBookings,
    getBooking,
    addBooking,
    updateBookingPartial,
    deleteBooking

}
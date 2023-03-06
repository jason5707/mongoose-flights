const flight = require('../models/flight');
const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};
// flight = Flight;
function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
    })
}

function show(req, res) {
    Flight.findById(req.perams.id)
    .populate('cast')
    .exec(function(err, flight) {

    })
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
  }
function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'});
}
function create(req, res) {
 Flight.create(res.body, function(err,flight) {
    

   
        
        res.redirect('/flights/new');
    });
    
  }

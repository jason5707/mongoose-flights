const flights = require('mongoose');
const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = flights.Schema;
 

const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['Jet Blue', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        defualt: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        defualt: 02-17-2024
    }
});


module.exports = mongoose.model('Flight', flightSchema); {
    getAll
};

function getAll() {
    return flightSchema;
}
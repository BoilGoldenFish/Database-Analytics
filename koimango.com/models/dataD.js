const mongoose = require('mongoose');
const schema = mongoose.Schema({
    startLoading: {type:String},
    endLoading: {type:String},
    totalLoading: {type:String},
    move: {type:String},
    click: {type:String},
    scroll: {type:String},
    keyup: {type:String},
    keydown: {type:String},
    inactiveStart: {type:String},
    inactivePeriod: {type:String},
    left: {type:String},
    enter: {type:String},
    page: {type:String}
});


const DataD = mongoose.model('dataD',schema);

module.exports = DataD;
const mongoose = require('mongoose');
const schema = mongoose.Schema({
    userAgent: {type: String},
    language: {type:String},
    allowCookies: {type: Boolean},
    allowJavascript: {type: Boolean},
    screenSize: {type:String},
    windowSize: {type:String},
    connection: {type:String},
    allowCSS: {type: Boolean},
    allowImg: {type: Boolean},
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


const Data = mongoose.model('data',schema);

module.exports = Data;
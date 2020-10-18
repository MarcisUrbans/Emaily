
if(process.env.NODE_ENV == 'production'){
    // ret prod keys

    module.exports = require('./prod');

} else {
    // ret dev keys
    module.exports = require('./dev');

}
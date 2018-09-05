(function() {
    
    module.exports = function(app) {
        app.use('/api', require('./routes.js'));
    }
    
})();
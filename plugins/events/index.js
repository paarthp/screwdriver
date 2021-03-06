'use strict';

const getRoute = require('./get');
const listBuildsRoute = require('./listBuilds');

/**
 * Event API Plugin
 * @method register
 * @param  {Hapi}     server            Hapi Server
 * @param  {Object}   options           Configuration
 * @param  {Function} next              Function to call when done
 */
exports.register = (server, options, next) => {
    server.route([
        getRoute(),
        listBuildsRoute()
    ]);

    next();
};

exports.register.attributes = {
    name: 'events'
};

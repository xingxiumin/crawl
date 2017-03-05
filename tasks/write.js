var Movie = require('../model').Movie;
var async = require('async');
var debug = require('debug')('crawl:write');
exports.movie= function (movies, callback) {
    async.forEach(movies, function (movie, cb) {
        debug(`保存电影:${movie.name}`);
        Movie.create(movie,cb);
    },callback);
};
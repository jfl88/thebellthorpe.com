/* 
 * Module dependencies
 */

var express = require('express')
var cluster = require('cluster')
var app = express()

if (cluster.isMaster) {
	var cpuCount = require('os').cpus().length;

	for (var i = 0; i < cpuCount - 1; i++) {
		cluster.fork();
	}
}
else {
    app.set('views', __dirname + '/views')
	app.set('view engine', 'jade')
	app.use(express.logger('dev'))

	app.use(express.static(__dirname + '/public'))

	app.get('/', function (req, res) {
		res.render('index',
			{ title : 'Home'}
		)
	})

	app.get('/beer', function (req, res) {
		res.render('beer',
			{ title : 'Beer'}
		)
	})

	app.get('/pong', function (req, res) {
		res.render('pong',
			{ title : 'Ping Pong'}
		)
	})

	app.listen(8080)
}
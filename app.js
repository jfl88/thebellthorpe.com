/* 
 * Module dependencies
 */

var express = require('express'),
	nib = require('nib')

var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
	res.render('index',
		{ title : 'Home'}
	)
})

app.listen(3000)
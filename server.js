
var express = require('express');
var app = express();

var user = process.env.USER;
var pass = process.env.PASS;

app.set('port', process.env.PORT || 3000);

if (user && pass) {
  app.use(express.basicAuth(user, pass));
}
app.use (function (req, res, next) {
  if (req.secure) {
    res.redirect('http://' + req.headers.host + req.url);
  } else {
    next();
  }
});

app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Server listening on port %s', app.get('port'));
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone={
    title:'article one/anandhu',
    heading:'article one',
    date:'sept 5 2017',
    content: '<p1>Dulquer Salmaan (born 28 July 1986), also referred popularly as DQ, is an Indian film actor who appears predominantly in Malayalam films.The son of film actor Mammootty, Salmaan graduated with a bachelors degree in Business Management from Purdue University, and worked as a business manager before pursuing a career in acting </p1><p2>Salmaan married architect Amal Sufiya in 2011 with whom he has one daughter. Cited in the media as one of the most attractive Indian celebrities, Salmaan has also been recognised for his fashion style.[3][4] He owns several entrepreneurship ventures and promotes various social causes</p2>'
    
};
function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemplate=' <!DOCTYPE html><head> ${title}</title><link href="/ui/style.css" rel="stylesheet" /><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><div class="container"><div><a href="/">Home</a></div><br/><h1> ${heading}</h1><div>${date}</div><div>${content} </div></div></body></html>';
return htmltemplate
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/article-one', function (req, res) {
  res.send(createtemplate(articleone));
});
app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

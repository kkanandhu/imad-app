var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{ 
    title:'article one/anandhu',
    heading:'article one',
    date:'sept 5 2017',
    content: `<p1>Dulquer Salmaan (born 28 July 1986),
    also referred popularly as DQ, is an Indian film actor who appears predominantly in Malayalam films.The son of film actor Mammootty, Salmaan graduated with a bachelors degree in Business Management from Purdue University, and worked as a business manager before pursuing a career in acting </p1><p2>Salmaan married architect Amal Sufiya in 2011 with whom he has one daughter. Cited in the media as one of the most attractive Indian celebrities, Salmaan has also been recognised for his fashion style.[3][4] He owns several entrepreneurship ventures and promotes various social causes</p2>`},
 'article-two':{
     title:'article two/anandhu',
    heading:'article two',
    date:'sept 5 2017',
    content: ` <p1>
                    Saravanan Sivakumar
                        
                        Saravanan Sivakumar, known by his stage name Suriya, is an Indian film actor, producer and television presenter, best known for his work in Tamil cinema.[3] After making his debut in Nerukku Ner (1997), Suriya landed his breakthrough role in Nandha (2001) and then had his first major commercial success with the thriller Kaakha Kaakha (2003). Following award-winning performances of a conman in Pithamagan (2003) and a hunchback in Perazhagan (2004), Suriya played a patient suffering from anterograde amnesia in the 2005 blockbuster Ghajini. He rose to stardom with dual roles of a father and son in Gautham Menon's semi-autobiographical Vaaranam Aayiram (2008). His status as an action star was established with roles of a smuggler in Ayan (2009), and an aggressive cop in the Singam trilogy (Singam, Singam II and S3). Suriya has also found success with science fiction films like 7aum Arivu (2011), Maattrraan (2014), and 24 (2016). As of 2017,[4] he has won three Tamil Nadu State Film Awards and four Filmfare Awards South            </p1>
                    <p2>
                        Suriya is the eldest son of Tamil film actor Sivakumar and his younger brother Karthi is also an actor. Suriya married co-star Jyothika in 2006, after having been together for several years. In 2008, he began Agaram Foundation, which funds for various philanthropic activities. The year 2012 marked his debut as a television presenter with the Star Vijay game show Neengalum Vellalam Oru Kodi, the Tamil version of Who Wants to Be a Millionaire?. In 2013, Suriya founded the production house 2D Entertainment.
                    </p2>`
},
 'article-three':{
     title:'article three/anandhu',
    heading:'article three',
    date:'sept 5 2017',
    content: ` <p1>
                        Ajith Kumar (born 1 May 1971)
                        
                        is an Indian film actor best known by his mononym Ajith or by the names his fans gave him such as Thala and Ultimate Star. He has starred in over 50 films, predominately in Tamil cinema. In addition to his acting, Ajith Kumar in a sabbatical, participated in the 2004 British Formula 3 season as a Formula Two racing driver and was ranked the third best motor car driver in India at his peak.            </p1>
                    <p2>
                       He began his career with a small role in the 1990 Tamil film En Veedu En Kanavar. His first lead role was with the films Amaravathi (1993), and Prema Pusthakam (1993), and his first critical acclaimed appearance was in the thriller Aasai (1995).[5] He subsequently established himself as a romantic hero with Kadhal Kottai (1996), Aval Varuvala (1998) and Kadhal Mannan (1998). Successful films like Vaali (1999), Mugavaree (2000), Kandukondain Kandukondain (2000) and Citizen (2001)[6] followed. He established himself as an action hero with films like Amarkalam (1999), Dheena (2001), Villain (2002), Attahasam (2004), Varalaru (2006), Mankatha (2011), Arrambam (2013), Veeram (2014), Yennai Arindhaal (2015) and Vedalam (2015). In 2014, Ajith was listed in Forbes India's Top 100 Celebrities.[7]            </p2>`  
}   
    
};
function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemplate=`

    <!DOCTYPE html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
    </head>
    <body>
            <div class="container">
        
                <div>
                    <a href="/">Home</a>
                </div>
                <br/>
                
                 <h1>
                    ${heading}   
                </h1>
                
                 <div>
                    ${date}
                </div>
                
                <div>
                    ${content}
                </div>
            </div>
    </body>
   

</html>`;
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
app.get('/:articlename', function (req, res) {
    //aticlename== articleone
    var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});
app.get('/articlename', function (req, res) {
 var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});
app.get('/articlename', function (req, res) {
 var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

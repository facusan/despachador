// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var RuleEngine = require('node-rules');
    var rules = require('./rules.js');
    // configuration =================

    
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());


//fact - pedido 	
var pedido = {
    "sintoma":"grave", //leve-media-grave
    "prestacionTipo":"rojo", //rojo-amarillo
    "prestacionPrioridad":"alta", //baja-media-alta
    "edadPaciente":"pediatrico", //adulto-pediatrico
    "necesidadAdicionales": true, // true-false
    "preferencial": true  // true-false
};

var ambulancias = [
     {
        "nombre": "UTI01",
        "distancia": 0.52,  //km
        "tiempoLibre": 30, //min
        "carga": true,
        "especialidad": "adulto", //adulto-adultopediatrico-pediatrico
        "equipoAdicional" : true,
        "cantidadAsignaciones": 3,
        "libre": true,
        "ranking": 0
    }
    ,
    { 
        "nombre": "UTI02",
        "distancia": 1.52,  //km
        "tiempoLibre": 30, //min
        "carga": true,
        "especialidad": "adulto-pediatrico", //adulto-adultopediatrico-pediatrico
        "equipoAdicional" : true,
        "cantidadAsignaciones": 3,
        "libre": true,
        "ranking": 0
    }
      ,
    { 
        "nombre": "UTI03",
        "distancia": 0.54,  //km
        "tiempoLibre": 30, //min
        "carga": true,
        "especialidad": "adulto-pediatrico", //adulto-adultopediatrico-pediatrico
        "equipoAdicional" : true,
        "cantidadAsignaciones": 3,
        "libre": true,
        "ranking": 0
    } ,
    { 
        "nombre": "UTI04",
        "distancia": 5.54,  //km
        "tiempoLibre": 30, //min
        "carga": true,
        "especialidad": "pediatrico", //adulto-adultopediatrico-pediatrico
        "equipoAdicional" : true,
        "cantidadAsignaciones": 3,
        "libre": true,
        "ranking": 0
    }
];
// order

function mycomparator(a,b) {
  return parseInt(a.ranking) - parseInt(b.ranking);
}

// routes ======================================================================
   
    // api ---------------------------------------------------------------------
    // get all ambulancias
    app.get('/api/ambulancias', function(req, res) {
        res.json(ambulancias);
    });
    // get all rules
    app.post('/api/rules', function(req, res) {
        var pedido = req.body;
        var fact = { pedido, ambulancias};
        //initialize the rule engine
        var R = new RuleEngine(rules);
        //R.register(rules);
        var aux = 0;
        //Now pass the pedido on to the rule engine for results
            for (var i = 0; i < fact.ambulancias.length; i++) {
            var input = {"pedido": fact.pedido ,"ambulancia" : fact.ambulancias[i]};
            
            R.execute(input,function(result){ 
                fact.ambulancias[aux].ranking =  result.ambulancia.ranking;
                aux++;
                if(aux == fact.ambulancias.length){
                    console.log(fact.ambulancias.sort(mycomparator));
                    res.json(fact.ambulancias.sort(mycomparator)[fact.ambulancias.length -1]);
                }
            });
        }
        
    });

   // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("Despachador on port 8080");
    ////
    
var express = require( "express" );
var app = express();
var fs = require( "fs" );
var bodyParser = require( "body-parser" );

app.use( express.static( __dirname ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.get( "/api/list", function( req, res ) {
	res.header( "Content-Type", "application/json" );
	fs.readFile( "data.json", "utf8", function read( err, data ) {
		setTimeout( function( ) { res.send( { shoppingList: JSON.parse( data ) } ); }, 1000 );
	} );

} );

app.post( "/api/save", function( req, res ) {
	fs.writeFile( "data.json", JSON.stringify( req.body.shoppingList ), "utf8", function() {
		setTimeout( function( ) { res.send( { success: true } ); }, 1000 );
	} );
} );

app.get( "*", function( req, res ) {
  res.sendFile( __dirname + "/index.html" );
} );

var server = app.listen( 1337 );

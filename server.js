import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import ShoppingListContainer from "./scripts/containers/shoppingListContainer";
import Footer from "./scripts/containers/footer";
import { configureStore } from "./scripts/store";
import { fetchList } from "./scripts/actions/listActions";

const app = express( );
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
	const store = configureStore( );

	store.dispatch( fetchList( ) )
		 .then( ( ) => {
			 const initialView = renderToString(
			 	<Provider store={ store }>
			 		<div>
			 			<ShoppingListContainer />
			 			<Footer />
			 		</div>
			 	</Provider>
			 );

			 const storeState = store.getState();
			 res.status( 200 ).end( renderFullPage( initialView, storeState ) );

		 } );

} );

const renderFullPage = ( html, initialState ) => {
  return `
	<!doctype html>
	<html data-framework="react">
		<head>
			<meta charset="utf-8">
			<title>Shopping List</title>
			<link href="base.css" rel="stylesheet">
		</head>
		<body>
			<div class="content">
				<h1>Shopping List</h1>
				<div id="root">${ html }</div>
			</div>

			<script>
	          window.__INITIAL_STATE__ = ${JSON.stringify( initialState )};
	        </script>
			<script src="bundle.js"></script>
		</body>
	</html>
  `;
};

const server = app.listen( 1337 );

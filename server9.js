const express = require('express');
const server = express();
const ejs = require('ejs');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'node',
    password: 'websystem',
    database: 'web'
});

server.get('/', function( req, res ) {
    res.send('What happened to Dimitri');
});

server.get('/players', function( req, res ){
    let query = 'select * from player;';
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'index.ejs', {title: 'Express' });
    });
});

server.get('/teams', function( req, res ){
    let query = 'select * from team;';
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'index.ejs', {title: 'Express' });
    });
});

server.get('/battings',function(req,res){
    let query = 'select * from batting;';
    console.log(query);
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'index.ejs', {title: 'Express' });
    });
});

server.listen( 80, function() {
    console.log( 'listening on port 80' );
});

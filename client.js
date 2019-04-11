// Modules.
const express = require( 'express' );
const http = require( 'http' );
const fs = require( 'fs' );
const path = require( 'path' );
const dotenv = require( 'dotenv' );

// Configuration.
dotenv.config();
const port = process.env.DEV ? 3002 : ( process.env.PORT || 8082 );

// Ensure the required port configuration file is present.
if ( !fs.existsSync( 'public/port.txt' ) )
{
    console.error( 'Required configuration file public/port.txt could not be found!' );
    process.exit( 255 );
}

// Set up the server.
const app = express();
const server = http.Server( app );

// Define paths for serving up content.
const publicPath = express.static( path.join( __dirname, 'public' ), { redirect : false } );
const indexPath  = path.join( __dirname, 'public/index.html' );
app.use( publicPath );

// Index route for showing the HTML page.
app.get( '/', ( req, res ) => {
   res.sendFile( indexPath );
});

// Other routes.
app.get( '*', ( req, res ) => {
    res.sendFile( indexPath );
} );

// Start the server on the configured port.
app.listen( port, () => {
    console.log( 'Server started on port ' + port + '.' );
} );


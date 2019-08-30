const express = require('express');

const bwipjs = require('bwip-js');

// Constants
const PORT = 3000;

const app = express();

app.get('/', function (req, res, next) {
    console.log('interleaved2of5');

    bwipjs.toBuffer({
        bcid: 'interleaved2of5',       // Barcode type
        text: '74891149880587480100301100850047175330000000000',    // Text to encode
        scale: 2,               // 3x scaling factor
        height: 10,              // Bar height, in millimeters
        includetext: false,            // Show human-readable text
        textxalign: 'center',        // Always good to set this
    }, function (err, png) {
        if (err) {
            // Decide how to handle the error
            // `err` may be a string or Error object
            console.log('err', err);
        } else {
            console.log('png', png);
            res.status(200);
            res.contentType('application/imagem');  
            res.set({
               'Content-Disposition': 'attachment; filename="barcode.png"',                
            });       
           
            //res.send(Buffer.from(png, 'binary'));   
            res.send(png);   
          
        }
    });

});

app.listen(PORT, function () {
    console.log('Running');
});
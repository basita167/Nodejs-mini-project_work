//logging file for remote logging of different clients to the site

function log(message){

    console.log(message);
}
log();

module.exports.basitlog=log;  //basitlog is the custom name I have given to exported function log 
module.exports.fair=log;

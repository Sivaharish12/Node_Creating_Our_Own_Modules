var http=require('http');
var date=require('./myfirstmodule')

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(date.myDateTime()+'<br>');
    res.write(date.returnName());
    res.end();
}).listen(8080);
var http  = require("http"), 
    path = require("path"), 
    fs = require("fs"), 
    extensions = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "application/javascript",
      ".png": "image/png",
      ".gif": "image/gif",
      ".jpg": "image/jpeg"
    };

http.createServer(function(req, res) {
    
    var path_Html_Public = path.join("..","public_html");
    
    var filename = path.basename(req.url) || "index.html",
    dir = path.dirname(req.url).substring(1),
    ext = path.extname(filename),
    // __dirname is a built-in variable containing the path where the code is running
    localPath = path.join(__dirname , path_Html_Public);
    
  
    if (extensions[ext]) {
        localPath = path.join(localPath, dir);
        localPath = path.join(localPath, filename);
		console.log("localPath:" , localPath);
        path.exists(localPath, function(exists) {
        if (exists) {
          getFile(localPath, extensions[ext], res);
        } else {
          console.log("Not found");
          res.writeHead(404);
          res.end();
        } });
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(8080);

function getFile(localPath, mimeType, res) {
  // read the file in and return it, or return a 500 if it can't be read
  fs.readFile(localPath, function(err, contents) {
    if (!err) {
      res.writeHead(200, {
        "Content-Type": mimeType,
        "Content-Length": contents.length
      });
      res.end(contents);
    } else {
      res.writeHead(500);
      res.end();
    }
  });

}
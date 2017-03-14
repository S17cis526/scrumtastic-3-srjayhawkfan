"use strict";

module.export = {
  index: list,
  create: create,
  read: read,
  update: update,
  destroy: destroy
}

/*
**@function list
*
*/
function list(req, res, db){
  db.all("SELECT * FROM projects", [], function(err, projects){
    if(err){
      console.error(err);
      res.statusCode = 500;
      res.end("Server Error");

    }
    res.setHeader("Content-Type", "text/json");
    res.end(JSON.stringify(projects));


  });

}

function create(req, res, db){
  var body = "";
  req.on("error", function(data){
    console.error(err);
    res.statusCode = 500;
    res.end("Server Error");
  });


  req.on("data", function(data){
    body += data;
  });

  req.on("end", function(){
    var project = JSON.parse(body);
    db.run("INSERT INTO projects (name, description, version, repository, license) VALUES (?, ?, ?, ?, ?)", [project.name, project.description, project.version, project.repository, project.license], function(err){
      if(err){
        console.error(err);
        res.statusCode = 500;
        res.end("Server Error");
        return;
      }
      res.statusCode = 200;
      res.end();
    });
  });

}

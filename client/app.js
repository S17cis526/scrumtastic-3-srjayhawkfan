var project = require('./project');

$.get('/projects', function(data){
  $('body').html(project.list(data));
});

//node_modules/.bin/browserify client/app.js -o public/scrumtastic.js

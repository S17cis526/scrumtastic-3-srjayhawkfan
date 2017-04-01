module.exports = {
  list: list
};
/*
*
*
*/
function list(projects){
  var table = $('<table>').addClass('table');
    var head = $('<tr>').append('<th>Name</th>').appendTo(table);
  projects.forEach(function(project){

    var row = $('<tr>').append(
      $('<td>').text(project.name)
    ).appendTo(table);

  });
  var button = $('<button>').addClass('btn btn-primary')
    .text('Save')
    .on('click', function(){
      $('#module')





    });
  return $('<div>').append(table).append(button);


}

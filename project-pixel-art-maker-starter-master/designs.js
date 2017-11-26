// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(function(){
var M=1, N=1,color='#000000';
var maxNum=75;

$('#input_height').on('change',function(){
    M = $('#input_height').val();
    if(M>maxNum){
      alert('Grid Height is too big!Change it.');
    }
  });
  $('#input_width').on('change',function(){
    N = $('#input_width').val();
    if(N>maxNum){
      alert('Grid Width is too big!Change it.')
    }
  });

$('#colorPicker').on('change',function(){//MERGE!
 color=$('#colorPicker').val();
});


$('#submit').click(function makeGrid(e) {
    $('table').children().remove();
  var table=$('table');
for(var i=0;i<M;i++){
table.append('<tr></tr>');
}

for(var j=0;j<N;j++){
    $('tr').append('<td></td>');

}

e.preventDefault();

});

$('#clear').on('click',function(e){
   $('table').children().remove();
   e.preventDefault();
});



$("table").on("click","td",function(){
  $(this).css("background-color",color);
});

var colors = ["#ea5048", "#ef8234", "#efd633", "#62e02c", "#88f7f5", "#6d4ff7", "#f74ff4"];

  var i = 1;

  window.setInterval(function(){
    document.body.style.backgroundColor = colors[i];
    i++;
    if (i === colors.length){
      i=0;
    }
  }, 5000);


});

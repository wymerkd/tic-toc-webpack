import './styles.css';
import { pingPong } from './tic-toc';

$(document).ready(function() {
  $('#tic-toc-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

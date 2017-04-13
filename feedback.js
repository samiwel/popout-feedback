
var handleClick = function() {
  var feedback = window.event.target.parentNode;
  console.log(feedback)
  feedback.classList.toggle('feedback--collapsed');
}

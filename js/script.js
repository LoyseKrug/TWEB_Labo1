$(".followButton").on("click", function() {

  var label = $(".nbFollowers");
  let followers = parseInt(label.html());
  followers++;
  label.html(followers);

});


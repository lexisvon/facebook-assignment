window.addEventListener('load', function() {
	// change the text of that link from 'like' to 'Unlike'

	var like = document.getElementsByClassName("action action--like")[0];

  	like.addEventListener("click", function() {
      
      var postCounter = document.getElementsByClassName("post__info");
      var currentLikes = parseFloat(postCounter[0].childNodes[1].innerHTML.replace("Likes", ""));

      if (like.text == "Like"){
        currentLikes += 1;
        like.text = "Unlike"
      } else {
        currentLikes -= 1;
        like.text = "Like"
      }

      postCounter[0].childNodes[1].innerHTML = currentLikes + " likes";
    }); 
  	// update the number of likes that the post/comment has

	// alter the behavior of the link so it behaves as an Unlike link next time it's clicked
	
});	  	


		
		
	

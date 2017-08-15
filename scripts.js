window.addEventListener('load', function() {
	// change the text of that link from 'like' to 'Unlike'
var like = document.getElementsByClassName("action action--like")[0];
	
	like.addEventListener("click", function() {
		
		if(like.innerHTML === "Like"){
			like.innerHTML = "Unlike";
		}
		else {
			like.innerHTML = "Like";
		}
		
	});
});	
// update the number of likes that the post/comment has

// alter the behavior of the link so it behaves as an Unlike link next time it's clicked

		
		
	

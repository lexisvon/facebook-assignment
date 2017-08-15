window.addEventListener('load', function() {
	// change the text of that link from 'like' to 'Unlike'
	document.getElementById("like").addEventListener("click", function(e) {
    
    var like = document.getElementById("like");
    var likeVisible = like.className.indexOf("hidden") == -1;
    
    if (likeVisible) {
        this.innerHTML = "Unlike";
        like.className = "hidden";
    } else {
        this.innerHTML = "Like";
        like.className = "";
    }

}, false);
	
// update the number of likes that the post/comment has


// alter the behavior of the link so it behaves as an Unlike link next time it's clicked
});
		
		
	
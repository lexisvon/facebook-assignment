window.addEventListener('load', function() {
	// Like Button
	var like = document.getElementsByClassName("action action--like")[0];
	like.addEventListener("click", function() {
		var postCounter = document.getElementsByClassName("post__info");
		var currentLikes = parseFloat(postCounter[0].childNodes[1].innerHTML.replace("Likes", ""));
		if (like.text == "Like") {
			currentLikes += 1;
			like.text = "Unlike"
		} else {
			currentLikes -= 1;
			like.text = "Like"
		}
		postCounter[0].childNodes[1].innerHTML = currentLikes + " likes";
	});


	// Add a new Comment to main post
	var comment = document.getElementsByClassName("action action--comment")[0];
	comment.addEventListener("click", function() {
		var commentForm = document.getElementsByTagName("textarea");
		commentForm[5].focus();
	});

	// Modal Variables 
	var modal = document.getElementsByClassName('modal')[0];
    var userName = document.getElementsByClassName("media__info")[0];
    var postText = document.getElementsByClassName("post__body")[0];
	// Share Button modal popup
	
	var share = document.getElementsByClassName('action action--share')[0];
	share.addEventListener('click', function() {
		
		modal.childNodes[1].childNodes[3].innerHTML = userName.childNodes[1].text;
		modal.style.display = "block";
		
		modal.childNodes[1].childNodes[5].innerHTML = postText.childNodes[1].innerHTML;
	});


	// Share Button modal close
	var modalXClose = document.getElementsByClassName('modal__close')[0];
	modalXClose.addEventListener('click', function() {
		if (event.target == modalXClose) {
			modal.style.display = "none";
		}
	});

	// Share Button Modal Click outside to close 
	modal.addEventListener('click', function() {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	});

	// pop up modal for clicking on name
	// var name = document.querySelectorAll('div media__info a'){
	// 	for (var i = 0; i < name.length; i++) {
	// 	name[i].addEventListener('click', function(){
	// 		if (event.target.text == "Name 1"){
	// 			modal.style.display = "block";
	// 		}else{
	// 			modal.style.display = "none";
	// 		}
	// 	});
	// }
	
	

	// Comment's Like
	var commentLike = document.getElementsByClassName("comment__info");
	for (var i = 0; i < commentLike.length; i++) {
		commentLike[i].childNodes[1].addEventListener("click", function() {
			currentLikes = parseInt(event.target.parentNode.childNodes[5].innerHTML.replace("likes", ""));
			if (event.target.parentNode.childNodes[1].text == "Like") {
				currentLikes += 1;
				event.target.parentNode.childNodes[1].text = "Unlike"
			} else {
				currentLikes -= 1;
				event.target.parentNode.childNodes[1].text = "Like"
			}
			event.target.parentNode.childNodes[5].innerHTML = currentLikes + " likes";
		});
	}


	//Show the comment replies
	var showReplies = document.getElementsByClassName("comment__info");
	for (var i = 0; i < showReplies.length; i++) {
		showReplies[i].childNodes[3].addEventListener("click", function() {
			replies = event.target.parentNode.parentNode.childNodes[5];
			if (replies.style.display == "none") {
				replies.style.display = "block"
			} else {
				replies.style.display = "none"
			}
		});
	}
	// Submitting a comment form Alert!

	// clicking reply puts cursor in textarea
});
window.addEventListener('load', function() {
	// change the text of that link from 'like' to 'Unlike'


	addEventListener('click', function(){
		var show = document.getElementsByClassName('action--like');
		var hide = document.getElementsByClassName('action--unlike');
		
for (var i = 0; i < show.length; i++) {
      if (show[i].style.display === "none") {
        show[i].style.display = "inline-block";
      }
      else {
        show[i].style.display = "none";
      }
    }

		// show.onclick = function() {
  //       	show.setAttribute('class', 'hide');
  //       	hide.setAttribute('class', 'show');
  //   	};
  //   	hide.onclick = function() {
  //       	hide.setAttribute('class', 'hide');
  //       	show.setAttribute('class', 'show');
  //   	};
	});
// update the number of likes that the post/comment has
// alter the behavior of the link so it behaves as an Unlike link next time it's clicked
});
		
		
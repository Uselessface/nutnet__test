document.addEventListener('DOMContentLoaded', function(){
	
	//popup with video
	const button = document.querySelector(".watch__container");
	const popup = document.querySelector(".popup");

	button.onclick = function () {
		popup.style.display = "block";
	}

	window.onclick = function (e) {
		if(e.target == popup){
			popup.style.display = "none";
		}
	}

	const tabButtons = document.querySelectorAll('.person-list__person');

	tabButtons.forEach(function(button) {
		button.onclick = function() {
			let id = this.getAttribute('data-tab'),
				content = document.querySelector('.testimonials__text[data-tab="'+id+'"]'),
				activeButton = document.querySelector('.person-list__person.active'),
				activeContent = document.querySelector('.testimonials__text.active-text');
			
			activeButton.classList.remove('active');
			button.classList.add('active');
			
			activeContent.classList.remove('active-text');
			content.classList.add('active-text');
		};
	});
})

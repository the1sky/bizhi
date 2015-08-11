/**
 * Created by nant on 8/10/2015.
 */
$(document).ready(function() {
	$("#owl-carousel").owlCarousel({
		autoHeight:true,
		singleItem:true,
		autoPlay:true
	});

	$(".news-box").bootstrapNews({
		newsPerPage: 4,
		autoplay: true,
		pauseOnHover: true,
		navigation: false,
		direction: 'down',
		newsTickerInterval: 2500,
		onToDo: function () {
			//console.log(this);
		}
	});
});

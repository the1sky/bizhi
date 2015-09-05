/**
 * Created by nant on 8/10/2015.
 */
$(document).ready(function() {
	$("#owl-carousel").owlCarousel({
		autoHeight:true,
		singleItem:true,
		autoPlay:true
	});

	$("#owl-presentation").owlCarousel({
		items:2,
		pagination:false,
		lazyLoad:true,
		autoPlay:true
	});

	$(".news-box.autorun").bootstrapNews({
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

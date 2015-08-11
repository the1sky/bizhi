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
		singleItem:false,
		autoPlay:true,
		autoWidth:true,
		items:3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		navigation : false
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

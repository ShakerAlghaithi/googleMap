// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


  
      
   

 $(document).ready(function(){


		var loc = new google.maps.LatLng(28.333, -21.572);
		var newMarker = new google.maps.Marker({
		  position: loc,
		  map: map
		});
 	 google.maps.event.addListener(map, 'click', function(event) {
 	 	var lat =event.latlng.lat();
 	 	var lng =event.latlng.lng();
   // 		$('#map-canvas').on('click',function(event){
			// event.preventDefault();
			// var map = $(this);
			// var pin_lng = $('#longitude').val();
			// var pin_lat = $('#latitude').val();
	
			$.ajax({
				url: map.attr('action'),
				method: map.attr('method'),
				data: {
					"pin": {
						"longitude": lat,
						"latitude": lng
					}
				},
				dataType: "json",
				success: function(data) {
					console.log(data);

				},
				error: function(){
					alert("Map is sucks !!");
				}

			});

      });  

});
		
       google.maps.event.addDomListener(window, 'load', initialize);


}
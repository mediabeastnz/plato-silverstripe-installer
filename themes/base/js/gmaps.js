function initialize_map(){}$(document).ready(function(){var e=document.getElementById("map"),a=new google.maps.Map(e,{zoom:8,center:new google.maps.LatLng(-34.397,150.644)});$([data-google-maps]).each(function(){var e=$(this).data("google-maps"),o=new google.maps.LatLngBounds;for(p=0;p<e.length;p++)o.extend(new google.maps.LatLng(e[p][1],e[p][2]));var n=[{stylers:[{saturation:0},{gamma:0}]},{elementType:"labels",stylers:[{visibility:"on"}]}],t={scrollwheel:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,MY_MAPTYPE_ID]},mapTypeId:MY_MAPTYPE_ID};1==e.length&&(t.zoom=14,t.center=new google.maps.LatLng(e[0][1],e[0][2])),a=new google.maps.Map($(this),t);var g={name:"Custom"},l=new google.maps.StyledMapType(n,g);e.length>1&&a.fitBounds(o),a.mapTypes.set(MY_MAPTYPE_ID,l);for(var p=0;p<e.length;p++){var s=e[p];new google.maps.Marker({position:{lat:s[1],lng:s[2]},map:a,icon:s[4],title:s[0],zIndex:s[3]})}})});var map,MY_MAPTYPE_ID="custom_style";
function distance(a, b) {
	var lat1 = a.lat,
	    lon1 = a.lng,
	    lat2 = b.lat,
	    lon2 = b.lng;
	var rad = Math.PI/180;
	var dLat = (lat2-lat1)*rad;
	var dLon = (lon2-lon1)*rad;
	var lat1 = lat1*rad;
	var lat2 = lat2*rad;
	var x = Math.sin(dLat/2);
	var y = Math.sin(dLon/2);
	var a = x*x + y*y * Math.cos(lat1) * Math.cos(lat2); 
	return Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}



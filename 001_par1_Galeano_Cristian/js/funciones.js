
function esfera(radio){
    var geoEsfera = new THREE.Geometry();
    var resXY = 50.0;
    var resZ = 50.0;
    for( var i = 0; i < resZ; i++){
        for( var j = 0; j < resXY; j++){
            var punto = new THREE.Vector3();
            punto.x = radio * Math.cos( ( j * 2 * Math.PI )/resXY) * Math.sin( ( i * Math.PI )/ resZ) ;
            punto.y = radio * Math.sin( ( j * 2 * Math.PI )/resXY) * Math.sin( ( i * Math.PI )/ resZ) ;
            punto.z = radio * Math.cos( ( i * Math.PI )/resZ) ;
            geoEsfera.vertices.push( punto );     
		  
        }        
    } 
        return geoEsfera;
}

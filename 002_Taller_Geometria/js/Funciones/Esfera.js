function EsferaGeo(){
    //var geometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
    var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
    scene.add( sphere );

}
function esferaPuntos(x,y,z,radio){
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
    var MaterialEsfera = new THREE.LineBasicMaterial({color: 0x29cfdb});
    var punesfera= new THREE.Points(geoEsfera,MaterialEsfera);
    punesfera.applyMatrix(new THREE.Matrix4().makeTranslation(x,y,z));
    
        //return punesfera;
        scene.add(punesfera);
}
function EsferaMascara(){
//Triangulos Malla
    class TRIANGLE_FAN{	
        constructor( Geometria, Material ){
          this.geometria = Geometria;
          this.material = Material;
        }  
        draw(){			
          for( var i=2; i<this.geometria.vertices.length; i++ ){
            this.geometria.faces.push( new THREE.Face3(0,i-1,i) );
          }
          this.geometria.computeFaceNormals();
          var fan = new THREE.Mesh( this.geometria, this.material );
         scene.add( fan );
          return fan;
        }
  }
    
  class TRIANGLE_STRIP{	
        constructor( Geometria, Material ){
          this.geometria = Geometria;
          this.material = Material;	
        }  
        draw(){			
          for( var i=2; i<this.geometria.vertices.length; i++ ){
          if(i%2!=0)
            this.geometria.faces.push( new THREE.Face3(i-2,i-1,i) );
          else
            this.geometria.faces.push( new THREE.Face3(i-1,i-2,i) );
          }
          this.geometria.computeFaceNormals();
          
          var strip = new THREE.Mesh( this.geometria, this.material);
          scene.add( strip );
          return strip;
        }
      }

// Geometria
var contadorDePuntos =0;
var geoEsfera = new THREE.Geometry();

var resXY = 50.0;
var resZ = 50.0;
var radio =2;
for(var j = 0; j< resXY; j++){
    contadorDePuntos ++;
}
for( var i = 0; i < resZ; i++){
    for( var j = 0; j < resXY; j++){
        var punto = new THREE.Vector3();
        punto.x = radio * Math.cos( ( j * 2 * Math.PI )/resXY) * Math.sin( i);
        punto.y = radio * Math.sin( ( j * 2 * Math.PI )/resXY) * Math.sin(i);
        punto.z = radio * Math.cos(i) ;
        geoEsfera.vertices.push( punto);    
        var materialFan = new THREE.MeshStandardMaterial( { color: 0x32EE54} )
     
    }        
} 
//

for (var i = 0; i < geoEsfera.vertices.length; i++) {
    if (i + contadorDePuntos < geoEsfera.vertices.length-1){
            geoEsfera.faces.push(new THREE.Face3(i, i + contadorDePuntos, i+1));
            geoEsfera.faces.push(new THREE.Face3(i + 1, i + contadorDePuntos, i + contadorDePuntos+1));
        }
    } 
//var MaterialEsfera = new THREE.MeshBasicMaterial({color: 0xEF6703});

    //var VerMaterial    = new THREE.Mesh(geoEsfera,materialFan);
    //scene.add(VerMaterial); 
   U[0] = new  TRIANGLE_FAN(geoEsfera, materialFan);
   U[0].draw();
  
   

}
function Luz(){
    //CREAR ILUMINACIÓN
     var ambient = new THREE.AmbientLight( 0xffffff, 2 );
     scene.add( ambient );
  
     var pointLight = new THREE.PointLight( 0x0F5469, 1, 100 );
     pointLight.position.set( -5, -2, 5 );
     scene.add( pointLight );
  
    
  }

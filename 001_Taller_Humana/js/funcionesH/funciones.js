
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
function MediaEsfera(radio){
    var geoEsferaM = new THREE.Geometry();
    var resXY = 50.0;
    var resZ = 50.0;
    for( var i = 0; i < resZ; i++){
        for( var j = 0; j < resXY; j++){
            var punto = new THREE.Vector3();
            punto.x = radio * Math.cos( ( j * 2 * Math.PI )/resXY) * Math.sin( ( i * Math.PI/2 )/ resZ) ;
            punto.y = radio * Math.sin( ( j * 2 * Math.PI )/resXY) * Math.sin( ( i * Math.PI/2 )/ resZ) ;
            punto.z = radio * Math.cos( ( i * Math.PI/2 )/resZ) ;
            geoEsferaM.vertices.push( punto );     
		  
        }        
    } 
        return geoEsferaM;
}

function Cubo(an,AL,PRO){
    var geoCubo = new THREE.Geometry();
    var i = 0 , j = 0, k = 0;
    for (i = 0; i < PRO ; i+=0.1) {
        for(j = 0; j < AL; j+=0.1){
            for (k = 0; k < an ; k+=0.1) {
              var punto = new THREE.Vector3();
              punto.x = k;
              punto.y = j;
              punto.z = i;
              geoCubo.vertices.push(punto);                
            }
        }
        
    } 
    return geoCubo;
}
function Cilindro(A,an,r){
    var geoCilindro = new THREE.Geometry();
    var res = r;
    for (var i= 0; i < res; i++) {
        for (var j = 0; j < res; j++) {
           var punto = new THREE.Vector3();
           punto.x=an*Math.cos((j*2*Math.PI)/res);
           punto.y=A*i/res;
           punto.z=an*Math.sin((j*2*Math.PI)/res);
           geoCilindro.vertices.push(punto);
        }        
    }
    return geoCilindro;
    
}

function Espiral(radio,altura){
			var geoEspiral = new THREE.Geometry();
			var Radianes;
			for(var i = 0 ; i < 360 ; i++){
				for(var r=0; r< radio; r=r+0.1 ){
				Radianes = (i*Math.PI)/180;
				var punto = new THREE.Vector3();
				punto.x = r*Math.cos(Radianes); 
				punto.y = altura;
				punto.z = r*Math.sin(Radianes); 
				geoEspiral.vertices.push(punto);
				}
			}
		return geoEspiral;
        }


function fondo(){
   
    scene = new THREE.Scene();
    aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera( 45, aspect, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
   
 	  
    var size = 10;
    var arrowSize = 1;
    var divisions = size;
    var origin = new THREE.Vector3( 0, 0, 0 );
    var x = new THREE.Vector3( 1, 0, 0 );
    var y = new THREE.Vector3( 0, 1, 0 );
    var z = new THREE.Vector3( 0, 0, 1 );
    var color1 = new THREE.Color( 0xFFFFFF );
    var color2 = new THREE.Color( 0x333333 );
    var colorR = new THREE.Color( 0xAA3333 );
    var colorG = new THREE.Color( 0x33AA33 );
    var colorB = new THREE.Color( 0x333366 );
    
    
      //CREAR LAS GRILLAS PARA EL ESCENARIO

      var axesHelper = new THREE.AxesHelper( size );
      var gridHelperXY = new THREE.GridHelper( size, divisions, color1, color1);
      var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2 );
      var gridHelperYZ = new THREE.GridHelper( size, divisions, color2, color2 );
     
//ROTARLAS PARA QUE QUEDEN EN EL ESPACIO ADECUADO
    
    gridHelperXY.rotateOnWorldAxis ( x, THREE.Math.degToRad(90) );
    gridHelperXZ.rotateOnWorldAxis ( y, THREE.Math.degToRad(90) );
    gridHelperYZ.rotateOnWorldAxis ( z, THREE.Math.degToRad(90) );
    
//CREAR LAS FLECHAS QUE INDICAN LOS EJES DE COORDENADAS 3D
    
//CREAR LAS FLECHAS ORIGEN COLA
     var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
     var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
     var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );

//AGREGAR A LA ESCENA
//scene.add( gridHelperXY );
      scene.add( gridHelperXZ );
      scene.add( arrowX);	
      scene.add( arrowY );	
      scene.add( arrowZ );	

      camera.position.x = 5;
      camera.position.y = 10 ;	 
      camera.position.z =  10;    
      camera.lookAt( origin );



}
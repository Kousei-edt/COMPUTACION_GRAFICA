function MesaFinal(){

//Mesa Geometria
var curve2D = [];
curve2D[0] = new THREE.Vector2( 0, 0 );
curve2D[1] = new THREE.Vector2( 4, 0 );
curve2D[2] = new THREE.Vector2( 4, 4 );
curve2D[3] = new THREE.Vector2( 0, 4 );

var shape = new THREE.Shape();
shape.moveTo(0,4);
shape.splineThru(curve2D);

var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
var resolution = 20;
var points = shape.getPoints( resolution );
var geometry = new THREE.BufferGeometry().setFromPoints( points );
// Create the final object to add to the scene
var curveObject = new THREE.Line( geometry, material );
//scene.add(curveObject);
//EXTRUDE
var extrudeSettings = {
steps: 2,
amount: 1,
bevelEnabled: false,
};
var material_Cafe = new THREE.MeshStandardMaterial({Color:0x744804,metalness: 0.5, roughness: 0.1});
var geometryExt = new THREE.ExtrudeGeometry( shape, extrudeSettings );
var mesh = new THREE.Mesh( geometryExt, material_Cafe) ;
//Escala
var sc = 5;
var s = new THREE.Matrix4();
  s.set( 	sc, 0, 0, 0,
              0, sc, 0, 0, 
              0, 0, sc, 0,
      0, 0, 0, 1 );
         
mesh.applyMatrix(s);
var material_Violeta = new THREE.MeshStandardMaterial( { color: 0xC900FF , metalness: 0.5, roughness: 0.1,transparent:true, opacity: 0.9 } );
var geometry_PuntoCentro = new THREE.SphereGeometry( 0.1, 32, 32 );
var PuntoCentral = new THREE.Mesh(geometry_PuntoCentro,material_Violeta);
PuntoCentral.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,0,0));
PuntoCentral.add(mesh);

mesh.applyMatrix( new THREE.Matrix4().makeTranslation(-10,.5,-10,0));
mesh.rotateX(Math.PI/2);

scene.add( PuntoCentral );

}
function Florero (){
    var Manzanota = [];
    var material_Rojo = new THREE.MeshStandardMaterial({Color:0xff0000,metalness: 0.5, roughness: 0.1});
    Manzanota[0] = new THREE.Vector2(6,1);
    Manzanota[1] = new THREE.Vector2(7,1);
    Manzanota[2] = new THREE.Vector2(9,3);
    Manzanota[3] = new THREE.Vector2(9,5);
    Manzanota[4] = new THREE.Vector2(8,6);
   
    Manzanota[5] = new THREE.Vector2(10,9);
    Manzanota[6] = new THREE.Vector2(8,11);
    Manzanota[7] = new THREE.Vector2(6,11);
    Manzanota[8] = new THREE.Vector2(4,9);
    Manzanota[9] = new THREE.Vector2(10,9);

    Manzanota[10] = new THREE.Vector2(8,6);
    Manzanota[11] = new THREE.Vector2(7,7);
    Manzanota[12] = new THREE.Vector2(5,7);
    Manzanota[13] = new THREE.Vector2(3,5);
    Manzanota[14] = new THREE.Vector2(3,3);
    Manzanota[15] = new THREE.Vector2(5,1);    

    var shap_Manzana = new THREE.Shape();
    shap_Manzana.moveTo(6,1);
    shap_Manzana.splineThru(Manzanota);
    
    var material1 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    var resolution = 50;
    var points = shap_Manzana.getPoints( resolution );
    var geometry1 = new THREE.BufferGeometry().setFromPoints( points );
    // Create the final object to add to the scene
    var curveObject1 = new THREE.Line( geometry1, material1 );
    //scene.add(curveObject);
    //EXTRUDE
    var material_Verde = new THREE.MeshStandardMaterial({Color:0x00ff00,metalness: 0.5, roughness: 0.1});
    var extrudeSettings1 = {
    steps: 2,
    amount: 1,
    bevelEnabled: false,
    };
    
    var geometryExt1 = new THREE.ExtrudeGeometry( shap_Manzana, extrudeSettings1 );
    var materialExt1= new THREE.MeshStandardMaterial( { 
    color: 0x00ff00, 
    metalness: 0.5, 
    roughness: 0.1,
    opacity: 0.75,
    transparent: true			
    } );
    
    var Manz = new THREE.Mesh( geometryExt1, material_Rojo ) ;
    var scr = 0.6;
var sm = new THREE.Matrix4();
  sm.set( 	scr, 0, 0, 0,
              0, scr, 0, 0, 
              0, 0, scr, 0,
      0, 0, 0, 1 );
         
Manz.applyMatrix(sm);
Manz.applyMatrix( new THREE.Matrix4().makeTranslation(0.5,4.5,-6,0))
scene.add( Manz );



//Mesa Geometria
var curve2D = [];
curve2D[0] = new THREE.Vector2(2,0);
curve2D[1] = new THREE.Vector2(3,0);
curve2D[2] = new THREE.Vector2(4,1);
curve2D[3] = new THREE.Vector2(4,2 );
curve2D[4] = new THREE.Vector2( 3,3 );
curve2D[5] = new THREE.Vector2(3,4 );
curve2D[6] = new THREE.Vector2( 2,5 );
curve2D[7] = new THREE.Vector2( 3,5 );
curve2D[8] = new THREE.Vector2( 4,5 );
curve2D[9] = new THREE.Vector2( 5,4 );
curve2D[10] = new THREE.Vector2( 4,4 );
curve2D[11] = new THREE.Vector2( 3,5 );
curve2D[11] = new THREE.Vector2( 2,5 );
curve2D[12] = new THREE.Vector2( 1,4 );
curve2D[13] = new THREE.Vector2( 1,3 );
curve2D[14] = new THREE.Vector2(0,2 );
curve2D[15] = new THREE.Vector2( 0,1 );


var shape = new THREE.Shape();
shape.moveTo(2,0);
shape.splineThru(curve2D);

var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
var resolution = 50;
var points = shape.getPoints( resolution );
var geometry = new THREE.BufferGeometry().setFromPoints( points );
// Create the final object to add to the scene
var curveObject = new THREE.Line( geometry, material );
//scene.add(curveObject);
//EXTRUDE
var extrudeSettings = {
steps: 2,
amount: 1,
bevelEnabled: false,
};

var geometryExt = new THREE.ExtrudeGeometry( shape, extrudeSettings );
var material_Verde = new THREE.MeshStandardMaterial({Color:0x00ff00,metalness: 0.5, roughness: 0.1});
var mesh = new THREE.Mesh( geometryExt, material_Verde ) ;
mesh.applyMatrix( new THREE.Matrix4().makeTranslation(3,4,-3,0))
scene.add( mesh );
}
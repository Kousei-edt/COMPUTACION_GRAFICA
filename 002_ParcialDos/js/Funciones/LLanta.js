var material_Violeta = new THREE.MeshStandardMaterial( { color: 0xC900FF , metalness: 0.5, roughness: 0.1,transparent:true, opacity: 0.9 } );
  var material_Verde = new THREE.MeshStandardMaterial({Color:0x00ff00,metalness: 0.5, roughness: 0.1});
  var material_Rojo = new THREE.MeshStandardMaterial({Color:0xff0000,metalness: 0.5, roughness: 0.1});
  var material_Naranja = new THREE.MeshStandardMaterial({Color:0xFF9E00,metalness: 0.5, roughness: 0.1});
  var material_Amarillo = new THREE.MeshStandardMaterial({Color:0xFBFF00,metalness: 0.5, roughness: 0.1});
  var material_AzulMar = new THREE.MeshStandardMaterial({Color:0x00C1FF,metalness: 0.5, roughness: 0.1});
//Geometias
//Cubo
var geometry_Cubo = new THREE.BoxGeometry(1,2,3,4);    
var Cubo     = new THREE.Mesh(geometry_Cubo,material_Violeta);
//scene.add(Cubo);
//Cono
var geometry_Cono = new THREE.ConeGeometry( 5, 14, 32 );
var cone = new THREE.Mesh( geometry_Cono, material_Rojo );    
//scene.add( cone );
//Cilindro
var geometry_Cilindro = new THREE.CylinderGeometry( 2, 5, 10, 32 );
var cylinder = new THREE.Mesh( geometry_Cilindro, material_AzulMar);
cylinder.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
//scene.add( cylinder );
//Toroide
var geometry_Toroide = new THREE.TorusGeometry( 10, 3, 16, 100 );
var torus = new THREE.Mesh( geometry_Toroide, material_AzulMar );
//torus.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
//scene.add( torus );
//CirculoGeometrico
var geometry_Ciculo = new THREE.CircleGeometry( 5, 32 );
//Esfera
var geometry = new THREE.SphereGeometry( 3, 32, 32 );
function moldellantas(){
 //Geometria

var geometry_CiculoLlantas = new THREE.CylinderGeometry(3.5, 3.5, 1, 32 );
var geometry_CuboLlanta = new THREE.CylinderGeometry( 1, 1, 8, 32 );
var geometry_CuboLlantaRinnes = new THREE.BoxGeometry(1,10,3,4);  
var geometry_CiculoGomaIN = new THREE.CylinderGeometry(13, 13, 1, 32 );
var geometry_CiculoGomaEX = new THREE.CylinderGeometry(15, 15, 1, 32 );

var geometry_CiculoCentro = new THREE.CylinderGeometry(1, 1, 3, 32 );

//Creacion malla

var LlantaEx = new THREE.Mesh(geometry_CiculoLlantas,material_Violeta);
var LlantaRin= new THREE.Mesh(geometry_CuboLlanta,material_Amarillo);
var LlantaRin1= new THREE.Mesh(geometry_CuboLlanta,material_Amarillo);
var LlantaRin2= new THREE.Mesh(geometry_CuboLlanta,material_Amarillo);
var LlantaEjes= new THREE.Mesh(geometry_CuboLlantaRinnes,material_Naranja);
var LlantaEjes2= new THREE.Mesh(geometry_CuboLlantaRinnes,material_Naranja);
var LlantaEjes3= new THREE.Mesh(geometry_CuboLlantaRinnes,material_Naranja);
var LlantaGomaIN = new THREE.Mesh(geometry_CiculoGomaIN,material_Rojo);
var LlantaGomaEX = new THREE.Mesh(geometry_CiculoGomaEX,material_Violeta);
var LlantaCentro = new THREE.Mesh(geometry_CiculoCentro,material_AzulMar);

 

//Translacion

LlantaEx.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
LlantaEx.rotateX(Math.PI/2);LlantaEx.rotateZ(Math.PI/2);

LlantaRin.applyMatrix(new THREE.Matrix4().makeTranslation(0,8,0,0));
LlantaRin1.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,8,0));
LlantaRin1.rotateX(Math.PI/2);
LlantaRin2.applyMatrix(new THREE.Matrix4().makeTranslation(0,-6,-5,0));
LlantaRin2.rotateZ(Math.PI);
LlantaRin2.rotateX(-0.80);
LlantaEjes.applyMatrix(new THREE.Matrix4().makeTranslation(0,8,0,0));
LlantaEjes2.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,8,0));
LlantaEjes2.rotateX(Math.PI/2);
LlantaEjes3.applyMatrix(new THREE.Matrix4().makeTranslation(0,-6,-5,0));
LlantaEjes3.rotateZ(Math.PI);
LlantaEjes3.rotateX(-0.80);
LlantaGomaEX.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));LlantaGomaEX.rotateX(Math.PI/2);LlantaGomaEX.rotateZ(Math.PI/2);
LlantaGomaIN.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));LlantaGomaIN.rotateX(Math.PI/2);LlantaGomaIN.rotateZ(Math.PI/2);
LlantaCentro.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
LlantaCentro.rotateZ(Math.PI/2)
//mostrar 
//scene.add(LlantaEx,LlantaRin,LlantaRin1,LlantaRin2,LlantaEjes,LlantaEjes2,LlantaEjes3,LlantaGomaIN,LlantaGomaEX,LlantaCentro);

//Converti los objetos en CSG !
// CAPERUZA
var E1 = THREE.CSG.fromMesh(LlantaCentro);
var L2 = THREE.CSG.fromMesh(LlantaGomaEX);
var L3 = THREE.CSG.fromMesh(LlantaGomaIN);
var EJE1 = THREE.CSG.fromMesh(LlantaEjes);
var EJE2 = THREE.CSG.fromMesh(LlantaEjes2);
var EJE3 = THREE.CSG.fromMesh(LlantaEjes3);
var RIN1 = THREE.CSG.fromMesh(LlantaRin);
var RIN2 = THREE.CSG.fromMesh(LlantaRin1);
var RIN3 = THREE.CSG.fromMesh(LlantaRin2);
var C0 = THREE.CSG.fromMesh(LlantaEx);
//material
E1.material_Rojo=material_Rojo;
L2.material_Rojo=material_Rojo; 
L3.material_Rojo=material_Rojo; 
EJE1.material_Rojo=material_Rojo; 
EJE2.material_Rojo=material_Rojo; 
EJE3.material_Rojo=material_Rojo;
RIN1.material_Rojo=material_Rojo;
RIN2.material_Rojo=material_Rojo;
RIN3.material_Rojo=material_Rojo;
C0.material_Rojo=material_Rojo;
//Tranformaciones de recorte por CSG
//a.union(b)	// a.subtract(b) //a.intersect(b)
//a.intersect(b).subtract(c.union(d).union(e))
//CAPERUZA
var resul = C0.subtract(E1);
var resul1= resul.union(EJE1.subtract(RIN1));
var resul2=resul1.union(EJE2.subtract(RIN2));
var resul3= resul2.union(EJE3.subtract(RIN3));
var resulf= resul3.union(L2.subtract(L3));





//CONVERTIR A MALLA DE THREE JS NUEVAMENTE 
//CAPERUZA   
L2  = THREE.CSG.toMesh(resulf);
//
var geometry_PuntoCentro = new THREE.SphereGeometry( 0.1, 32, 32 );
var PuntoCentral = new THREE.Mesh(geometry_PuntoCentro,material_Violeta);
PuntoCentral.add(L2);
scene.add(PuntoCentral);






}
  
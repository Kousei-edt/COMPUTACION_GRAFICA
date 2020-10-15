function Loza(){




       //LAMPARA
  //Material
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
//! Plato Geometria 
    var geometry_Plato = new THREE.BoxGeometry(6,2,6,6);
    var geometry_PlatoEX = new THREE.SphereGeometry( 3, 10, 5 );
    var geometry_PlatoIN = new THREE.SphereGeometry( 2.8, 9.8, 5 );
    var geometry_Cilindro_Prueba = new THREE.CylinderGeometry( 1, 1, 5, 32 );
    var geometry_Cilindro_Vino = new THREE.CylinderGeometry( 1, 1, 5, 32 );

//? Material 
    var PlatoEX = new THREE.Mesh(geometry_PlatoEX,material_Violeta);
    var PlatoIN = new THREE.Mesh(geometry_PlatoIN,material_Rojo);
    var PlatoTa = new THREE.Mesh(geometry_Plato,material_Verde);
    var Ejemplo= new THREE.Mesh(geometry_Cilindro_Prueba,material_AzulMar);
    var Vino1= new THREE.Mesh(geometry_Cilindro_Vino,material_AzulMar);

//?? Translacion de mallas
    PlatoEX.applyMatrix(new THREE.Matrix4().makeTranslation(0,3,0,0));
    PlatoIN.applyMatrix(new THREE.Matrix4().makeTranslation(0,3.5,0,0));
    PlatoTa.applyMatrix(new THREE.Matrix4().makeTranslation(0,5,0,0));
    Ejemplo.applyMatrix(new THREE.Matrix4().makeTranslation(0,5,0,0));
    Vino1.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));

//! Mostra
    //scene.add(PlatoEX, PlatoIN,PlatoTa);
    //scene.add(Ejemplo);
//? Convertir los objetos a CSD
    var Pla1 = THREE.CSG.fromMesh(PlatoEX);
    var Pla2 = THREE.CSG.fromMesh(PlatoIN);
    var Pla3 = THREE.CSG.fromMesh(PlatoTa);
////MALLA
    Pla1.material_AzulMar = material_AzulMar;
    Pla2.material_AzulMar = material_AzulMar;
    Pla3.material_AzulMar = material_AzulMar;

//?Tranformaciones de recorte por CSG
//?a.union(b)	// a.subtract(b) //a.intersect(b)
//a.intersect(b).subtract(c.union(d).union(e))
//CAPERUZA 
    var result = Pla1.subtract(Pla2.union(Pla3));

//!CONVERTIR A MALLA DE THREE JS NUEVAMENTE
    Pla1  = THREE.CSG.toMesh(result);

//? Mostrar
var geometry_PuntoCentro = new THREE.SphereGeometry( 0.1, 32, 32 );
var PuntoCentral = new THREE.Mesh(geometry_PuntoCentro,material_Violeta);

var sc = 1.9;
var s = new THREE.Matrix4();
  s.set( 	sc, 0, 0, 0,
              0, sc, 0, 0, 
              0, 0, sc, 0,
      0, 0, 0, 1 );
         
Pla1.applyMatrix(s);
Pla1.applyMatrix( new THREE.Matrix4().makeTranslation(0,0.3,0,0));

PuntoCentral.applyMatrix( new THREE.Matrix4().makeTranslation(3,0,-4,0));
PuntoCentral.add(Pla1);
scene.add(PuntoCentral);



}

function LamparaFinal(){

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

//Creacion lampara 
//Caperusa Geometria
var geometry_CilindroCaperuzaEx = new THREE.CylinderGeometry( 2, 5, 10, 32 );
var geometry_CilindroCaperuzaIn = new THREE.CylinderGeometry( 2, 4.8, 10, 32 );
var geometry_CiculoCaperuza = new THREE.CylinderGeometry( 1.5, 1.5, 12, 32 ); 
var geometry_EjemploViasta = new THREE.CylinderGeometry( 1, 1, 10, 32 );
var geometry_Bombillo = new THREE.SphereGeometry( 1.5, 22, 32 );
var geometry_BombilloUnion = new THREE.CylinderGeometry( 1.7, 0.8, 2, 32 );
var geometry_Cola = new THREE.BoxGeometry(4,1,8,15);   
var geometry_ToroideCola = new THREE.SphereGeometry( 2.5, 32, 32 );
var geometry_CilindroCuerpo = new THREE.CylinderGeometry( 0.5, 0.5, 11, 32 );
var geometry_CilindroCuerpoIn = new THREE.CylinderGeometry( 0.35,0.35, 11, 32 );
var geometry_CilindroInCuerpo = new THREE.CylinderGeometry( 0.1, .1, 10.2, 32 );
var geometry_ToroideCuerpo = new THREE.TorusGeometry( .7,.2, 16, 100 );





//Crear mallas
var CaperuzaEX = new THREE.Mesh(geometry_CilindroCaperuzaEx,material_Violeta);
var CaperuzaIn = new THREE.Mesh(geometry_CilindroCaperuzaIn,material_Rojo);
var CorteCaperuza = new THREE.Mesh(geometry_CiculoCaperuza,material_Amarillo);
var EjemploViata = new THREE.Mesh(geometry_EjemploViasta,material_Rojo);
var Bombillo = new THREE.Mesh(geometry_Bombillo,material_Violeta);
var BombilloUnion = new THREE.Mesh(geometry_BombilloUnion,material_Violeta);
var ColaLampara =  new THREE.Mesh(geometry_Cola,material_Violeta);
var Cola_Toroide = new THREE.Mesh(geometry_ToroideCola,material_Violeta);
var Cola_Toroide2 = new THREE.Mesh(geometry_ToroideCola,material_Violeta);
var Cuerpo = new THREE.Mesh(geometry_CilindroCuerpo,material_Violeta);
var CuerpoIn = new THREE.Mesh(geometry_CilindroCuerpoIn,material_AzulMar);
var CuerpoInterio = new THREE.Mesh(geometry_CilindroInCuerpo,material_AzulMar);
var CuerpoIn2 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn3 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn4 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn5 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn6 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn7 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn8 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn9 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn10 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn11 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn12 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn13 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
var CuerpoIn14 = new THREE.Mesh(geometry_ToroideCuerpo,material_Rojo);
// Traslacion de las malla
CaperuzaEX.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
CaperuzaIn.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.2,0,0));
CorteCaperuza.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0)); 
Bombillo.applyMatrix(new THREE.Matrix4().makeTranslation(0,3.8,0,0));    
BombilloUnion.applyMatrix(new THREE.Matrix4().makeTranslation(0,2,0,0)); 
ColaLampara.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0)); 
Cola_Toroide.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,5.5,0));
Cola_Toroide2.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,-5.5,0));
Cuerpo.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
CuerpoIn.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
CuerpoInterio.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,0,0));
CuerpoIn2.applyMatrix(new THREE.Matrix4().makeTranslation(0,4.7,0,0));
CuerpoIn3.applyMatrix(new THREE.Matrix4().makeTranslation(0,4.7,0,0));
CuerpoIn3.rotateY (Math.PI/2);    
CuerpoIn4.applyMatrix(new THREE.Matrix4().makeTranslation(0,3.1,0,0));
CuerpoIn5.applyMatrix(new THREE.Matrix4().makeTranslation(0,3.1,0,0));
CuerpoIn5.rotateY (Math.PI/2);  
CuerpoIn6.applyMatrix(new THREE.Matrix4().makeTranslation(0,1.5,0,0));
CuerpoIn7.applyMatrix(new THREE.Matrix4().makeTranslation(0,1.5,0,0));
CuerpoIn7.rotateY (Math.PI/2);    
CuerpoIn8.applyMatrix(new THREE.Matrix4().makeTranslation(0,-.1,0,0));
CuerpoIn9.applyMatrix(new THREE.Matrix4().makeTranslation(0,-.1,0,0));
CuerpoIn9.rotateY (Math.PI/2);  
CuerpoIn10.applyMatrix(new THREE.Matrix4().makeTranslation(0,-1.8,0,0));
CuerpoIn11.applyMatrix(new THREE.Matrix4().makeTranslation(0,-1.8,0,0));
CuerpoIn11.rotateY (Math.PI/2);    
CuerpoIn12.applyMatrix(new THREE.Matrix4().makeTranslation(0,-3.5,0,0));
CuerpoIn13.applyMatrix(new THREE.Matrix4().makeTranslation(0,-3.5,0));
CuerpoIn13.rotateY (Math.PI/2);  

/*scene.add(CaperuzaEX); scene.add(CaperuzaIn); scene.add(CorteCaperuza);
scene.add(BombilloUnion); scene.add(Bombillo);
scene.add(ColaLampara); scene.add(Cola_Toroide);scene.add(Cola_Toroide2);
 scene.add(Cuerpo); //scene.add(CuerpoIn);
scene.add(CuerpoIn2);scene.add(CuerpoIn3);
scene.add(CuerpoIn4);scene.add(CuerpoIn5);scene.add(CuerpoIn6);scene.add(CuerpoIn7);scene.add(CuerpoIn8);scene.add(CuerpoIn9);scene.add(CuerpoIn10);scene.add(CuerpoIn11);scene.add(CuerpoIn12);scene.add(CuerpoIn13);*/



//Converti los objetos en CSG !
// CAPERUZA
var C1 = THREE.CSG.fromMesh(CaperuzaEX);
var C2 = THREE.CSG.fromMesh(CaperuzaIn);
var C3 = THREE.CSG.fromMesh(CorteCaperuza);
var B1 = THREE.CSG.fromMesh(Bombillo);
var B2 = THREE.CSG.fromMesh(BombilloUnion);
var CL1 = THREE.CSG.fromMesh(ColaLampara);
var CL2 = THREE.CSG.fromMesh(Cola_Toroide);
var CL3 = THREE.CSG.fromMesh(Cola_Toroide2);
var CU1 = THREE.CSG.fromMesh(Cuerpo);
var CU2 = THREE.CSG.fromMesh(CuerpoIn);
//var CU3 = THREE.CSG.fromMesh(CuerpoInterio);
var CU4 = THREE.CSG.fromMesh(CuerpoIn2);
var CU6 =THREE.CSG.fromMesh(CuerpoIn3);
var CU7 =THREE.CSG.fromMesh(CuerpoIn4);
var CU8 =THREE.CSG.fromMesh(CuerpoIn5);
var CU9 =THREE.CSG.fromMesh(CuerpoIn6);
var CU10 =THREE.CSG.fromMesh(CuerpoIn7);
var CU11 =THREE.CSG.fromMesh(CuerpoIn8);
var CU12 =THREE.CSG.fromMesh(CuerpoIn9);
var CU13 =THREE.CSG.fromMesh(CuerpoIn10);
var CU14 =THREE.CSG.fromMesh(CuerpoIn11);
var CU15 =THREE.CSG.fromMesh(CuerpoIn12);
var CU16 =THREE.CSG.fromMesh(CuerpoIn13);

//?Material ?/
//CAPERUZA
C1.material_Violeta = material_Violeta; C2.material_Violeta=material_Violeta;
C3.material_Violeta=material_Violeta;
//Bombillo
B1.material_AzulMar=material_AzulMar;B2.material_AzulMar=material_AzulMar;
//Cola lampara
CL1.material_Naranja=material_Naranja;
CL2.material_Naranja=material_Naranja;
CL3.material_Naranja=material_Naranja;
CU1.material_Naranja=material_Naranja;
CU2.material_Naranja=material_Naranja;
//CU3.material_Naranja=material_Naranja;
CU4.material_Rojo=material_Rojo;
CU6.material_Rojo=material_Rojo; 
CU7.material_Rojo=material_Rojo; 
CU8.material_Rojo=material_Rojo; 
CU9.material_Rojo=material_Rojo; 
CU10.material_Rojo=material_Rojo;
CU11.material_Rojo=material_Rojo;
CU12.material_Rojo=material_Rojo;
CU13.material_Rojo=material_Rojo;
CU14.material_Rojo=material_Rojo;
CU15.material_Rojo=material_Rojo;
CU16.material_Rojo=material_Rojo;

//Tranformaciones de recorte por CSG
//a.union(b)	// a.subtract(b) //a.intersect(b)
//a.intersect(b).subtract(c.union(d).union(e))
//CAPERUZA
var result =  C1.subtract(C2.union(C3));
var resultBombilli= B1.union(B2);
var resultadoCola = CL1.subtract(CL2.union(CL3));
var resultCuerpo  = CU1.subtract(CU2.union(CU4.union(CU6.union(CU7.union(CU8.union(CU9.union(CU10.union(CU11.union(CU12.union(CU13))))))))));

//CONVERTIR A MALLA DE THREE JS NUEVAMENTE 
//CAPERUZA   
C1  = THREE.CSG.toMesh(result);
B1  = THREE.CSG.toMesh(resultBombilli);
CL1 = THREE.CSG.toMesh(resultadoCola);
CU1 = THREE.CSG.toMesh(resultCuerpo);

//Escala
var sc = .7;
var s = new THREE.Matrix4();
  s.set( 	sc, 0, 0, 0,
              0, sc, 0, 0, 
              0, 0, sc, 0,
      0, 0, 0, 1 );
         
C1.applyMatrix(s);
//Crear punto
var geometry_PuntoCentro = new THREE.SphereGeometry( 0.1, 32, 32 );
var PuntoCentral = new THREE.Mesh(geometry_PuntoCentro,material_Violeta);


C1.applyMatrix( new THREE.Matrix4().makeTranslation(0,13,0,0));
B1.applyMatrix( new THREE.Matrix4().makeTranslation(0,-3,0,0));
CL1.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,0,0));
CU1.applyMatrix( new THREE.Matrix4().makeTranslation(0,5.3,0,0));
PuntoCentral.applyMatrix( new THREE.Matrix4().makeTranslation(-3,1,0,0));
PuntoCentral.add(C1);
C1.add(B1);
PuntoCentral.add(CL1);
CL1.add(CU1);
CU1.add(CuerpoInterio);
scene.add(PuntoCentral);
 
}
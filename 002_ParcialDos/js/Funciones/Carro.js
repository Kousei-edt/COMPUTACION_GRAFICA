function Carrito (){
    var Manzanota = [];
    var material_Rojo = new THREE.MeshStandardMaterial({Color:0xff0000,metalness: 0.5, roughness: 0.1,transparent:true, opacity: 0.9});
    var material_Naranja = new THREE.MeshStandardMaterial({Color:0xFA5B00,metalness: 0.5, roughness: 0.1,transparent:true, opacity: 0.9});
    var material_Negro = new THREE.MeshStandardMaterial({Color:0x000000,metalness: 0.5, roughness: 0.1});
    var material_Violeta = new THREE.MeshStandardMaterial( { color: 0xC900FF , metalness: 0.5, roughness: 0.1,transparent:true, opacity: 0.9 } );
    var material_AZUL = new THREE.MeshStandardMaterial( { color: 0x006AFA , metalness: 0.5, roughness: 0.1,transparent:true, opacity: 0.8 } );
    Manzanota[0] = new THREE.Vector2(-12.7211383081054,2.0774158254777);
    Manzanota[1] = new THREE.Vector2(-10.3436034826792,2.2428222274196);
    Manzanota[2] = new THREE.Vector2(-4.1025745659355,3.8417507795243);
    Manzanota[3] = new THREE.Vector2(-3.4487524889433,4.227699050722);
    Manzanota[4] = new THREE.Vector2(2.3167694627152,4.7239182565477);
   
    Manzanota[5] = new THREE.Vector2(3.6838519873352,4.5585118546058);
    Manzanota[6] = new THREE.Vector2(6.5963321484823,2.6287704986173);
    Manzanota[7] = new THREE.Vector2(13.19399128904,2.4082286293614);
    Manzanota[8] = new THREE.Vector2(17.651869086714,1.4709256850242);
    Manzanota[9] = new THREE.Vector2(17.0574853803575,0.0925390021752);

    Manzanota[10] = new THREE.Vector2(17.7707458279853,0.0925390021752);
    Manzanota[11] = new THREE.Vector2(17.7707458279853,-0.1280028670806);
    Manzanota[12] = new THREE.Vector2(17.1169237509931,-0.1831383343946);
    Manzanota[13] = new THREE.Vector2(16.106471450187,-1.1755767460458);
    Manzanota[14] = new THREE.Vector2(14.6799505549313,-1.2307122133598);
    Manzanota[15] = new THREE.Vector2(14.2638819604817,-0.6242220729062);
    Manzanota[16] = new THREE.Vector2(13.8478133660322,0.0374035348613);
    Manzanota[17] = new THREE.Vector2(13.3128680303113,0.5887582080008);
    Manzanota[18] = new THREE.Vector2(12.3618541001408,0.8093000772567);
    Manzanota[19] = new THREE.Vector2(11.3514017993347,0.8093000772567);
    Manzanota[20] = new THREE.Vector2(10.4003878691642,0.6438936753148);    
    Manzanota[21] = new THREE.Vector2(10,0);
    Manzanota[22] = new THREE.Vector2(9.3304971977224,-0.6793575402202);
    Manzanota[23] = new THREE.Vector2(8.9989213569021,-1.6973009166747);
    Manzanota[24] = new THREE.Vector2(-4.0371746787315,-1.6402613976922);
    Manzanota[25] = new THREE.Vector2(-4.4676118119836,-0.8417081319371);
    Manzanota[26] = new THREE.Vector2(-5,0);
    Manzanota[27] = new THREE.Vector2(-5.8819052498117,0.4702008046606);
    Manzanota[28] = new THREE.Vector2(-7.1117256305319,0.6413193616081);
    Manzanota[29] = new THREE.Vector2(-8.341546011252,0.3561217666956);
    Manzanota[30] = new THREE.Vector2(-8.9564562016121,-0.271312942112);
    Manzanota[31] = new THREE.Vector2(-9.2639112967922,-1.2980242837972);
    Manzanota[32] = new THREE.Vector2(-11.6005700201605,-1.1839452458322);
    Manzanota[33] = new THREE.Vector2(-12.9533724389526,-0.3283524610945);
    Manzanota[34] = new THREE.Vector2(-12.9533724389526,0.6983588805906);
    Manzanota[35] = new THREE.Vector2(-13.6912646673847,0.6983588805906);
    Manzanota[36] = new THREE.Vector2(-12.7211383081054,2.0774158254777);
   // ventana 
   var ventana = [];
   ventana[0] = new THREE.Vector2(5.1864781766696,2.2954654121008);
   ventana[1] = new THREE.Vector2(3.2187655675174,3.778492905646);
   ventana[2] = new THREE.Vector2(3.8336757578775,2.2384258931183);
   ventana[3] = new THREE.Vector2(5.1864781766696,2.2954654121008);
   //ventana[2] = new THREE.Vector2();
   //Ventana
   var shap_ventana = new THREE.Shape();
    shap_ventana.moveTo(5.1864781766696,2.2954654121008);
    shap_ventana.splineThru(ventana); 

    var material2 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    var resolution = 70;
    var points = shap_ventana.getPoints( resolution );
    var geometryVentana = new THREE.BufferGeometry().setFromPoints( points );
    // Create the final object to add to the scene
    var curveObjectVentana = new THREE.Line( geometryVentana, material2);
//scene.add(curveObjectVentana);
    var extrudeSettings1 = {
      steps: 6,
      amount: 10,
      bevelEnabled: false,
      };
      
      var geometryFinalVentana = new THREE.ExtrudeGeometry( shap_ventana, extrudeSettings1 );
      //scene.add(geometryFinalVentana);
      var RecorteVentana = new THREE.Mesh( geometryFinalVentana, material_Violeta ) ;
      RecorteVentana.applyMatrix( new THREE.Matrix4().makeTranslation(0.5,0,-5,0));
     // scene.add(RecorteVentana);
  //VENTADO DOS 
  var ventanaDos = [];
  ventanaDos[0] = new THREE.Vector2(3.256513244724,2.3341660490397);
  ventanaDos[1] = new THREE.Vector2(2.4660748259532,4.5338154238003);
  ventanaDos[2] = new THREE.Vector2(-1.9472063455173,4.4727140522792);
  ventanaDos[3] = new THREE.Vector2(-2.803514632519,4.2894099377158);
  ventanaDos[4] = new THREE.Vector2(-3.1987338419045,3.7394975940257);
  ventanaDos[5] = new THREE.Vector2(-2.6717748960572,2.3341660490397); 
  ventanaDos[6] = new THREE.Vector2(3.256513244724,2.3341660490397);

 //Ventano DOS
  var shap_ventanaDOS = new THREE.Shape();
   shap_ventanaDOS.moveTo(3.256513244724,2.3341660490397);
   shap_ventanaDOS.splineThru(ventanaDos); 

   var material2 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
   var resolution = 70;
   var points = shap_ventanaDOS.getPoints( resolution );
   var geometryVentanaDos = new THREE.BufferGeometry().setFromPoints( points );
   // Create the final object to add to the scene
   var curveObjectVentanaDos = new THREE.Line( geometryVentanaDos, material2);
   curveObjectVentanaDos.applyMatrix( new THREE.Matrix4().makeTranslation(0,-0.3,0,0));
//scene.add(curveObjectVentanaDos);
   var extrudeSettings3 = {
     steps: 6,
     amount: 10,
     bevelEnabled: false,
     };
     
     var geometryFinalVentanaDos = new THREE.ExtrudeGeometry( shap_ventanaDOS, extrudeSettings3 );
     scene.add(geometryFinalVentanaDos);
     var RecorteVentanaDOS = new THREE.Mesh( geometryFinalVentanaDos, material_AZUL ) ;
     RecorteVentanaDOS.applyMatrix( new THREE.Matrix4().makeTranslation(0,-.3,-5,0));
    // scene.add(RecorteVentanaDOS);
//Interior
  var Interior = [];
      Interior[0] = new THREE.Vector2(-2.5606572609637,3.8071412925511);
      Interior[1] = new THREE.Vector2(-6.6806842029861,2.6490300428795);
      Interior[2] = new THREE.Vector2(-11.4249576513755,1.4330132307243);
      Interior[3] = new THREE.Vector2(-5.3697665396154,1.2013909807899);
      Interior[4] = new THREE.Vector2(-3.4346023698776,-0.1304369563324);
      Interior[5] = new THREE.Vector2(-0.6879177418627,-0.2462480812996); 
      Interior[6] = new THREE.Vector2(7.989108696639,-0.5357758937175);
      Interior[7] = new THREE.Vector2(9.5497249625565,0.911863168372);
      Interior[8] = new THREE.Vector2(6.4909170813581,1.606729918175);
      Interior[9] = new THREE.Vector2(3.369684549523,3.401802355166);
      Interior[10] = new THREE.Vector2(1.8714929342421,4.4441024798705);
      Interior[11] = new THREE.Vector2(-2.5606572609637,3.8071412925511);
     // Interior[6] = new THREE.Vector2();   

//Ventano DOS
      var shap_ventanaTres = new THREE.Shape();
       shap_ventanaTres.moveTo(-2.5606572609637,3.8071412925511);
       shap_ventanaTres.splineThru(Interior); 

       var material2 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
       var resolutionI = 70;
       var points1 = shap_ventanaTres.getPoints( resolutionI );
       var geometryInterio = new THREE.BufferGeometry().setFromPoints( points1 );
 // Create the final object to add to the scene
       var curveObjectInterior = new THREE.Line( geometryInterio, material2);
        curveObjectInterior.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,0,0));
//scene.add(curveObjectInterior);
      var extrudeSettings4 = {
       steps: 6,
        amount: 9,
       bevelEnabled: false,
   };
   
   var geometryFinalInterior = new THREE.ExtrudeGeometry( shap_ventanaTres, extrudeSettings4 );
   scene.add(geometryFinalInterior);
   var RecorteInterio = new THREE.Mesh( geometryFinalInterior, material_Verde ) ;
   RecorteInterio.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,-4.5,0));
//scene.add(RecorteInterio);
//SILLA
var SILLA = [];
SILLA[0] = new THREE.Vector2(0.328687672825,2.8658606019259);
SILLA[1] = new THREE.Vector2(0.6976337870411,-0.3283524610945);
SILLA[2] = new THREE.Vector2(4.0181488149855,-0.5565105370246);
SILLA[3] = new THREE.Vector2(4.0796398340215,0.2990822477131);
SILLA[4] = new THREE.Vector2(1.7429811106532,0.4131612856781);
SILLA[5] = new THREE.Vector2(1.1280709202931,2.2954654121008); 
SILLA[6] = new THREE.Vector2(0.328687672825,2.8658606019259);


// Interior[6] = new THREE.Vector2();   

//Ventano DOS
var shap_Silla = new THREE.Shape();
 shap_Silla.moveTo(0.328687672825,2.8658606019259);
 shap_Silla.splineThru(SILLA); 

 var material2 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
 var resolutionSilla = 70;
 var points1 = shap_Silla.getPoints( resolutionSilla );
 var geometrySilla = new THREE.BufferGeometry().setFromPoints( points1 );
// Create the final object to add to the scene
 var curveObjectInterior = new THREE.Line( geometrySilla, material_Rojo);
  curveObjectInterior.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,0,0));
//scene.add(curveObjectInterior);
var extrudeSettings5 = {
 steps: 6,
  amount: 9,
 bevelEnabled: false,
};

var geometrySillaFinal = new THREE.ExtrudeGeometry( shap_Silla, extrudeSettings5 );
scene.add(geometrySillaFinal);
var RecrteSilla = new THREE.Mesh( geometrySillaFinal, material_Rojo ) ;
RecrteSilla.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,-4.5,0));
//scene.add(RecrteSilla);

//VentanaPrincipal
var Parabrisas = [];
Parabrisas[0] = new THREE.Vector2(3.6492027007694,4.4629671334361);
Parabrisas[1] = new THREE.Vector2(6.2318255002817,2.6377025259959);
Parabrisas[2] = new THREE.Vector2(5.7398973479937,2.2384258931183);
Parabrisas[3] = new THREE.Vector2(2.9113104723373,3.664413867681);
Parabrisas[4] = new THREE.Vector2(3.3417476055894,4.2918485764886);



// Interior[6] = new THREE.Vector2();   

//Ventano DOS
var shap_Parabrisas = new THREE.Shape();
 shap_Parabrisas.moveTo(3.6492027007694,4.4629671334361);
 shap_Parabrisas.splineThru(Parabrisas); 

 var material2 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
 var resolutionParabri = 70;
 var points1 = shap_Parabrisas.getPoints( resolutionParabri );
 var geometryParabrisas = new THREE.BufferGeometry().setFromPoints( points1 );
// Create the final object to add to the scene
 var curveObjectParabri = new THREE.Line( geometryParabrisas, material_AZUL);
  curveObjectParabri.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,0,0));
//scene.add(curveObjectInterior);
var extrudeSettings6 = {
 steps: 9,
  amount: 9.5,
 bevelEnabled: false,
};

var geometryParabrisasFinal = new THREE.ExtrudeGeometry( shap_Parabrisas, extrudeSettings6 );
scene.add(geometryParabrisasFinal);
var RecrtePara = new THREE.Mesh( geometryParabrisasFinal, material_AZUL ) ;
RecrtePara.applyMatrix( new THREE.Matrix4().makeTranslation(.2,0,-4.8,0));
//scene.add(RecrtePara);
//! VIBRIO
//scene.add(RecrteSilla);

//VentanaPrincipal
var Parabrisas2 = [];
Parabrisas2[0] = new THREE.Vector2(3.6492027007694,4.4629671334361);
Parabrisas2[1] = new THREE.Vector2(6.2318255002817,2.6377025259959);
Parabrisas2[2] = new THREE.Vector2(6.1356953741253,2.5089219167544);
Parabrisas2[3] = new THREE.Vector2(3.5739512347182,4.3536753821186);
Parabrisas2[4] = new THREE.Vector2(3.6492027007694,4.4629671334361);



// Interior[6] = new THREE.Vector2();   

//Ventano DOS
var shap_Parabrisas2 = new THREE.Shape();
 shap_Parabrisas2.moveTo(3.6492027007694,4.4629671334361);
 shap_Parabrisas2.splineThru(Parabrisas2); 

 var material2 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
 var resolutionParabri2 = 70;
 var points1 = shap_Parabrisas2.getPoints( resolutionParabri2 );
 var geometryParabrisas2 = new THREE.BufferGeometry().setFromPoints( points1 );
// Create the final object to add to the scene
 var curveObjectParabri2 = new THREE.Line( geometryParabrisas2, material_AZUL);
  curveObjectParabri2.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,0,0));
//scene.add(curveObjectInterior);
var extrudeSettings7 = {
 steps: 9,
  amount: 9.5,
 bevelEnabled: false,
};

var geometryParabrisasFinal2 = new THREE.ExtrudeGeometry( shap_Parabrisas2, extrudeSettings7 );
scene.add(geometryParabrisasFinal2);
var RecrtePara2 = new THREE.Mesh( geometryParabrisasFinal2, material_AZUL ) ;
RecrtePara2.applyMatrix( new THREE.Matrix4().makeTranslation(.1,0,-4.8,0));
//scene.add(RecrtePara2);



//Carro 
    var shap_Manzana = new THREE.Shape();
    shap_Manzana.moveTo(-12.7211383081054,2.0774158254777);
    shap_Manzana.splineThru(Manzanota);
    
    var material1 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    var resolution = 70;
    var points = shap_Manzana.getPoints( resolution );
    var geometry1 = new THREE.BufferGeometry().setFromPoints( points );
    // Create the final object to add to the scene
    var curveObject1 = new THREE.Line( geometry1, material1 );
//scene.add(curveObject1);
    //EXTRUDE
    var material_Verde = new THREE.MeshStandardMaterial({Color:0x00ff00,metalness: 0.5, roughness: 0.5});
    var extrudeSettings1 = {
    steps: 6,
    amount: 10,
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
  sm.set( 	  scr, 0, 0, 0,
              0, scr, 0, 0, 
              0, 0, scr, 0,
              0, 0, 0, 1 );
         
//Manz.applyMatrix(sm);
Manz.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,-5,0));
//scene.add( Manz );
//
var C1 = THREE.CSG.fromMesh(Manz);
var R1 = THREE.CSG.fromMesh(RecorteVentana);
var R2 = THREE.CSG.fromMesh(RecorteVentanaDOS);
var R3 = THREE.CSG.fromMesh(RecorteInterio);
var R4 = THREE.CSG.fromMesh(RecrtePara);


// 
//a.union(b)	// a.subtract(b) //a.intersect(b)
//
var resul = C1.subtract(R1.union(R2.union(R3.union(R4))));

//
var CarroFinal = THREE.CSG.toMesh(resul);
CarroFinal.material=material_Violeta;
//Mostrar
var geometry_PuntoCentro = new THREE.SphereGeometry( 0.1, 32, 32 );
var PuntoCentral = new THREE.Mesh(geometry_PuntoCentro,material_Violeta);
PuntoCentral.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,0,0));
PuntoCentral.add(CarroFinal);
PuntoCentral.add(RecrteSilla);
PuntoCentral.add(RecrtePara2);



//scene.add(CarroFinal);

return PuntoCentral;






}
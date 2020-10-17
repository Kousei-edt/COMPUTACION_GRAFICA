function Carrito (){
    var Manzanota = [];
    var material_Rojo = new THREE.MeshStandardMaterial({Color:0xff0000,metalness: 0.5, roughness: 0.1});
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
   
  
   // Manzanota[41] = new THREE.Vector2();



    var shap_Manzana = new THREE.Shape();
    shap_Manzana.moveTo(-12.7211383081054,2.0774158254777);
    shap_Manzana.splineThru(Manzanota);
    
    var material1 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    var resolution = 70;
    var points = shap_Manzana.getPoints( resolution );
    var geometry1 = new THREE.BufferGeometry().setFromPoints( points );
    // Create the final object to add to the scene
    var curveObject1 = new THREE.Line( geometry1, material1 );
    scene.add(curveObject1);
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
  sm.set( 	scr, 0, 0, 0,
              0, scr, 0, 0, 
              0, 0, scr, 0,
      0, 0, 0, 1 );
         
//Manz.applyMatrix(sm);
Manz.applyMatrix( new THREE.Matrix4().makeTranslation(0.5,4.5,-6,0))
scene.add( Manz );




}
var material_Violeta = new THREE.MeshStandardMaterial( { color: 0xC900FF , metalness: 0.5, roughness: 0.1,transparent:true, opacity: 0.9 } );
  var material_Verde = new THREE.MeshStandardMaterial({Color:0x00ff00,metalness: 0.5, roughness: 0.1});
  var material_Rojo = new THREE.MeshStandardMaterial({Color:0xff0000,metalness: 0.5, roughness: 0.1});
  var material_Naranja = new THREE.MeshStandardMaterial({Color:0xFF9E00,metalness: 0.5, roughness: 0.1});
  var material_Amarillo = new THREE.MeshStandardMaterial({Color:0xFBFF00,metalness: 0.5, roughness: 0.1});
  var material_AzulMar = new THREE.MeshStandardMaterial({Color:0x00C1FF,metalness: 0.5, roughness: 0.1});
  var material_Negro = new THREE.MeshStandardMaterial({Color:0x000000,metalness: 0.5, roughness: 0.1});
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
function Chasis(){
//Geometrias
    var geometry_chasis = new THREE.CylinderGeometry(0.7,0.2,24.5,32);
    var geometry_chasis1 = new THREE.CylinderGeometry(0.2,0.2,6,32);
    var geometry_chasis2 = new THREE.CylinderGeometry(0.09,0.09,9,32);
//Discos
    var geometry_Disco = new THREE.CylinderGeometry(1,1,0.2,32);

//Caja
    var geometry_Chacis2 = new THREE.BoxGeometry(5,1,3,3);
    var geometry_Chacis3 = new THREE.BoxGeometry(3,1,2,3);


//Malla
    var CH1 = new THREE.Mesh(geometry_chasis,material_Amarillo);
        CH1.applyMatrix(new THREE.Matrix4().makeTranslation(2.6,0,0,0));
        CH1.rotateZ(Math.PI/2);
    var CHU1= new THREE.Mesh(geometry_Chacis2,material_Amarillo); 
        CHU1.applyMatrix(new THREE.Matrix4().makeTranslation(-7,0,0,0));  
    var CHU2 = new THREE.Mesh(geometry_chasis1,material_Amarillo);
        CHU2.applyMatrix(new THREE.Matrix4().makeTranslation(-7,0,0,0));
        CHU2.rotateZ(Math.PI/2);CHU2.rotateX(Math.PI/2);
    var CHU3 = new THREE.Mesh(geometry_chasis2,material_AzulMar);
        CHU3.applyMatrix(new THREE.Matrix4().makeTranslation(-7,0,0,0));
        CHU3.rotateZ(Math.PI/2);CHU3.rotateX(Math.PI/2);
    var CHDisco = new THREE.Mesh(geometry_Disco,material_Rojo);
        CHDisco.applyMatrix(new THREE.Matrix4().makeTranslation(-7,0,-4.5,0));
        CHDisco.rotateY(Math.PI/2); CHDisco.rotateZ(Math.PI/2);
    var CHDiscoD = new THREE.Mesh(geometry_Disco,material_Rojo);
        CHDiscoD.applyMatrix(new THREE.Matrix4().makeTranslation(-7,0,4.5,0));
        CHDiscoD.rotateY(Math.PI/2); CHDiscoD.rotateZ(Math.PI/2);
    var CHUDelantero= new THREE.Mesh(geometry_Chacis3,material_Amarillo); 
        CHUDelantero.applyMatrix(new THREE.Matrix4().makeTranslation(12,0,0,0));  
    var CHU2Delantera = new THREE.Mesh(geometry_chasis1,material_Amarillo);
        CHU2Delantera.applyMatrix(new THREE.Matrix4().makeTranslation(12,0,0,0));
        CHU2Delantera.rotateZ(Math.PI/2);CHU2Delantera.rotateX(Math.PI/2);
    var CHU3Delantera = new THREE.Mesh(geometry_chasis2,material_AzulMar);
        CHU3Delantera.applyMatrix(new THREE.Matrix4().makeTranslation(12,0,0,0));
        CHU3Delantera.rotateZ(Math.PI/2);CHU3Delantera.rotateX(Math.PI/2);
    var CHDiscoDelantera = new THREE.Mesh(geometry_Disco,material_Rojo);
        CHDiscoDelantera.applyMatrix(new THREE.Matrix4().makeTranslation(12,0,-4.5,0));
        CHDiscoDelantera.rotateY(Math.PI/2); CHDiscoDelantera.rotateZ(Math.PI/2);
    var CHDisco2Delantera = new THREE.Mesh(geometry_Disco,material_Rojo);
        CHDisco2Delantera.applyMatrix(new THREE.Matrix4().makeTranslation(12,0,4.5,0));
        CHDisco2Delantera.rotateY(Math.PI/2); CHDisco2Delantera.rotateZ(Math.PI/2);
//Mostrar
    /*scene.add(CHDisco,CHDiscoD);
    scene.add(CHUDelantero,CHU2Delantera,CHU3Delantera);
    scene.add(CHDiscoDelantera,CHDisco2Delantera);
    scene.add(CHU1,CHU2,CHU3);
    scene.add(CH1);*/
   
    
//Converti los objetos en CSG !
// CAPERUZA
    var E1 = THREE.CSG.fromMesh(CHDisco2Delantera);
    var L2 = THREE.CSG.fromMesh(CHDiscoD);
    var L3 = THREE.CSG.fromMesh(CHUDelantero);
    var EJE1 = THREE.CSG.fromMesh(CHU2Delantera);
    var EJE2 = THREE.CSG.fromMesh(CHU3Delantera);
    var EJE3 = THREE.CSG.fromMesh(CHDiscoDelantera);
    var RIN1 = THREE.CSG.fromMesh(CHDisco2Delantera);
    var RIN2 = THREE.CSG.fromMesh(CHU1);
    var RIN3 = THREE.CSG.fromMesh(CHU2);
    var C1 = THREE.CSG.fromMesh(CHU3);
    var C2 = THREE.CSG.fromMesh(CHDisco);
    var C0 = THREE.CSG.fromMesh(CH1);
//Tranformaciones de recorte por CSG
//a.union(b)	// a.subtract(b) //a.intersect(b)
    var resul = C0.union(E1.union(L2.union(L3.union(EJE1.union(EJE2.union(EJE3.union(RIN1.union(RIN2.union(RIN3.union(C1.union(C2)))))))))));
//CONVERTIR A MALLA DE THREE JS NUEVAMENTE 
    var VerChasis = THREE.CSG.toMesh(resul);
//MATERIAL
    VerChasis.material=material_Rojo;
//Mostrar
    var geometry_PuntoCentro = new THREE.SphereGeometry( 0.1, 32, 32 );
    var PuntoCentralChasis = new THREE.Mesh(geometry_PuntoCentro,material_Negro);
        PuntoCentralChasis.applyMatrix(new THREE.Matrix4().makeTranslation(0,-1,0,0));
    PuntoCentralChasis.add(VerChasis);

    //scene.add(PuntoCentral);



return PuntoCentralChasis;


}
var geometry_PuntoCentro = new THREE.SphereGeometry( 0.1, 32, 32 );
var PuntoCentraLFILAL3D = new THREE.Mesh(geometry_PuntoCentro,material_Negro);

function Modelo(){
    //MONTAJE
     var Carro =  Carrito ().clone();
     var LlantaUno =  moldellantas().clone();
     var LlantaDos =  moldellantas().clone();
     var LlantaTres =  moldellantas().clone();
     var LlantaCuatro =  moldellantas().clone();
    
  //Escala
     var scr = 0.1;
     var sm = new THREE.Matrix4();
             sm.set(scr, 0, 0, 0,
                    0, scr, 0, 0, 
                    0, 0, scr, 0,
                    0, 0, 0, 1 );
         
        LlantaUno.applyMatrix(sm);
        LlantaDos.applyMatrix(sm);
        LlantaTres.applyMatrix(sm);
        LlantaCuatro.applyMatrix(sm);
  //Traslacion 
        LlantaUno.applyMatrix(new THREE.Matrix4().makeTranslation(12,-1,5,0));
        LlantaUno.rotateY(Math.PI/2);
        LlantaDos.applyMatrix(new THREE.Matrix4().makeTranslation(12,-1,-5,0));
        LlantaDos.rotateY(Math.PI/2);
        LlantaTres.applyMatrix(new THREE.Matrix4().makeTranslation(-7,-1,5,0));
        LlantaTres.rotateY(Math.PI/2);
        LlantaCuatro.applyMatrix(new THREE.Matrix4().makeTranslation(-7,-1,-5,0));
        LlantaCuatro.rotateY(Math.PI/2);
  //centro
  var Inferio = Chasis().clone();
  //mostrar/Mostrar
        //var geometry_PuntoCentro = new THREE.SphereGeometry( 0.1, 32, 32 );
       // var PuntoCentral = new THREE.Mesh(geometry_PuntoCentro,material_Negro);
        PuntoCentraLFILAL3D.applyMatrix(new THREE.Matrix4().makeTranslation(0,2,0,0));
        PuntoCentraLFILAL3D.add(Carro);
        Carro.add(LlantaUno,LlantaDos);
        Carro.add(LlantaTres,LlantaCuatro);
        PuntoCentraLFILAL3D.add(Inferio);

          //scene.add(LlantaUno,LlantaDos);scene.add(LlantaTres,LlantaCuatro); 
          //scene.add(Carro);
            scene.add(PuntoCentraLFILAL3D);
            //var mostrar = Carrito().clone();
           
          
    

}
function escala(){

    
    var sc = 1;
    if(scaleUp){
        sc = 1.1;
    }
    if(scaleDown){
        sc = .9;
    }
    //MATRIZ DE ESCALA	
		var s = new THREE.Matrix4();
		s.set( 	sc, 0, 0, 0,
				0, sc, 0, 0, 
				0, 0, sc, 0,
				0, 0, 0, 1	);	
				
        cadera.applyMatrix(s);
      
}
function translasar(){
// / Tranlacion
    var dtime = Date.now()-startTime;
        var tx=0, ty=0, tz=0;
            if(Iz) {
                tx=0.1;
            }
           else if(Dr) {
            tx=-0.1;
            } 
            else if(upArrow) {
                ty=0.1;
            }
            else if(downArrow) {
               ty=-0.1; 
            }    

//MATRIZ DE TRASLACIÓN
var t = new THREE.Matrix4();		//Crear la matriz de traslación
t.set( 	1, 0, 0, tx,
        0, 1, 0, ty, 
        0, 0, 1, tz,
        0, 0, 0, 1	);

        PuntoCentraLFILAL3D.applyMatrix(t);
    
}

function TranslacioneCarro(){

    var onKeyDown = function ( event ) {
        switch ( event.keyCode ) {
            case 37: 
                Iz = true;
                break;
            case 39: 
                Dr = true;
                break;
            case 38: // TRASLADAR EN DIRECCION POSITIVA
                upArrow = true;
                break;
            case 40: // TRASLADAR EN DIRECCION NEGATIVA
                downArrow = true;
                break;
            case 83: // Escata ++ s
            scaleUp = true;
            break;
            case 87: // Escalar -- w
            scaleDown = true;
            break;
        }      
    };	  
              
    var onKeyUp = function ( event ) {
        
        switch ( event.keyCode ) {
            case 37:
                Iz = false;
                 break;
                case 39: 
                Dr = false;
                break;
            case 38: // TRASLADAR
                upArrow = false;
                break;
            case 40: // TRASLADAR
                downArrow = false;
                break;
            
            case 83: // ESCALA AGRANDAR
                scaleUp = false;
                break;
            case 87: // ESCALA DISMINUIR
                scaleDown = false;
                break;
        }
    };	  	
    
    document.addEventListener( 'keydown', onKeyDown, false );
    document.addEventListener( 'keyup', onKeyUp, false );

// / Tranlacion
//var dtime = Date.now()-startTime;
var tx=0, ty=0, tz=0;
    if(Iz) {
        tx=0.1;
    }
   else if(Dr) {
    tx=-0.1;
    } 
    else if(upArrow) {
        ty=0.1;
    }
    else if(downArrow) {
       ty=-0.1; 
    }    

//MATRIZ DE TRASLACIÓN
var t = new THREE.Matrix4();		//Crear la matriz de traslación
t.set( 	1, 0, 0, tx,
0, 1, 0, ty, 
0, 0, 1, tz,
0, 0, 0, 1	);

PuntoCentraLFILAL3D.applyMatrix(t);
scene.add(PuntoCentraLFILAL3D);


    
}

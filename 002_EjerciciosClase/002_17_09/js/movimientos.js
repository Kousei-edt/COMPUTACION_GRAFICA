//Programa de movimiento
function mostrar(){

    //EVENTOS DE TECLADO
			//Códigos de teclado: http://keycode.info 
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
            


    var rotationAngles = {
        Cadera: 10.5,
        theta2: 0,
        theta3: 0, 
        colita_angleX :90, colita_angleY :0, colita_angleZ :0, 
        coxisU_angleX :90, coxisU_angleY :0, coxisU_angleZ :0,
        coxisD_angleX :90, coxisD_angleY :0, coxisD_angleZ :0,
        RodillaU_angleX :0, RodillaU_angleY :0, RodillaU_angleZ :0,     
        RodillaD_angleX :0, RodillaD_angleY :0, RodillaD_angleZ :0, 
        Tronc_angleX: 0, Tronc_angleY: 0, Tronc_angleZ: 0,  
        HomU_angleX: 0, HomU_angleY: 0, HomU_angleZ: 0,
        HomD_angleX: 0, HomD_angleY: 0, HomD_angleZ: 0,
        CodU_angleX: 0, CodU_angleY: 0, CodU_angleZ: 0,
        CodD_angleX: 0, CodD_angleY: 0, CodD_angleZ: 0,
        Cab_angleX: 0, Cab_angleY: 0, Cab_angleZ: 0,  
    };
var rotation = function () {
//Rotacion Humanoude 
        angleX = THREE.Math.degToRad(rotationAngles.Cadera);
     
//Cadera
        colita_angleX = THREE.Math.degToRad(rotationAngles.colita_angleX);
        colita_angleY = THREE.Math.degToRad(rotationAngles.colita_angleY);
        colita_angleZ = THREE.Math.degToRad(rotationAngles.colita_angleZ);
        coxisU_angleX = THREE.Math.degToRad(rotationAngles.coxisU_angleX);
        coxisU_angleY = THREE.Math.degToRad(rotationAngles.coxisU_angleY);
        coxisU_angleZ = THREE.Math.degToRad(rotationAngles.coxisU_angleZ);
        coxisD_angleX = THREE.Math.degToRad(rotationAngles.coxisD_angleX);
        coxisD_angleY = THREE.Math.degToRad(rotationAngles.coxisD_angleY);
        coxisD_angleZ = THREE.Math.degToRad(rotationAngles.coxisD_angleZ);
//Rodilla
        RodillaU_angleX = THREE.Math.degToRad(rotationAngles.RodillaU_angleX);
        RodillaD_angleX = THREE.Math.degToRad(rotationAngles.RodillaD_angleX);
//Tronco
        Tronc_angleX = THREE.Math.degToRad(rotationAngles.Tronc_angleX);
        Tronc_angleY = THREE.Math.degToRad(rotationAngles.Tronc_angleY);
//Brazos
        HomU_angleX = THREE.Math.degToRad(rotationAngles.HomU_angleX);
        HomU_angleY = THREE.Math.degToRad(rotationAngles.HomU_angleY);
       // HomU_angleZ = THREE.Math.degToRad(rotationAngles.HomU_angleZ);

        HomD_angleX = THREE.Math.degToRad(rotationAngles.HomD_angleX);
        HomD_angleY = THREE.Math.degToRad(rotationAngles.HomD_angleY);
       // HomD_angleZ = THREE.Math.degToRad(rotationAngles.HomD_angleZ);
//Codos
        CodU_angleX = THREE.Math.degToRad(rotationAngles.CodU_angleX);
        CodU_angleY = THREE.Math.degToRad(rotationAngles.CodU_angleY);
        // CodU_angleZ = THREE.Math.degToRad(rotationAngles.CodU_angleZ);

        CodD_angleX = THREE.Math.degToRad(rotationAngles.CodD_angleX);
        CodD_angleY = THREE.Math.degToRad(rotationAngles.CodD_angleY);
        // CodD_angleZ = THREE.Math.degToRad(rotationAngles.CodD_angleZ); 
// Cabeza
        Cab_angleX = THREE.Math.degToRad(rotationAngles.Cab_angleX);
        Cab_angleY = THREE.Math.degToRad(rotationAngles.Cab_angleY);
        //Cab_angleZ = THREE.Math.degToRad(rotationAngles.Cab_angleZ);   
    };

// Crear menu  "var colota = new dat.GUI();" 
    var gui = new dat.GUI();
    gui.add(rotationAngles, "Cadera", -180, 180, .1).onChange(rotation).name('Rotacion H').listen();  
 
   
    var colota = gui.addFolder('Cadera');
   colota.add(rotationAngles,"colita_angleX",-85,90,1).onChange(rotation).name('Cadera X').listen();
   colota.add(rotationAngles,"colita_angleY",-40,40,1).onChange(rotation).name('Cadera Y').listen();
   colota.add(rotationAngles,"colita_angleZ",-25,25,1).onChange(rotation).name('Cadera Z').listen();
   colota.add(rotationAngles,"coxisU_angleX",-2,160,1).onChange(rotation).name('Coxis I X').listen();
   colota.add(rotationAngles,"coxisU_angleY",-45,45,1).onChange(rotation).name('Coxis I Y').listen();
   colota.add(rotationAngles,"coxisU_angleZ",-0,360,1).onChange(rotation).name('Coxis I Z').listen();
   colota.add(rotationAngles,"coxisD_angleX",-2,160,1).onChange(rotation).name('Coxis D X').listen();
   colota.add(rotationAngles,"coxisD_angleY",-45,45,1).onChange(rotation).name('Coxis D Y').listen();
   colota.add(rotationAngles,"coxisD_angleZ",-0,360,1).onChange(rotation).name('Coxis D Z').listen();
   
   var Rodi = gui.addFolder('Rodillas');
   Rodi.add(rotationAngles,"RodillaU_angleX",-0,145,1).onChange(rotation).name('Rodilla D X');
   Rodi.add(rotationAngles,"RodillaD_angleX",-0,145,1).onChange(rotation).name('Rodilla I X');

   var Tron = gui.addFolder('Tronco');
   Tron.add(rotationAngles,"Tronc_angleX",-15,120,1).onChange(rotation).name('Tronco X').listen();
   Tron.add(rotationAngles,"Tronc_angleY",-25,30,1).onChange(rotation).name('Tronco Y').listen();

   var Ho = gui.addFolder('Brazos');
   Ho.add(rotationAngles,"HomU_angleX",-180,80,1).onChange(rotation).name('Hombro I X');
   Ho.add(rotationAngles,"HomU_angleY",-90,50,1).onChange(rotation).name('Hombro I Y');
  // Ho.add(rotationAngles,"HomU_angleZ",-90,50,1).onChange(rotation).name('Hombro I Z');

   Ho.add(rotationAngles,"HomD_angleX",-180,80,1).onChange(rotation).name('Hombro D X');
   Ho.add(rotationAngles,"HomD_angleY",-90,50,1).onChange(rotation).name('Hombro D Y');
 //  Ho.add(rotationAngles,"HomD_angleZ",-90,50,1).onChange(rotation).name('Hombro D Z');

 //CODOS
    Ho.add(rotationAngles,"CodU_angleX",-150,0,1).onChange(rotation).name('Codo I X');
    Ho.add(rotationAngles,"CodU_angleY",-50,90,1).onChange(rotation).name('Codo I Y');
    // Ho.add(rotationAngles,"CodU_angleZ",-90,50,1).onChange(rotation).name('Codo I Z');

    Ho.add(rotationAngles,"CodD_angleX",-150,0,1).onChange(rotation).name('Codo D X');
    Ho.add(rotationAngles,"CodD_angleY",-90,50,1).onChange(rotation).name('Codo D Y');
    //  Ho.add(rotationAngles,"CodD_angleZ",-90,50,1).onChange(rotation).name('Codo D Z');
//Cabeza
    var cb = gui.addFolder('Cabeza');
    cb.add(rotationAngles,"Cab_angleX",-150,0,1).onChange(rotation).name('Cabeza D X');
    cb.add(rotationAngles,"Cab_angleY",-90,90,1).onChange(rotation).name('Cabeza D Y');
    //cb.add(rotationAngles,"Cab_angleZ",-90,50,1).onChange(rotation).name('Cabeza D Z');  
    

    rotation();
   
    camera.lookAt(origin);


    };

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

  cadera.applyMatrix(t);
    
}



function render(){
    var dtime = Date.now()-startTime;
   // camera.position.x = 10*Math.cos(dtime/1000);
    //camera.position.z = 10*Math.sin(dtime/10000);
     translasar();
    // escala();
    
//Cuerpo
var eulerRot = new THREE.Euler(0, angleX, 0, 'YZX');
cadera.setRotationFromEuler(eulerRot);
//Cadera x,y,z
var eulerRotPf= new THREE.Euler(colita_angleX,colita_angleY ,colita_angleZ, 'YZX');
    cola.setRotationFromEuler(eulerRotPf);
//Coxis uno - DOS 
var eulerRotCoxU = new THREE.Euler(coxisU_angleX,coxisU_angleY,coxisU_angleZ,'YZX');
    coxis1.setRotationFromEuler(eulerRotCoxU);
var eulerRotCoxD = new THREE.Euler(coxisD_angleX,coxisD_angleY,coxisD_angleZ,'YZX');
    coxis2.setRotationFromEuler(eulerRotCoxD);
//Rodillas
var eulerRotR1 = new THREE.Euler(RodillaU_angleX,0,0,'YZX');
    Rodilla1.setRotationFromEuler(eulerRotR1);
var eulerRotR2 = new THREE.Euler(RodillaD_angleX,0,0,'YZX');
    Rodilla2.setRotationFromEuler(eulerRotR2);
// Tronco
var eulerRotRON = new THREE.Euler(Tronc_angleX,Tronc_angleY,0,'YZX');
    tronco.setRotationFromEuler(eulerRotRON);
// Brazos
var eulerRoH1 = new THREE.Euler(HomU_angleX,HomU_angleY,HomU_angleZ,'YZX');
    hombro1.setRotationFromEuler(eulerRoH1);

var eulerRoH2 = new THREE.Euler(HomD_angleX,HomD_angleY,HomD_angleZ,'YZX');
    hombro2.setRotationFromEuler(eulerRoH2);

// Codos
var eulerRoC1 = new THREE.Euler(CodU_angleX,CodU_angleY,CodU_angleZ,'YZX');
    codo1.setRotationFromEuler(eulerRoC1);

var eulerRoC2 = new THREE.Euler(CodD_angleX,CodD_angleY,CodD_angleZ,'YZX');
    codo2.setRotationFromEuler(eulerRoC2);

//Cabeza
var eulerRoCz = new THREE.Euler(Cab_angleX,Cab_angleY,0,'YZX');
    cabeza.setRotationFromEuler(eulerRoCz);
  
    camera.lookAt( 0, 5, 0 );   
    renderer.render( scene, camera );
    }

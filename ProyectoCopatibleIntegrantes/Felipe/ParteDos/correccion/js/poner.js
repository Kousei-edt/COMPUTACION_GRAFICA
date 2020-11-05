
		    var mouse, raycaster, isShiftDown = false,block1 = false,block2 = false;
            var block3=false,block4=false;
            var cuadrado;
			var rollOverMesh, rollOverMaterial;
			var cubeGeo;
            var cubeMaterial1 = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/block.png' ),opacity: 1 } );
            var cubeMaterial2 = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/roca.png' ),opacity: 1 } );
            var cubeMaterial3 = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/diamante.png' ),opacity: 1 } );
            var cubeMaterial4 = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imagenes bloques/l.jpg' ),opacity: 1 } );

            var plane;
              
			var objects = [];

 			function Bloques(){
				
				var gridHelper = new THREE.GridHelper( 1000, 500);
				scene.add( gridHelper );

				raycaster = new THREE.Raycaster();
                
				mouse = new THREE.Vector2();

				var geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
				geometry.rotateX( - Math.PI / 2 );

				plane = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { visible: false } ) );
				scene.add( plane );

				objects.push( plane );

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'keypress', onDocumentKeyPress, false );
			   
	
            Voxel();
			
		

			function onDocumentMouseMove( event ) {

				event.preventDefault();

				mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );

				raycaster.setFromCamera( mouse, camera );
				

				var intersects = raycaster.intersectObjects( objects );

				if ( intersects.length > 0 ) {

					var intersect = intersects[ 0 ];

					rollOverMesh.position.copy( intersect.point ).add( intersect.face.normal );
					rollOverMesh.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );

				}

				render();

			}

			function onDocumentMouseDown( event ) {

				event.preventDefault();

				mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );

				raycaster.setFromCamera( mouse, camera );
				

				var intersects = raycaster.intersectObjects( objects );

				if ( intersects.length > 0 ) {

					var intersect = intersects[ 0 ];

					// delete cube

					if ( isShiftDown ) {

						if ( intersect.object !== plane ) {

							scene.remove( intersect.object );

							objects.splice( objects.indexOf( intersect.object ), 1 );

						}

					}  
                else {
						
					 if(block1){
                       
                            
                         cuadrado = document.getElementById("barrera");
                         cuadrado.style.left="500"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial2 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1);
						scene.add( voxel );
						objects.push( voxel );
                        }
                        if(block2) {
                         
                    
                        
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial1 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 ); 
                        cuadrado  = document.getElementById("barrera");
                        cuadrado.style.left="550"+"px";
						scene.add( voxel );
						objects.push( voxel );
		                }
                    
                        if(block3){
                     
                         cuadrado = document.getElementById("barrera");
                         cuadrado.style.left="600"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial3 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );
						scene.add( voxel );
						objects.push( voxel );                         
                        }
				        
						 if(block4){
                        
                        cuadrado = document.getElementById("barrera");
                        cuadrado.style.left="650"+"px"; 
                         
                        var voxel = new THREE.Mesh( cubeGeo, cubeMaterial4 );
						voxel.position.copy( intersect.point ).add( intersect.face.normal );
				        voxel.position.divideScalar( 2 ).floor().multiplyScalar( 2 ).addScalar( 1 );
						scene.add( voxel );
						objects.push( voxel );
                        }
                }
					

					render();
				}

			}

			function onDocumentKeyPress( event ) {

				switch ( event.keyCode ) {
					case 16: isShiftDown = true; break;
                    case 49 : 
                        block1 = true; 
                        block2 = false;
                        block3 = false;
                        block4 = false;
                        break; 
                    case 50 : 
                        block2 = true;
                        block1 = false;
                        block3 = false;
                        block4 = false;
                        break; 
                    case 51 : 
                        block3 = true; 
                        block1 = false;
                        block2 = false;
                        block4 = false;
                        
                        break;
                    case 52 : 
                        block4 = true;
                        block1 = false;
                        block2 = false;
                        block3 = false;
                        
                        break;
				}
			}

		
			
			function Voxel(){
		        var rollOverGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
				rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, opacity: 0.2, transparent: true } );
				rollOverMesh = new THREE.Mesh( rollOverGeo, rollOverMaterial );
				scene.add( rollOverMesh );
				cubeGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
			}
}
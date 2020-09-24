
function trianguloDos (nx,ny,nz){
    var geoTrianguloD = new THREE.Geometry();
    //vertices
    var Dv1 = new THREE.Vector3(0,0,0);  
    var Dv2 = new THREE.Vector3(4,0,0);
    var Dv3 = new THREE.Vector3(4,0,4);
    var Dv4 = new THREE.Vector3(0,0,4);
    var Dv5 = new THREE.Vector3(2,4,2);
       geoTrianguloD.vertices.push(Dv1);
       geoTrianguloD.vertices.push(Dv2);
       geoTrianguloD.vertices.push(Dv3);
       geoTrianguloD.vertices.push(Dv4);
       geoTrianguloD.vertices.push(Dv5);
       //Caras	
   geoTrianguloD.faces.push(new THREE.Face3(0,4,1));
   geoTrianguloD.faces.push(new THREE.Face3(1,4,2));
   geoTrianguloD.faces.push(new THREE.Face3(2,4,3)); 
   geoTrianguloD.faces.push(new THREE.Face3(3,4,0)); 
   geoTrianguloD.faces.push(new THREE.Face3(0,1,2));  
   geoTrianguloD.faces.push(new THREE.Face3(0,2,3)); 

   geoTrianguloD.computeFaceNormals();

   var matPlanod = new THREE.MeshBasicMaterial ();
   var triangulod = new THREE.Mesh(geoTrianguloD,matPlanod);
   triangulod.applyMatrix(new THREE.Matrix4().makeTranslation(nx,ny,nz));
   scene.add(triangulod);
}

function render(){
    
    var dtime = Date.now()-startTime;
		var tx=0, ty=0, tz=0;	//Variables para traslacion
		var sc = 1;				//Variable para escala
		var theta=0;			//Variable para ángulo de rotacion de piernas
        var sigma=0;	
        
       if (thetaSum>60*Math.PI/180) {
           positivo = false;
       }
       if (thetaSum<=-60*Math.PI/180) {
           positivo = true;
       }
       if (upArrow) {
        tx=0; ty=0; tz=-.1;
        if(positivo)
            theta = .1;
        else
            theta = -.1;
       }
       thetaSum+= theta;
       if (rightArrow) {
           sigma = -0.1;
       }
       if (leftArrow) {
           sigma=.1;
       }
    
//Matriz de traslacion
       var t = new THREE.Matrix4();
       t.set(
           1,0,0,tx,
           0,1,0,ty,
           0,0,1,tz,
           0,0,0,1);
       cola.matrix.multiply(t);    
// Rotacion 
        var ct1 = Math.cos(theta);
        var ct2 = Math.cos(-theta);
        var cs  = Math.cos(sigma);
        var st1 = Math.sin(theta);
        var st2 = Math.sin(-theta);
        var ss  = Math.sin(sigma);
        var r   = new THREE.Matrix4;
        var r1  = new THREE.Matrix4;
        var r2  = new THREE.Matrix4;
// Matriz de rotacion en eje Y
        r.set(
            cs,0,sc,0,
            0 ,1,0,0,
           -sc,0,cs,0,
           0  ,0,0,1 );
// Matriz de  rotacion el el eje locar de pierna
        r1.set(1,0,0,0,
            0, ct1,-st1, 0, 
            0, st1, ct1, 0,
            0,  0,  0, 1 );
            r2.set(
                1,  0,  0, 0,
                0, ct2,-st2, 0, 
                0, st2, ct2, 0,
                0,  0,  0, 1 );	
// Rotacion den el paralelo 
       /*     var tempMatrix = new THREE.Matrix4();
            tempMatrix.copyPosition(cola.matrix);
            cola.applyMatrix(new THREE.Matrix4().getInverse(tempMatrix));
            cola.applyMatrix(r);
            cola.applyMatrix(tempMatrix);*/




    var dtime = Date.now()-startTime;
    //camera.position.x = 10*Math.cos(dtime/10000);
    //camera.position.z = 10*Math.sin(dtime/10000);
    camera.lookAt( 0, 0, 0 );
    renderer.render( scene, camera );
    
}


//render
Render = new THREE.WebGLRenderer();
Render.setSize(1800,720);

//Color 
Render.setClearColor(0x00BDFF,1);

//document.getElementById('render').appendChild(Render);
document.body.appendChild(Render.domElement);


// Esenario 
Esenario = new  THREE.Scene(); 
                         
// Camara 
Camara = new THREE.PerspectiveCamera();
Camara.position.z=10;
//Camara.position.x=1;
//Camara.position.y=1;
Esenario.add(Camara);
                         

//Cubo
var geometricacubo = new THREE.Geometry();
var Cantidad = 5;
for (var i = 0; i < Cantidad; i++) {
for (var j = 0; j < Cantidad; j++) {
for (var c = 0; c < Cantidad; c++) {
	var Cordenada = new THREE.Vector3();
		Cordenada.x = (j*2)/Cantidad;
		Cordenada.y = (i*0.5)/Cantidad;
		Cordenada.z = (c*2)/Cantidad;
	geometricacubo.vertices.push(Cordenada);
		}	
	}
}
//Cilindro
var geomeCilindro = new THREE.Geometry();
var res  = 25.0;
var res2 = 40.0;
for (var i = 0;i<res;i++) {
    for (var j = 0; j<res2;j++) {
        var punto = new THREE.Vector3();
        punto.x = (8/res2)*Math.cos((j*2*Math.PI)/res2);
        punto.y = (8/res2)*Math.sin((j*2*Math.PI)/res2);
        punto.z = 4*1/res2;
        geomeCilindro.vertices.push(punto);
        
    }
    
}

// Agregamos un material para que el punto tenga color
Material=new THREE.ParticleBasicMaterial({color: 0x00ff00 });
MaterialDos = new THREE.ParticleBasicMaterial({color: 0xFF0064});
//Creamos una particula con la geometria y el material 
Figura = new THREE.Line(geometricacubo,Material);
FiguraDos = new THREE.Line(geomeCilindro,MaterialDos);
//Agregamos la particula al escenario 
Esenario.add(Figura);
Esenario.add(FiguraDos);
Render.render(Esenario,Camara);
//Fondo de color 

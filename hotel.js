function habitacion(id,m2,libre) {
    this.id=id;
    this.m2=m2;
    this.libre=libre;
    
    //funciones clase habitacion
    
    function consultar() {
        if(this.libre==true) {
            alert("Habitación "+this.id+ " está libre");
        } else {
            alert("Habitación " +this.id+ " está ocupada");
        }
    }
    this.consultar=consultar;
    
    //Marca la habitación como ocupada
    
    function ocupar() {
        this.libre=false;
    }
    this.ocupar=ocupar;
    
    //Marca la habitación como libre
    function liberar() {
        this.libre=true;
    }
    this.liberar=liberar;
}

//Clase hotel

function hotel(nombre,nhab) {
    this.nombre=nombre;
    this.nhab=nhab;
    
    //se guarda array de habitaciones
    
    this.arrayHabs=new Array();
    
    //Definición y asignación de métodos de la clase
    
    //Marca la habitación recibida como parametro como ocupada
    
    function ocuparHab(n) {
        this.arrayHabs[n].ocupar();
    }
    this.ocuparHab=ocuparHab;
    
    function liberarHab(n) {
        this.arrayHabs[n].liberar();
    }
    this.liberarHab=liberarHab;
    
    function consultarHab(n) {
        this.arrayHabs[n].consultar();
    }
    
    this.consultarHab=consultarHab;
    
    //Codigo inicializador del hotel
    
    for(i=0;i<nhab;i++) {
        this.arrayHabs[i]= new habitacion(i,30,true);
    }
}

//Funcion para crear un hotel

function crearHotel() {
    var nombre=document.getElementById("nombreHotel").value;
    var habitaciones=parseInt(document.getElementById("numeroHab").value);
    //Recupero array de hoteles con localStorage
    var arrayHotelesJSON= localStorage.getItem("arrayHoteles");
    var arrayHoteles=JSON.parse(arrayHotelesJSON);
    
    //Si está vacío creamos el array
    
    if(arrayHoteles==null) {
        arrayHoteles=new Array();
    }
    
    var h=new hotel(nombre,habitaciones) 
        //añadimos al final del array y guardamos
        arrayHoteles.push(h);
        
        localStorage.setItem("arrayHoteles",JSON.stringify(arrayHoteles));
        
        //Añadido el hotel recargamos
        
        recargarMuestraHoteles();
        
    }
    
    function recargarMuestraHoteles() {
        var i;
        //Recupero array de hoteles con localStorage
        var arrayHotelesJSON= localStorage.getItem("arrayHoteles");
        var arrayHoteles=JSON.parse(arrayHotelesJSON);
        
        var divHoteles=document.getElementById("divHoteles");
        //Vaciamos divHoteles
        divHoteles.innerHTML="";
        
        if(arrayHoteles==null) {
            return;
        }
        
        //añadimos un P por cada hotel
        
        for(i=0;i<arrayHoteles.length;i++) {
            divHoteles.innerHTML+="<p>Nombre: "+ arrayHoteles[i].nombre+" Habitaciones: "+arrayHoteles[i].nhab+"</p>";
        }
        
    }
    
    function eliminar() {
        localStorage.removeItem("arrayHoteles");
        recargarMuestraHoteles();
    }
    
    //Asociamos los eventos a las funciones
    
    window.onload=function() {
        var bA=document.getElementById("botonAnyadir");
        var bE=document.getElementById("botonEliminar");
        
        bA.onclick=crearHotel;
        bE.onclick=eliminar;
        
        //Al cargar la página, recargamos los hoteles que estuvieran en localStorage
        
        recargarMuestraHoteles();
    }


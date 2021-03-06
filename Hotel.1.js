//Definimos la clase habitación

function habitacion(id,m2,libre) {
    //Atributos clase habitación
    this.id=id;
    this.m2=m2;
    this.libre=libre;

    //Funciones clase habitacion

    function consultar() {
        if(this.libre==true) {
            alert("Habitacion "+this.id+" esta libre");
        } else {
            alert("Habitacion "+this.id+" esta ocupada");
        }
    }
    this.consultar=consultar;

    //Marca la habitacoin como ocupada

    function ocupar() {

        this.libre=false;

    }
    this.ocupar=ocupar;

    //Marca la habitacion como libre

    function liberar() {
        this.libre=true;
    }
    this.liberar=true;
}

//Definimos la clase Hotel

function hotel(nombre,nhab) {
    //Atributos del hotel

    this.nombre=nombre;
    this.nhab=nhab;

    //Aqui guardaremos Array de habitaciones;

    this.arrayHabs=new Array();

    //Definicion y asignacion de metodos de la clase

    //Marca la habitacion recibida como parametro como ocupada

    function ocuparHab(n) {
        this.arrayHabs[n].ocupar();
    }
    this.ocuparHab=ocupar();

    //Marca la habitación recibida como parametro como libre

    function liberarHab(n) {
        this.arrayHabs[n].liberar();

    }
    this.liberarHab=liberarHab;

    function consultarHab(n) {
        this.arrayHabs[n].consultar();
    }

    this.consultarHab=consultarHab;

    //Codigo inicializador del hotel
    for (i=0;i<nhab;i++) {
        //Creamos habitacinoes con id i , 30 m2 y libres
        this.arrayHabs[i]= new habitacion(i,30,true);
    }

}

//Creo un hotel

var miHotel=new hotel("CEED House",20);

//Ocupo 2 habitaciones

miHotel.ocuparHab(1);
miHotel.ocuparHab(2);

//consulto

miHotel.consultarHab(1);
miHotel.consultarHab(2);

//Libero la primera

miHotel.liberarHab(1);

//consulto

miHotel.consultarHab(1);
miHotel.consultarHab(2);



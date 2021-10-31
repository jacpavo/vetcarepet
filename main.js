// Boton Guardar
function save() {
    function PacienteX(name,age,race,family){
        this.name=name;
        this.age=age;
        this.race=race;
        this.family=family;
    }
    var nameSave = document.getElementById("name").value;
    var ageSave = document.getElementById("age").value;
    var raceSave = document.getElementById("race").value;
    var familySave = document.getElementById("family").value;
    
    nuevoPaciente = new PacienteX(nameSave,ageSave,raceSave,familySave);
    console.log(nuevoPaciente);
    agregar();
}
var baseDatos=[];
function agregar(){
    baseDatos.push(nuevoPaciente);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoPaciente.name+'</td><td>'+nuevoPaciente.age+'</td><td>'+nuevoPaciente.race+'</td><td>'+nuevoPaciente.family+'</td></tbody>';
};
// Objeto
class Paciente {

    constructor (nombre, edad, raza, familia) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.familia = familia;
    }
    estado() { console.log ("Paciente " + this.nombre + " edad " + this.edad + " de raza " + this.raza + " familia " + this.familia) }
}

const animal1 = new Paciente ("Firulais", 12, "Gran Danes", "Canino");
const animal2 = new Paciente ("Molly", 1, "Siames", "Felino");
const animal3 = new Paciente ("Porky", 2, "vietnamita", "Porcino")

console.log("Desea ver que pacientes han sido atendidos?")
animal1.estado();
animal2.estado();
animal3.estado();

//JSON
arrayPacientes = [animal1, animal2, animal3];

sessionStorage.setItem('paciente1', [ "Firulais", 12, "Gran Danes", "Canino"]);
sessionStorage.setItem('paciente2', ["Molly", 1, "Siames", "Felino"]);
sessionStorage.setItem('paciente3', ["Porky", 2, "Vietnamita", "Porcino"]);

const animalJSON = JSON.stringify(arrayPacientes);

sessionStorage.setItem(arrayPacientes, animalJSON);

console.log(animalJSON);
console.log(typeof animalJSON);

// AJAX

const url = "http://127.0.0.1:5500/Proyecto%2003/animales.json"

$('#btn1').click(()=>{

    $.get(url, function(respuesta, estado){
        console.log(respuesta);
        console.log(estado);
    });
});



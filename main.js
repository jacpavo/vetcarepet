// Boton Guardar
function save() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var race = document.getElementById("race").value;
    var family = document.getElementById("family").value;
    
    nuevoPaciente = new Paciente(name,age,race,family)
    console.log(nuevoPaciente);
    agregar();
}
var baseDatos=[];
function agregar(){
    baseDatos.push(nuenoPaciente);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += "<tbody><td>"+nuevoPaciente.name+"</td><td>"+nuevoPaciente.age+"</td><td>"+nuevoPaciente.race+"</td><td>"+nuevoPaciente.family+"</td></tbody>";
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

const url = "https://github.com/jacpavo/vetcarepet/blob/master/animales.json"

$('#btn1').click(()=>{

    $.get(url, function(respuesta, estado){
        console.log(respuesta);
        console.log(estado);
    });
});





/* Boton Guardar
var nombrePaciente = document.getElementById('name').value = "Nombre";
var edadPaciente = document.getElementById('age').value = 0;
var razaPaciente = document.getElementById('race').value = "Raza";
var familiaPaciente = document.getElementById('family').value = "Familia";


let guardarPaciente = nombrePaciente + edadPaciente + razaPaciente + familiaPaciente;

let guardar = document.getElementById("btnsave");

guardar.addEventListener("click", PacienteGuardado);


function PacienteGuardado() {
    guardarPaciente += 1;
    console.log ("Paciente Guardado" + guardarPaciente);
}

//Funcion crear paciente
function crearPaciente() {
    let nombre = prompt("Ingresa Nombre");
    let edad = parseInt(prompt("Ingresa Edad"));
    let raza = prompt("Ingresa Raza");
    let familia = prompt ("Ingresa familia");
    paciente.push(new Paciente(nombre, edad, raza, familia));
}

//Funciones
function comenzar() {
    window.onload = () => cargarPaciente();
}

//Constructor
function Paciente (nombre, edad, raza, familia) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.familia = familia;
}

//Cargar Paciente
function cargarPaciente() {
    let op = 0;
    paciente.forEach(paciente =>{
        const nuevoPaciente = document.creatElement("opcion");
        nuevoPaciente.setAtribute('value', `${op}`)
        nuevoPaciente.innerText = `${paciente.nombre}`;
        seleccionPaciente.appendChild(nuevoPaciente);
        op += 1; 
    })         
}


// Ficha Paciente
const llenarFichaPaciente = () => {
    selector = seleccionPaciente.value;
    nombrePaciente.innerText = `Nombre: ${paciente[selector].nombre}`;
    edadPaciente.innerText = `Edad: ${paciente[selector].edad}`;
    razaPaciente.innerText = `Raza: ${paciente[selector].raza}`;
    familiaPaciente.innerText = `Familia: ${paciente[selector].familia}`;
}
*/

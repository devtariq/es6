//Learning ES6



const name = 'Karib';
//name = 39;
//alert(name);

//let

if(true){
   // var firstName = 'Imran';
    let firstName = 'Imran';
        firstName = 'Manik';
    //alert(firstName);
}

//Template String
/*let first_name = "Bipasha";
let last_Name = 'Boshu';
let age = prompt("Guess Bipasa's age..");

//old way
//let result = first_name + ' ' + last_Name + ' | ' + age + ' years old';
//alert(result);

//Using Template string

let result = `${first_name} ${last_Name} is ${age} year's old girl.`;
alert(result);


//Default Parameter

function welcome(user="Masud ALam", message= 'Softwe') {
    alert(`Hi ${user}, ${message}`);
}

welcome();


// Arrow Function

let greetings = message => console.log(`${message} is not complex in arrow function!`);

greetings('Funny moment');


let createBlog = (title,body) => {
    if(! title){
        throw  new Error('A title is required');
    }
    if(! body){
        throw new Error('nothing in body');
    }

    return alert(`This is ${title} and this is ${body}`);
}

createBlog('Subject','Learn ES6');




let someOneLine = (man) => alert(`Jakir ${man} He is here`);
someOneLine('Man knwe skewoe');


let CountTicker = (title,body) => {
    if(!title){
        throw new Error('A title is required');
    }
    if(! body   ){
        throw new Error('A body is required');
    }

    return console.log(`${title} is heading and counter body is paragraph - ${body}`);
}

CountTicker('Coutner title','Counter Body');

let Nepal = {
    //
    mountains: ['Everest','Fish hill','Annupurna'],

    nepalMountains: function(){
        //console.log('Inside nepalMountains',this);

        setTimeout( () =>console.log(this.mountains.join(' - ')) ,300 );

    },
};

Nepal.nepalMountains();

let TodoThings = {
    morning : "excercise",
    afternoon: 'Work',
    evening: 'read',
    night: ['sleep','dream']

}

let {morning, afternoon, night} = TodoThings;
console.log(morning , '+' ,  afternoon, night );

let dailyRoutine ={
    sokal: 'Ghum theke Uta',
    dupur : 'Back to School',
    bikel : 'Go to Play Cricket',
    rat: 'Porasuna and Ghum'

}

let{sokal,rat} = dailyRoutine;
console.log(sokal, 'O', rat);


let uniStudent = ({name, university}) => {

    console.log(`${name} from ${university}`);
}

uniStudent({
    name: "Tariqul Ilama",
    university: "Dhaka University"
});

let [, , firstMountain] = ['everest','alps','sahara'];
console.log(firstMountain);


var aboutEverest = {
   name11:  'Evarest',
    height:  24454,
    output (){
        console.log(`Mount  ${this.name11} height is ${this.height}` );
    }
}
aboutEverest.output();

var mountain_bd,mountain_nepal,mountain_japan, allMountains;

mountain_bd = ['Chimbuk','Meghalay'];
mountain_nepal = ['Everest','Annupurna'];
mountain_japan = ['Fuji'];

allMountains = [...  mountain_bd, ... mountain_nepal, ... mountain_japan];
console.log(allMountains);
 */

class Holyday {
    constructor(destination,days){
        this.destination = destination;
        this.days = days;
    }

    tourInfo(){
        console.log(`${this.destination} will take ${this.days} days. `);
    }
}

const trip = new Holyday("Bangladeshi, Coxes[bakeze]",30);

console.log(trip.tourInfo());


// STEP 1

function Cat() {console.log(`The new cat has been created!`);} 	

const Dog = function() {console.log(`The new dog has been created!`);}

// STEP 2

const cat1 = new Cat(); 

const dog1 = new Dog(); 

// STEP 3

class Animal {
	constructor() {
		console.log(`The new Animal has been created!`);
	}
}
const animal1 = new Animal(); 


// STEP 4

class Animal_Step4 {
	constructor(name) {
        this._name = name;
        console.log(`${this._name} the has been created.`);
	}
}
const animal1 = new Animal_Step4('dog'); 


// STEP 5

class animal_Step5 {
        constructor(type, breed, color, height,lenght) {
             this._type = name;
             this._breed = breed;
             this._color = color;
             this._height = height;
             this._lenght = lenght;
            
         }
}

const animal1 = new Animal_Step5('dog','Aussie', 'white', '2', '4'); 

// STEP 6

class animal_Step6 {
    constructor(type, breed, color, height,lenght) {
         this._type = type;
         this._breed = breed;
         this._color = color;
         this._height = height;
         this._lenght = lenght;
    }     
    
}

const object =  new animal_Step6('dog','Aussie', 'white', '2', '4');

 
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }


// STEP 7

class animal_Step7 {
    constructor(type, breed, color, height,lenght) {
         this._type = type;
         this._breed = breed;
         this._color = color;
         this._height = height;
         this._lenght = lenght;
    } 
    
    speak = function () {
        if ( this._type == 'dog'){
            console.log(`The ${this._color} dog is barking`);
        }
        else if (this._type == 'cat' ) {
            console.log(`The ${this._color} cat is mewoing`);

        }
    }
    
}

const dog = new animal_Step7('dog', 'Aussie', 'red','2',  '4'  );
dog.speak() 

const cat = new animal_Step7('cat',  'Bengal', 'Snow Mink', '1',  '2');
cat.speak() 

// STEP 8

class animal_Step8 {
    constructor(type, breed, color, height,lenght) {
         var _type = type;
         var _breed = breed;
         var _color = color;
         var _height = height;
         var _lenght = lenght;
    

    let checkType = function (){
         if ( _type == 'dog'){
             return 'dog';
         }
         else {
             return 'cat';
         }
     }

    this.speak = function () {
         console.log(`The `+ checkType() +` has made noise`);
     }

    }
}

var dog_8 = new animal_Step8('dog', 'Aussie', 'gray','2',  '4'  );
dog_8.speak();
var cat_8 = new animal_Step8('cat',  'Bengal', 'Snow Mink', '1',  '2' );
cat_8.speak();


// STEP 9

String.prototype.findWords = function(aWord) {
   var regEx = new RegExp("\\b"+aWord+"\\b",'g');
   return ( this.match(regEx) || []).length;
}

var para = new String("This is a test paragraph");
console.log(para.findWords('is'));




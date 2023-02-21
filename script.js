// Question No-1

class movie{
    name = '';
    type = '';
    rating = '';

    constructor(name,type, rating ){
        this.name = name;
        this.type = type;
        this.rating = rating;

    }
  res=()=>{
    console.log(`Movie name is ${this.name}. It is a ${this.type} flim. The rating of the movie is ${this.rating} `)

  }

}
var flim = new movie('evil dead', 'horror',4.5)
console.log(flim.res())

// output- Movie name is evil dead. It is a horror flim. The rating of the movie is 4.5.

//--------------------------------------------------------------------------------------------------------------

// Queston No-2:

 class circle{
   r = '';
   constructor(r){
this.r = r;
   }

  cal=()=>{
console.log('Area of the circle is ' + Math.round(Math.PI* parseInt(this.r)**2))
console.log('Circumfrence of the circle is ' + Math.round( 2 * Math.PI * parseInt(this.r)))

   }
 }

var res = new circle('5')
console.log(res.cal())

// output - Area of the circle is 79
//          Circumfrence of the circle is 31


//--------------------------------------------------------------------------------------------------------------

// Question No-3  Write a “person” class to hold all the details.


class person{
    name = '';
    age = '';
    gender = '';
    native = '';
    isAlive = '';
    profession = '';
    salary = '';
    interest = '';


    constructor(name,age,gender,native,isAlive,profession,salary,interest){
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.native = native;
            this.isAlive = isAlive;
            this.profession = profession;
            this.salary =salary;
            this.interest = interest ;
    }
    greeting =function greet(){

console.log(`hi i am ${this.name} from ${this.native}.  my age is ${this.age}.   my profession is 
${this.profession} and my salaryis ${this.salary}. i spend most of times in ${this.interest}`)

    }

}

 let details= new person('karthick','30','male','madurai','true','developer','35000','travelling')

 console.log(details.greeting())

// out put - hi i am karthick from madurai.  my age is 30.   my profession is developer and my salaryis 35000. i spend most of times in travelling


//--------------------------------------------------------------------------------------------------------------


//Question No-4 write a class to calculate the uber price.

class amount{
   
     constructor(distance,price){
        this.distance = distance;
        this.price=price
     }
     
eveluation(){
    
    console.log(' your travelling charge is Rs.' + parseInt(this.distance) * parseInt(this.price))
}
}
var earn = new amount(8,50)

console.log(earn.eveluation())

 //output - 400

 
//--------------------------------------------------------------------------------------------------------------
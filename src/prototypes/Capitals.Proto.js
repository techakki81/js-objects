import {Place} from '../objects/Const-fn'


 const Capitals = function(centerName,schedule){    
      // note i did not redo the percentage thing also     
      //Place.call(this,name,dosesGiven,vaccinated, population)        

     this.testCenter ={
         testCenterName : centerName,
         schedule : schedule
      }
  }


Capitals.prototype = Object.create(Place)

// the new keyword... creates a object,
const brussels = new Capitals("St.Elisabeth","11Am - 5PM") 
brussels.__proto__ = new Place("Brussels","1.4M","3600",5000)

//Place.prototype.newFx = function(){console.log('hi')}
//const ll = new Place("Washington","2M","30600",1500)

console.log(brussels)
//console.log(ll)
//brussels.Region = "FlemishFrench"

const washington = new Capitals("Creek Bridge" , "8Am - 4PM") 
washington.__proto__ = new Place("Washington","2M","30600",1500)
const newDelhi = new Capitals("Fortis" , "9Am - 5PM") 
newDelhi.__proto__ = new Place("New Delhi","20M","30600",520000)

// Capitals.prototype.backupPhoneNumber = function(){
//     return "+3245666"
// }


// Step 2

//(newDelhi.__proto__ === Capitals.prototype)

// step 3 show the first  images. 

// step 4 add new property to brussles region  and show it works 

// define backupPhoneNumber on prototype and show it works 

// why define on prototype
 /// safety 
///  performance/usage
// brussels.testCenter = function(){
//     console.log('hi')
// }

//console.log(brussels.testCenter())
//console.log(washington.testCenter)
//console.log(newDelhi)


//console.log(brussels.__proto__.constructor === Capitals)


//console.log(Capitals.prototype)
//console.log(washington.testCenter)
//console.log(newDelhi)


const arr = [brussels,washington,newDelhi]
export default arr



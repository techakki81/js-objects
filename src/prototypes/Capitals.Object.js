import {Place} from '../objects/Const-fn'


 const Capitals = function(name, dosesGiven,vaccinated, population, centerName,schedule){    
    
 // step 1 proble of variable in its own and not from prototype
  Place.call(this,name, dosesGiven,vaccinated, population)

    this.testCenter ={
         testCenterName : centerName,
         schedule : schedule
      }
  }


  Capitals.prototype = Object.create(Place.prototype)
  Capitals.prototype.constructor = Capitals


let brussels = new Capitals("Brussels","1.74M","50600",500000,"St.Elisabeth","11Am - 5PM")
const washington = new Capitals("Washington","20M","500600",1500000,"Creek Bridge" , "8Am - 4PM") 
const newDelhi = new Capitals("New Delhi","200M","5220600",522200000,"Fortis" , "9Am - 5PM") 


console.log(brussels)

const arr = [brussels,washington,newDelhi]
export default arr
import {Place} from '../objects/Const-fn'


 const Capitals = function(name, dosesGiven,vaccinated, population, centerName,schedule){    
    
  // first comment this and show it later. discuss that thre is no super /base in JS
  // do talk that this approach does not put the propertis in prototype but on that very object
  Place.call(this,name, dosesGiven,vaccinated, population)

    this.testCenter ={
         testCenterName : centerName,
         schedule : schedule
      }
  }


const brussels = new Capitals("Belgium","1.74M","50600",500000,"St.Elisabeth","11Am - 5PM")
const washington = new Capitals("United States","20M","500600",1500000,"Creek Bridge" , "8Am - 4PM") 
const newDelhi = new Capitals("India","200M","5220600",522200000,"Fortis" , "9Am - 5PM") 


console.log(brussels)

const arr = [brussels,washington,newDelhi]
export default arr



import {Country} from '../objects/Const-fn'


const Capitals =function(name,dosesGiven,vaccinated, population,centerName,schedule){
    
    // note i did not redo the percentage thing also 
    
    Country.call(this,name,dosesGiven,vaccinated, population)
    

    this.testCenter ={
        testCenterName : centerName,
        schedule : schedule
     }
}


// the new keyword... creates a object,
const brussels = new Capitals("Brussels","1.4M","3600",5000, "St Elisabeth" , "10Am - 6PM") 
const washington = new Capitals("Washington","2M","30600",1500, "Creek Bridge" , "8Am - 4PM") 
const newDelhi = new Capitals("New Delhi","20M","30600",520000, "Fortis" , "9Am - 5PM") 

Capitals.prototype.backupPhoneNumber = function(){
    return "+3245666"
}



//(newDelhi.__proto__ === Capitals.prototype)


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



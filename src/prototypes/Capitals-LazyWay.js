//
// convention, the Constructor function start with C 
const Capitals = function( 
                        name,
                        dosesGiven,
                        vaccinated, 
                        population, 
                        centerName,
                        schedule){
    this.name = name;
    this.dosesGiven= dosesGiven;
    this.vaccinated = vaccinated;
    this.population = population;

    //step 1

    // why not this.testCenter ?
     this.testCenter ={
        testCenterName : centerName,
        schedule : schedule
     }

    this.percentage = function(){
        return    ((this.vaccinated /this.population)*100).toFixed(2)
    }
}


// the new keyword... creates a object,
const brussels = new Capitals("Brussels","1.4M","5600",5000, "St Elisabeth" , "10Am - 6PM") 
const washington = new Capitals("Washington","2M","50600",1500, "Creek Bridge" , "8Am - 4PM") 
const newDelhi = new Capitals("New Delhi","20M","50600",520000, "Fortis" , "9Am - 5PM") 

// console.log(brussels)
// console.log(washington)
// console.log(newDelhi)

const arr = [brussels,washington,newDelhi]
export default arr
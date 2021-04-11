
// convention, the Constructor function start with C 
const Place = function(name,dosesGiven,vaccinated, population){
    this.name = name;
    this.dosesGiven= dosesGiven;
    this.vaccinated = vaccinated;
    this.population = population;
    this.percentage = function(){
        return    ((this.vaccinated /this.population)*100).toFixed(2)
    }
}


// the new keyword... creates a object,
const belgium = new Place("Belgium","1.74M","50600",500000) 
const usa = new Place("United States","20M","500600",1500000) 
const india = new Place("India","200M","5220600",522200000) 
const arr = [belgium,usa,india]
export default  arr
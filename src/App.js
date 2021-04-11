import './App.css';
//dont need the .js files 
import countries from './objects/Const-fn'
//import capitals from  './prototypes/Capitals-LayWay'
import capitals from  './prototypes/Capitals.Proto'

function App() {

// console.log(countries)
// deconstruction 
 const [be,usa,ind ] = countries
 const [brussels,washington,newDelhi] = capitals

 // second video
  //console.dir( be )
  //console.log(be.Abbr())  
  // console.dir( be  )
  // console.dir( brussels )
 
 
  return (

    <div>
<div className="container-fluid">
    <h2>Covid Vaccination Tracker </h2>

  <div className="table-row header">
    <div className="text">Country</div>
    <div className="text">Doses Given</div>
    <div className="text">Vaccinated</div>
    <div className="text">% vaccinated</div>    
  </div>

  <div className="table-row">
    <div className="text">{be.name}</div>
    <div className="text">{be.dosesGiven}</div>
    <div className="text">{be.vaccinated}</div>
    <div className="text">{be.percentage()} </div>    
  </div>

  <div className="table-row">
    <div className="text">{usa.name}</div>
    <div className="text">{usa.dosesGiven}</div>
    <div className="text">{usa.vaccinated}</div>    
    <div className="text">{usa.percentage()} </div>    
  </div>

  <div className="table-row">
    <div className="text">{ind.name}</div>
    <div className="text">{ind.dosesGiven}</div>
    <div className="text">{ind.vaccinated}</div>    
    <div className="text">{ind.percentage()} </div>    
  </div>

</div>
   
   {/* capitals */}


   <div className="container-fluid">
    <h2>Capital Vaccination Tracker </h2>

  <div className="table-row header">
    <div className="text">Country</div>
    <div className="text">Doses Given</div>
    <div className="text">Vaccinated</div>
    <div className="text">% vaccinated</div>    

    <div className="text">Center</div>
    <div className="text">Schedule</div>    

  </div>

  <div className="table-row">
    <div className="text">{brussels.name}</div>
    <div className="text">{brussels.dosesGiven}</div>
    <div className="text">{brussels.vaccinated}</div>
    <div className="text">{brussels.percentage()} </div>    

    <div className="text">{brussels.testCenter.testCenterName}</div>
    <div className="text">{brussels.testCenter.schedule} </div>    


  </div>

  <div className="table-row">
    <div className="text">{washington.name}</div>
    <div className="text">{washington.dosesGiven}</div>
    <div className="text">{washington.vaccinated}</div>    
    <div className="text">{washington.percentage()} </div>  

     <div className="text">{washington.testCenter.testCenterName}</div>
    <div className="text">{washington.testCenter.schedule} </div>   

  </div>

  <div className="table-row">
    <div className="text">{newDelhi.name}</div>
    <div className="text">{newDelhi.dosesGiven}</div>
    <div className="text">{newDelhi.vaccinated}</div>    
    <div className="text">{newDelhi.percentage()} </div> 

    <div className="text">{newDelhi.testCenter.testCenterName}</div>
    <div className="text">{newDelhi.testCenter.schedule} </div>      
  </div>

</div> 

    </div>
  
  );
}

export default App;


import './App.css';
//dont need the .js files 
import countries from './objects/const-fn'

function App() {

// console.log(countries)
// deconstruction 
 const [be,usa,ind ] = countries
 
 //const [b,...rest ] = countries
 //console.log(rest)

   //PROBLEM: 
   console.dir(be)
   console.dir(usa)
   console.dir(ind)

  return (
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
  );
}

export default App;

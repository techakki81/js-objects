import './App.css';

function App() {


  console.log("hi hi hi")
  

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
    <div className="text">Belgium</div>
    <div className="text">1.74M</div>
    <div className="text">506000</div>
    <div className="text">4.42</div>    
  </div>

  <div className="table-row">
    <div className="text">United States</div>
    <div className="text">146M</div>
    <div className="text">526666</div>
    <div className="text">16.03</div>    
  </div>

  <div className="table-row">
    <div className="text">India</div>
    <div className="text">61.1M</div>
    <div className="text">809000</div>
    <div className="text">0.65</div>    
  </div>

</div>
  );
}

export default App;

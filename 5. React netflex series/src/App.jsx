import Card from "./Card";
import data from "./Sdata";

function NetflexCard(val , i) {
  // this fuction contain 3 parameter 1st rep. values 2nd rep index of that value amd 3rd rep. of whic array if contain multiple eg (val , index , arr)
  return (
    <Card
     key = {i}
      imagsrc={val.imagsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
};

function App() {
  return (
    <>
      <h1 className="heading_style"> Top 5 series of Netflex</h1>
      {data.map(NetflexCard)}
      {/* map(function) */}
    </>
  );
}
export default App;

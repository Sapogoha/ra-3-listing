import './App.css';
import Listing from './components/Listing';
import etsy from './data/etsy';

function App() {
  return <Listing items={etsy} />;
}

export default App;

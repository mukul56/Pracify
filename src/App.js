import './index.css';
import Header from './components/Header';
import {CssBaseline} from '@material-ui/core';
import Products from './components/Products';
import Footer from './components/Footer';
import CustomerFeedback from './components/CustomerFeedback';
function App() {
  return (
    <div>
      <CssBaseline />
      <Header></Header>
      <Products></Products>
      <CustomerFeedback></CustomerFeedback>
      <Footer></Footer>
    </div>
  );
}

export default App;

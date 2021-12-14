
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Footer, Header, Main } from './component';


function App() {
  return (
    <div >
      <ToastContainer />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

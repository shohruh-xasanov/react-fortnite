
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Footer, Header, Main } from './component';
import { ContextProvider } from './contexts';

function App() {
  return (
    <div >
        <ToastContainer />
          <Header />
      <ContextProvider>
            <Main />
      </ContextProvider>
          <Footer />
    </div>
  );
}

export default App;

import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

function App() {
  return (
    <div>
      <Header />
      <div className='min-h-screen md:mt-8'>
        <Outlet /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
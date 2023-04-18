
import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {

  const name = 'chanchito'
  return (
    <>
      <AppRoutes atributo={name} />
    </>
  );
}

export default App;

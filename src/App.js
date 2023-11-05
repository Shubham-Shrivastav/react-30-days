import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Product
          name={'T-Shirt'}
          price={2000}
          description={'Casual printed T-shirt'}
        />
      </header>
    </div>
  );
}

export default App;

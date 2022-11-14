import './App.css';
import Form from './Form';
import { DataWrapContext } from './API'

function App() {
  return (
    <div className='container'>
      <DataWrapContext>
        <Form />
      </DataWrapContext>
    </div>
  );
}

export default App;

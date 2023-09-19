import { useState } from 'react';
import DisplayCanvas from '../DisplayCanvas/DisplayCanvas';
import SubmitForm from '../SubmitForm/SubmitForm';
import './App.css';

export type ComputingConeResult = [number[], number[], number[]] | undefined;
function App() {
  const [result, setResult] = useState<ComputingConeResult>();
  return (
    <>
      <div>
        <header></header>
        <main>
          <h1>Display Simple Cone in a 3D view</h1>
          <SubmitForm
            onSubmit={(data: ComputingConeResult) => {
              setResult(data);
            }}
          />
          <DisplayCanvas result={result}/>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;

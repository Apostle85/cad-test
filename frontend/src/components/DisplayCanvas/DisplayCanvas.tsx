import './DisplayCanvas.css';
import Display from '../../utils/display';
import { useEffect } from 'react';
import { ComputingConeResult } from '../App/App';

const DisplayCanvas = ({ result }: { result: ComputingConeResult }) => {
  useEffect(() => {
    const display = new Display({ canvasId: 'canvas' });
    display.display({ vertices: result });
    console.log('builded');
  }, [result]);
  return <canvas id='canvas'></canvas>;
};

export default DisplayCanvas;

import { ChangeEvent, FormEvent, useState } from 'react';
import './SubmitForm.css';
import Api from '../../utils/api';
import { ComputingConeResult } from '../App/App';

export type ComputingConeFormData = {
  coneHeight: number;
  radius: number;
  numberOfSegments: number;
};
type SubmitType = (data: ComputingConeResult) => void;

const SubmitForm = ({ onSubmit }: { onSubmit: SubmitType }) => {
  const [formData, setFormData] = useState({
    coneHeight: 0,
    radius: 0,
    numberOfSegments: 0,
  });
  const [isError, setIsError] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsError(false);
    const response = (await Api.computeCone(formData)) as ComputingConeResult;
    if(!response) setIsError(true);
    onSubmit(response);
  };
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__input-container'>
        <span className='form__input-name'>cone height:</span>
        <input
          className='form__input'
          type='number'
          name='coneHeight'
          value={formData.coneHeight}
          onChange={handleChange}
        />
      </div>
      <div className='form__input-container'>
        <span className='form__input-name'>radius:</span>
        <input
          className='form__input'
          type='number'
          name='radius'
          value={formData.radius}
          onChange={handleChange}
        />
      </div>
      <div className='form__input-container'>
        <span className='form__input-name'>number of segments:</span>
        <input
          className='form__input'
          type='number'
          name='numberOfSegments'
          value={formData.numberOfSegments}
          onChange={handleChange}
        />
      </div>
      <button className='form__button' type='submit'>
        Display
      </button>
      {isError && (
        <span className={`form__error`}>На сервере произошла ошибка</span>
      )}
    </form>
  );
};

export default SubmitForm;

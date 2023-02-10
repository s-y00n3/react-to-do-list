import React from 'react';
import './form.css';

/**
 * value : input 내용
 * onChange : input 변경될때
 * onCreate : 버튼 클릭시
 * onKeyPress : input에서 키 입력할때
 * @param {*} param0 
 * @returns 
 */
const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className='form'>
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className='create-button' onClick={onCreate}>
                Add
            </div>
        </div>
    );
}
export default Form;


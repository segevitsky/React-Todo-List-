import {useState} from 'react';
// import useLocalStorageState from '../hooks/useLocalStorageState'

export default initialVal => {
    const [value,setValue] = useState(initialVal);
    const handleChange = e => {
        setValue(e.target.value);
    }
    const reset = () => {
        setValue('');
    }
    return [value,handleChange,reset];
}
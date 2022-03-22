import React, {memo, useRef} from 'react';

const InputFild = memo(props => {
        const handleAdd = (e) =>{
            e.preventDefault();
            props.onAdd(inputRef.current.value);
            inputRef.current.value = '';
        }
        const inputRef = useRef();
        return (
            <form className='input-form' onSubmit={handleAdd}>
                <input
                    ref={inputRef}
                    type='text'
                    className='input-fild'
                    placeholder='Habit'
                />
                <button className='input-btn'>Add</button>
            </form>
        );
    }
)

export default InputFild;

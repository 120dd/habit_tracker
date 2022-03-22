import React, {memo} from 'react';

const Habit = memo(
    (props) => {
        const handleIncrement = () => {
            props.onIncrement(props.habit);
        }

        const handleDecrement = () => {
            props.onDecrement(props.habit);
        }

        const handleDeletement = () => {
            props.onDelete(props.habit)
        }

        return (
            <li className='habit'>
                <span className="habit-name">{props.name}</span>
                <span className="habit-count">{props.count}</span>
                <button className="habit-buttons habit-increase" onClick={handleIncrement}>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button className="habit-buttons habit-decrease" onClick={handleDecrement}>
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button className="habit-buttons habit-delete" onClick={handleDeletement}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </li>
        );
    }
)

export default Habit;
//
// import React, { PureComponent } from 'react';
//
// class Habit extends PureComponent {
//     componentDidMount() {
//         console.log(`habit:${props.name} on`)
//     }
//
//     componentWillUnmount() {
//         console.log(`habit:${props.name} off`)
//     }
//     handleIncrement = () => {
//         props.onIncrement(props.habit);
//     }
//
//     handleDecrement = () => {
//         props.onDecrement(props.habit);
//     }
//
//     handleDeletement = () => {
//         props.onDelete(props.habit)
//     }
//
//     render() {
//         console.log(`habit:${props.name}`)
//         return (
//             <li className='habit'>
//                 <span className="habit-name">{props.name}</span>
//                 <span className="habit-count">{props.count}</span>
//                 <button className="habit-buttons habit-increase" onClick={handleIncrement}>
//                     <i className="fa-solid fa-square-plus"></i>
//                 </button>
//                 <button className="habit-buttons habit-decrease" onClick={handleDecrement}>
//                     <i className="fa-solid fa-square-minus"></i>
//                 </button>
//                 <button className="habit-buttons habit-delete" onClick={handleDeletement}>
//                     <i className="fa-solid fa-trash-can"></i>
//                 </button>
//             </li>
//         );
//     }
// }
//
// export default Habit;
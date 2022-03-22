import React from 'react';
import Habit from "./habit";

const Habits = (props) => {
    return (
        <ul>
            {
                props.habits.map((habit) =>
                    <Habit
                        key={habit.id}
                        habit={habit}
                        name={habit.name}
                        count={habit.count}
                        onIncrement={props.onIncrement}
                        onDecrement={props.onDecrement}
                        onDelete={props.onDelete}
                    />
                )
            }
            <button className="habits-reset" onClick={props.onReset}>
                Reset All
            </button>
        </ul>
    );
};

export default Habits;

// import React, { PureComponent } from 'react';
// import Habit from "./habit";
//
// class Habits extends PureComponent {
//
//
//     render() {
//         console.log('list');
//         return (
//             <ul>
//                 {
//                     this.props.habits.map((habit)=>
//                     <Habit
//                         key={habit.id}
//                         habit={habit}
//                         name={habit.name}
//                         count={habit.count}
//                         onIncrement={this.props.onIncrement}
//                         onDecrement={this.props.onDecrement}
//                         onDelete={this.props.onDelete}
//                     />
//                     )
//                 }
//                 <button className="habits-reset" onClick={this.props.onReset}>
//                     Reset All
//                 </button>
//             </ul>
//         );
//     }
// }
//
// export default Habits;
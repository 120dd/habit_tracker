import React, {useCallback, useState} from 'react';
import Navbar from "./components/navbar";
import InputFild from "./components/inputFild";
import Habits from "./components/habits";
import './app.css';

const App = (props) => {
    const [habits, setHabits] = useState([
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: "Sleeping", count: 0},
        {id: 3, name: "Coding", count: 0},
    ]);

    const handleIncrement = useCallback(
        habit => {
            const habits2 = [...habits];
            const index = habits2.indexOf(habit);
            habits2[index].count++;
            // const habits = habits.map((item)=>{
            //     if (item.id === habit.id) {
            //         return {...habit, count: habit.count+1}
            //     } else {
            //         return item;
            //     }
            // })
            setHabits(habits2);
        }
    ,[])

    const handleDecrement = useCallback(
        habit => {
            const newHabits = [...habits];
            const index = newHabits.indexOf(habit);
            newHabits[index].count > 0 && newHabits[index].count--;
            setHabits(newHabits);
        },[]
    )

    const handleDelete = useCallback(
        habit => {
            const newHabits = [...habits];
            const index = newHabits.indexOf(habit);
            newHabits.splice(index, 1);
            setHabits(newHabits);
        }
    ,[]
    )
    // handleResetbtn = () => {
    //     const habits = this.state.habits.map(item => {
    //       item.count = 0;
    //       return item;
    //     });
    //     this.setState({habits: habits});
    // }

    // handleResetbtn = () => {
    //     const habits = this.state.habits.map(habit => {
    //         if (habit.count !== 0) {
    //             return { ...habit, count: 0 };
    //         }
    //         return habit;
    //     });
    //     this.setState({ habits });
    // };

    const handleResetbtn = () => {
        const newHabits = [...habits];
        newHabits.map((item) => {
            if (item.count !== 0) {
                return item.count = 0;
            } else {
                return item;
            }
        });
        setHabits(newHabits);
    }

    const addHabits = useCallback(
        (habitName) => {
            const newHabits = [...habits];
            habitName && newHabits.push({
                id: Date.now(),
                name: habitName,
                count: 0,
            })
            setHabits(newHabits);
        },[]
    )

    return (
        <div>
            <Navbar totalCount={habits.filter((habit) => habit.count > 0).length}/>
            <InputFild onAdd={addHabits}/>
            <Habits
                habits={habits}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
                onReset={handleResetbtn}
            />
            {/*<Reset onReset={this.handleResetbtn}/>*/}
        </div>
    );
};

export default App;


// import './app.css';
// import Habits from './components/habits';
// import React, {PureComponent} from 'react';
// import Navbar from './components/navbar';
// import InputFild from './components/inputFild';
//
// class app extends PureComponent {
//     state = {
//         habits: [
//             {id: 1, name: 'Reading', count: 0},
//             {id: 2, name: "Sleeping", count: 0},
//             {id: 3, name: "Coding", count: 0},
//         ],
//     }
//
//     handleIncrement = habit => {
//         const habits = [...this.state.habits];
//         const index = habits.indexOf(habit);
//         habits[index].count++;
//         // const habits = this.state.habits.map((item)=>{
//         //     if (item.id === habit.id) {
//         //         return {...habit, count: habit.count+1}
//         //     } else {
//         //         return item;
//         //     }
//         // })
//         this.setState({habits: habits});
//     }
//
//     handleDecrement = habit => {
//         const habits = [...this.state.habits];
//         const index = habits.indexOf(habit);
//         habits[index].count > 0 && habits[index].count--;
//         this.setState({habits: habits});
//     }
//
//     handleDelete = habit => {
//         const habits = [...this.state.habits];
//         const index = habits.indexOf(habit);
//         habits.splice(index, 1);
//         this.setState({habits: habits});
//     }
//
//     // handleResetbtn = () => {
//     //     const habits = this.state.habits.map(item => {
//     //       item.count = 0;
//     //       return item;
//     //     });
//     //     this.setState({habits: habits});
//     // }
//
//     // handleResetbtn = () => {
//     //     const habits = this.state.habits.map(habit => {
//     //         if (habit.count !== 0) {
//     //             return { ...habit, count: 0 };
//     //         }
//     //         return habit;
//     //     });
//     //     this.setState({ habits });
//     // };
//
//     handleResetbtn = () => {
//         const habits = [...this.state.habits];
//         habits.map((item)=>{
//             if (item.count !== 0){
//                 return item.count = 0;
//             }else {
//                 return item;
//             }
//         });
//         this.setState({habits:habits});
//     }
//
//     addHabits = (habitName) => {
//         const habits = [...this.state.habits];
//         habitName && habits.push({
//             id: this.state.habits[habits.length - 1] ? this.state.habits[habits.length - 1].id + 1 : 0,
//             name: habitName,
//             count: 0,
//         })
//         this.setState({habits: habits});
//     }
//
//     render() {
//         console.log('app');
//         return (
//             <div>
//                 <Navbar totalCount={this.state.habits.filter((habit) => habit.count > 0).length}/>
//                 <InputFild onAdd={this.addHabits}/>
//                 <Habits
//                     habits={this.state.habits}
//                     onIncrement={this.handleIncrement}
//                     onDecrement={this.handleDecrement}
//                     onDelete={this.handleDelete}
//                     onReset={this.handleResetbtn}
//                 />
//                 {/*<Reset onReset={this.handleResetbtn}/>*/}
//             </div>
//         );
//     }
// }
//
// export default app;
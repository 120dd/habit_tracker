import React from 'react';

const Navbar = (props) => {
    return (
        <header>
            <h1>
                <i className="fa-solid fa-leaf"></i>
                <span className='listName'>Habittracker</span>
                <span className='listNum'>{props.totalCount}</span>
            </h1>
        </header>
    );
};

export default Navbar;

// import React, { PureComponent } from 'react';
//
// class Navbar extends PureComponent {
//     render() {
//         console.log(`navbar`);
//         return (
//             <header>
//                 <h1>
//                     <i className="fa-solid fa-leaf"></i>
//                     <span className='listName'>Habittracker</span>
//                     <span className='listNum'>{this.props.totalCount}</span>
//                 </h1>
//             </header>
//         );
//     }
// }
//
// export default Navbar;
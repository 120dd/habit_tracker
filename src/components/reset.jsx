import React, { PureComponent } from 'react';

class Reset extends PureComponent {
    render() {
        return (
            <>
                <button className='reset-btn' onClick={this.props.onReset}>
                    reset all
                </button>
            </>
        );
    }
}

export default Reset;
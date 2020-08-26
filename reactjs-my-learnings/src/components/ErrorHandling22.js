import React from 'react'

function ErrorHandling22(props) {
    const { heroName } = props;
    if (heroName === 'Joker') {
        throw new Error('He is not a hero');
    }
    return (
        <div >
            {heroName}
        </div>
    )
}

export default ErrorHandling22

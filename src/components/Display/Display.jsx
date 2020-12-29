import './display.sass';

const Display = ({currentValue, accValue}) => {
    return (
        <div
            id="display"
            className="key display"
        >
            <h5 className='display__upper'>{accValue}</h5>
            <h3 className='display__lower'>{currentValue}</h3>
        </div>
    )
}

export default Display

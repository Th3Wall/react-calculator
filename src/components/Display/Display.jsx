import './display.sass';

const Display = ({currentValue}) => {
    return (
        <div
            id="display"
            className="key display"
        >{currentValue}</div>
    )
}

export default Display

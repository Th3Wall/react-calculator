import './buttons.sass';

const Buttons = ({handleKeyClick}) => {

    return (
        <section className='buttons__grid'>
            <div
                id="seven"
                className="key number"
                value="7"
                onClick={(e)=> handleKeyClick(e)}
            >7</div>
            <div
                id="eight"
                className="key number"
                value="8"
                onClick={(e)=> handleKeyClick(e)}
            >8</div>
            <div
                id="nine"
                className="key number"
                value="9"
                onClick={(e)=> handleKeyClick(e)}
            >9</div>
            <div
                id="add"
                className="key operator"
                value="x"
                onClick={(e)=> handleKeyClick(e)}
            >x</div>

            <div
                id="four"
                className="key number"
                value="4"
                onClick={(e)=> handleKeyClick(e)}
            >4</div>
            <div
                id="five"
                className="key number"
                value="5"
                onClick={(e)=> handleKeyClick(e)}
            >5</div>
            <div
                id="six"
                className="key number"
                value="6"
                onClick={(e)=> handleKeyClick(e)}
            >6</div>
            <div
                id="subtract"
                className="key operator"
                value="÷"
                onClick={(e)=> handleKeyClick(e)}
            >÷</div>

            <div
                id="one"
                className="key number"
                value="1"
                onClick={(e)=> handleKeyClick(e)}
            >1</div>
            <div
                id="two"
                className="key number"
                value="2"
                onClick={(e)=> handleKeyClick(e)}
            >2</div>
            <div
                id="three"
                className="key number"
                value="3"
                onClick={(e)=> handleKeyClick(e)}
            >3</div>
            <div
                id="multiply"
                className="key operator"
                value="-"
                onClick={(e)=> handleKeyClick(e)}
            >-</div>
            
            <div
                id="zero"
                className="key number"
                value="0"
                onClick={(e)=> handleKeyClick(e)}
            >0</div>
            <div
                id="decimal"
                className="key decimal"
                value="."
                onClick={(e)=> handleKeyClick(e)}
            >.</div>

            <div
                id="divide"
                className="key operator"
                value="+"
                onClick={(e)=> handleKeyClick(e)}
            >+</div>

            <div
                id="clear"
                className="key clear"
                value="AC"
                onClick={(e)=> handleKeyClick(e)}
            >A/C</div>
            <div
                id="equals"
                className="key equal"
                value="="
                onClick={(e)=> handleKeyClick(e)}
            > = </div>
        </section>
    )
}

export default Buttons

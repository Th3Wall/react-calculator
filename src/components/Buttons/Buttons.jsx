import Display from '../Display/Display';
import './buttons.sass';

const Buttons = () => {
    return (
        <section className='buttons__grid'>
            <div id="clear" class="key clear">C</div>
            <Display />

            <div id="seven" class="key number">7</div>
            <div id="eight" class="key number">8</div>
            <div id="nine" class="key number">9</div>
            <div id="add" class="key operator">+</div>

            <div id="four" class="key number">4</div>
            <div id="five" class="key number">5</div>
            <div id="six" class="key number">6</div>
            <div id="subtract" class="key operator">-</div>

            <div id="one" class="key number">1</div>
            <div id="two" class="key number">2</div>
            <div id="three" class="key number">3</div>
            <div id="multiply" class="key operator">x</div>
            
            <div id="zero" class="key number">0</div>
            <div id="decimal" class="key decimal">.</div>
            <div id="equals" class="key equal">=</div>
            <div id="divide" class="key operator">÷</div>
        </section>
    )
}

export default Buttons

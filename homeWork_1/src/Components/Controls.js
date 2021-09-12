import {ReactComponent as Arrow} from '../arrow-forward.svg';

function Controls(props) {
  return (
      <div className="controls">
        <button className="controls__button controls__button_left" onClick={props.left}>
         <Arrow/>
        </button>
        <button className="controls__button controls__button_right" onClick={props.right}>
          <Arrow/>
        </button>
      </div>
  )
}

export default Controls
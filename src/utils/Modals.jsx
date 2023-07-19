import { Fragment } from 'react'
import ReactDOM from 'react-dom';
import { Backdrop } from './Loader'
const Modals = ({onClose, children}) => {
  return (
    <Fragment>
        {
        ReactDOM.createPortal(
            <Fragment>
            <Backdrop onClose={onClose}/>
      <div className="modal">
        <button onClick={onClose} type='close'>Close</button>
        <div className="content">{children}</div>
         </div>
    </Fragment>,
     document.getElementById("modal-root")
    )}
    </Fragment>
  )
}

export default Modals

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  variant="primary" className='p-2 w-[100px] border-red-500 border-2 m-8 static' onClick={handleShow}>
       Logout
      </Button>
      
    <div className='static '>
      <Modal show={show} onHide={handleClose}  className=' font-semibold absolute text-white z-40 rounded-lg w-[400px] bg-red-500 mt-12 p-12 bottom-[500px] left-[700px]' >
        <Modal.Header  closeButton>
          <Modal.Title className='text-2xl'> Logout Session</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do You Wish to Logout ?</Modal.Body>
        <Modal.Footer className='mt-6'>
          <Button variant="secondary" className="p-2 w-[75px] border-2 bg-white rounded-md text-black" onClick={handleClose}>
            Cancel
          </Button>
          <Link to="/"><Button variant="primary"  className="p-2 w-[75px] border-2 border-red-500 bg-white ml-5 rounded-md text-black " onClick={handleClose}>
            Yes
          </Button></Link>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default LoginModal;


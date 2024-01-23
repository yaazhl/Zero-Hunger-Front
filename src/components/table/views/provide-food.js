import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import axios from 'axios';
import UserContext from '../../../Usercontext';
function ProvideFood() {

  const {data, fetchData, setData, loading } = useContext(UserContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      description: "",
      area: "",
      city: "",
      quantity: "",
      date: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.number) {
        errors.number = "Required";
      }
      return errors;
    },
    onSubmit:async (values, {resetForm}) => {
     
      console.log(values)
      values.status = "live"
      let projectdata = await axios.post(`http://localhost:3100/create`, values);
      

      handleClose();
      fetchData()
      resetForm({values:""})
     

    },
  });


  return (
    <>
      <Button variant="btn btn-outline-success" onClick={handleShow}>
        + Provide Food
      </Button>

     

      <Modal
        size="lg"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Provide Food</Modal.Title>
        </Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <label>Name</label>
                  <input
                    type="text"
                    className={
                      formik.errors.task_title
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    name="name"
                  />
                </div>
                <div className="col-6">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    className={
                      formik.errors.task_title
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    name="number"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Short Description about Food</Form.Label>
                    <Form.Control
                      onChange={formik.handleChange}
                      name="description"
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>Area</label>
                  <input
                    type="text"
                    className={
                      formik.errors.task_title
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    name="area"
                  />
                </div>
                <div className="col-6">
                  <label>City</label>
                  <input
                    type="text"
                    className={
                      formik.errors.task_title
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    name="city"
                  />
                </div>
              </div>
              <div className="row">
              <div className="col-6">
                  <label>Available Quantity</label>
                  <input
                    type="number"
                    className={
                      formik.errors.task_title
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    name="quantity"
                  />
                </div>
                <div className="col-6">
                  <label>Available Date</label>
                  <input
                    type="date"
                    className={
                      formik.errors.due_date
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    name="date"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Add Food
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ProvideFood;
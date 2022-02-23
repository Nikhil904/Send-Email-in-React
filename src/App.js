import "./App.css";
import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";
function App() {
  const sendEmail = (e) =>{
    e.preventDefault();
    //Here we pass the 4 parameter
    emailjs.sendForm('service_lpbyand','template_ptqan4u',e.target,'user_xBPeSp7lKBypcyF0SVEHC').then(res => {
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
  }
  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%"
      }}
    >
      <h1 className="heading">Send Email</h1>
      <Form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" className="form-control" />
          <br />
          <br />

          <label>Email</label>
          <input type="email" name="user_email" className="form-control"/>
          <br /><br />

          <label>Message</label>
          <textarea name="message" rows="4" className="form-control"/>
          <br />
          <br />

          <input type="submit" value="send" />
      </Form>
    </div>
  );
}

export default App;

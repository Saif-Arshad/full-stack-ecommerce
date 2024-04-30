import React from 'react'

function Inputform() {
  return (
    <div className="form">
        <h1>We would love to hear from you.</h1>
        <p>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</p>
      <div className="input">

    <div className="main-name">

        <div className="name">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Write Your Name' />    
        </div>
        <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Write Your Email' />    
        </div>
    </div>
    <div className="message">
    <label htmlFor="message">Messaage</label>
    <textarea placeholder='Write Your Message Here' name="message" rows={7}  id=""  >

    </textarea>
    </div>


      </div>
      </div>
  )
}

export default Inputform

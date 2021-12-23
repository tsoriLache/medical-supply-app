import React from 'react'

export default function EmployeeForm() {
    return (
        <div className="container">  
  <form id="contact" action="" method="post">
    <h3>Employee Information Form</h3>
    <h4>HAVEANICEDAY🧊</h4>
    <fieldset>
      <input placeholder="Full name" type="text"  required />
    </fieldset>
    <fieldset>
        {/* TODO consider https://www.w3schools.com/html/html5_geolocation.asp */}
      <input placeholder="Location" type="text"  required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel"  />
    </fieldset>
    <fieldset>
      <input placeholder="Date" type="date"  required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Anything Else...." ></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
    )
}

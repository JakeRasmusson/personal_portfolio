import { useState } from 'react'

const Form = () => {
    const [formAlert, setFormAlert] = useState('')
    const [formData, setFormData] = useState({email: '', name: '', message: ''})

    const handleInputChange = (e) => {
        const { type, id, value} = e.target
        const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        if ( type === 'email' && !emailRegex.test(e.target.value)) {
            setFormAlert('Please Enter a valid email')
        } else {
            setFormAlert('')
        }
        setFormData({ ...formData, [id]: value})

    }
    const onFocusChange = (e) => {
        console.log(e.target)
        if (!e.target.value) {
            setFormAlert('Please fill out all fields')
        } else {
            setFormAlert('')
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(formData)
    }


  return (
    <form onSubmit={onSubmitForm}>
      <div class="form-group">
        <label htmlFor="email" id="emailLabel">Email address</label>
        <input
          type="email"
          class="form-control"
          onChange={handleInputChange}
          onBlur={onFocusChange}
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={formData.email}
        />
      </div>
      <div class="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onBlur={onFocusChange}
          onChange={handleInputChange}
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter name"
          value={formData.name}
        />
      </div>
      <div class="form-group">
        <label htmlFor="exampleFormControlTextarea1">Message</label>
        <textarea
          class="form-control"
          onBlur={onFocusChange}
          onChange={handleInputChange}
          id="message"
          rows="3"
          value={formData.message}
        ></textarea>
      </div>
      <p>{formAlert}</p>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};



export default Form
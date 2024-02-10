import React from 'react'

const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                  placeholder={placeholder}
                  style={{ resize: "none" }}
                  value={value}
                  onChange={onChange}
                />
  )
}

export default Textarea
import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let uppercase = text.toUpperCase()
        setText(uppercase)
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowClick = () => {
        let lowercase = text.toLowerCase()
        setText(lowercase)
        props.showAlert("Converted to lowercase", "success")
    }

    const handleCopy = () => {
        let textVal = document.getElementById('myBox')
        textVal.select()
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied successfully", "success")
    }

    const handleClear = () => {
        let newText = ""
        setText(newText)
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container">
                <div className="mb-3 my-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" onChange={handleChange} rows={8} value={text} placeholder='Enter the text' />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{text.split(" ").length * 0.008} Minutes read.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter text to preview it here"}</p>
            </div>
        </>
    )
}

import React, { useState } from 'react'
import './chatScreen.css'
import Avatar from '@material-ui/core/Avatar'

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: "",
            message: "whatsup?"
        },
        {
            name: 'Ellen',
            image: "",
            message: "whatsup?"
        },
        {
            message: "whatsup?"
        }
    ])
    const handleSend = e => {
        e.preventDefault()
        setMessages([...messages, {message: input}])
        setInput("")
    }
    return (
        <div className="chatScreen">
            <h2 className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</h2>
            {messages.map((message) =>(
                message.name ? (           
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image"src={message.image} alt={message.name}/>
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ):(
                    <div className="chatScreen__message">
                        <p className="chatScreen__userText">{message.message}</p>
                    </div>
                )
            )

            )}
            <div>
                <form className="chatScreen__input">
                    <input value={input} onChange={(e)=>setInput(e.target.value)} className="chatScreen__inputField" type="text" />
                    <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen

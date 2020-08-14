import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Yo whats up"
                timestamp="40 Seconds ago"
                profilePic="..."
            />
            <Chat
                name="Pedro"
                message="Yo whats up"
                timestamp="40 Seconds ago"
                profilePic="..."
            />
            <Chat
                name="Juan"
                message="Yo whats up"
                timestamp="40 Seconds ago"
                profilePic="..."
            />
            <Chat
                name="Elena"
                message="Yo whats up"
                timestamp="40 Seconds ago"
                profilePic="..."
            />
        </div>
        
    )
}

export default Chats

import React, { useState } from 'react';

const MessageArea = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Lógica para enviar y recibir mensajes

  return (
    <div>
      {/* Renderizar mensajes aquí */}
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={/* Función para enviar mensaje */}>Enviar</button>
    </div>
  );
};

export default MessageArea;

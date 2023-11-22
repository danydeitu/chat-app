import React, { useState, useEffect } from 'react';
import MessageArea from './MessageArea';
import UsersList from './UsersList';

const Chat = () => {
  return (
    <div>
      <UsersList />
      <MessageArea />
    </div>
  );
};

export default Chat;

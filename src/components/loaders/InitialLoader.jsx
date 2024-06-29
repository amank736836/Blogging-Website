import React from 'react';
import Logo from '../Logo'

function InitialLoader() {
  return (
    <div className="flex items-center justify-center h-screen dark:bg-gray-900">
      <div className="animate-bounce">
        <Logo width="200px" />
      </div>
    </div>
  );
}

export default InitialLoader;

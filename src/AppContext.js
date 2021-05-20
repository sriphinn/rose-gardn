import React from 'react';

const AppContext = React.createContext({
  status: null,
  setStatus: () => {}
})

export default AppContext
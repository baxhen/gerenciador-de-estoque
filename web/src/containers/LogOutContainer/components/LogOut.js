import React, { useEffect } from 'react';

function LogOut({ logOut }) {
  useEffect(() => {
    logOut();
  }, [logOut]);
  return <div />;
}

export default LogOut;

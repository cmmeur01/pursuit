import React from 'react';

const Page404 = ({ location }) => (
  <div>
    <p>No match found for <code>{location.pathname}</code></p>
  </div>
);

export default Page404;
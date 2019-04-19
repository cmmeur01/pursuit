import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
  <div>
    <p>Sorry, looks like you took a wrong turn.</p>
    <Link to="/">Home</Link>
  </div>
);

export default Page404;
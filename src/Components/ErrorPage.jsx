import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            404
            <Link to='/'>back to website</Link>
        </div>
    );
};

export default ErrorPage;
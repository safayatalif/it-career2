import React from 'react';

const Blog = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='text-center text-4xl font-bold bg-violet-100 py-12'>
                <h1 className=''>Question Blog</h1>
            </div>
            <div className='my-card'>
                <h1 className='text-xl font-semibold mb-4'>1. When should you use context API?</h1>
                <p>You should use the Context API in React when you need to share data between
                    multiple components without having to pass it down manually through each
                    level of the component tree. Some examples of use cases for the Context
                    API include theming, authentication, localization, and user preferences.</p>
            </div>
            <div className='my-card'>
                <h1 className='text-xl font-semibold mb-4'>2. What is a custom hook?</h1>
                <p>A custom hook is a JavaScript function that starts with the prefix "use"
                    and allows you to extract and reuse logic from your React components.
                    It's a way to share stateful logic between components without using
                    higher-order components or render props.</p>
            </div>
            <div className='my-card'>
                <h1 className='text-xl font-semibold mb-4'>3. What is useRef?</h1>
                <p>useRef is a hook in React that returns a mutable ref object that can
                    be used to store a value that persists across re-renders.
                    It's commonly used to reference DOM elements or store
                    mutable values in a functional component without causing
                    unnecessary re-renders.</p>
            </div>
            <div className='my-card'>
                <h1 className='text-xl font-semibold mb-4'>1. What is useMemo?</h1>
                <p>useMemo is a hook in React that allows you to memoize the
                    result of a function and only recompute the result when
                    the dependencies change. It can be used to optimize
                    performance by avoiding unnecessary re-computation
                    of expensive computations in functional components.</p>
            </div>
        </div>
    );
};

export default Blog;
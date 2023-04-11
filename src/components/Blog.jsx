import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className='bg-gray-100 h-48 flex justify-center items-center'>
                <h1 className='font-bold text-2xl'>Blog</h1>
            </section>
            <section className='lg:max-w-screen-xl mx-auto my-28'>
                <div className='text-center p-2'>
                    <h1 className='text-xl font-bold'>When should you use context API?</h1>
                    <p className='mt-3'>Managing state is an essential part of developing applications in React. A common way to manage state is by passing props. Passing props means sending data from one component to another. It's a good way to make sure that data gets to the right place in a React application.

                        But it can be annoying to pass props when you have to send the same data to lots of components or when components are far away from each other. This can make an application slower and harder to work with.

                        Fortunately, React provides a built-in feature known as the context API that helps  “teleport” data to the components that need it without passing props.

                        In this article, we'll explore how the context API works and how to use it effectively in your React applications.

                    </p>
                </div>
                <div className='text-center p-2 mt-12'>
                    <h1 className='text-xl font-bold'>What is a custom hook?</h1>
                    <p className='mt-3'>From version 16.8, React Hooks are officially added to React.js. Besides built-in Hooks such as: useState, useEffect, useCallback…, we can define our own hooks to use state and other React features without writing a class.
                        A Custom Hook has following features:
                        As a function, it takes input and returns output.
                        Its name starts with use like useQuery, useMedia…
                        Unlike functional components, custom hooks return a normal, non-jsx data.
                        Unlike normal functions, custom hooks can use other hooks such as useState, useRef… and other custom hooks.
                        You can see that some libraries also provide hooks such as useForm (React Hook Form), useMediaQuery (MUI).
                    </p>
                </div>
                <div className='text-center p-2 mt-12'>
                    <h1 className='text-xl font-bold'>What is useRef?</h1>
                    <p className='mt-3'>useRef is one of the many built-in hooks provided by React. It is useful for persisting mutable data between component renders. There are a couple of specific uses cases for useRef and refs that I'd like to call out.
                        Modifying a child DOM node outside of the typical React data flow.
                        Treating the mutable object returned by useRef similar to an instance property
                        One way that the React documentation explains the reference returned from useRef is to think of the reference as a box or container. We are able to provide an initial value for the container via the initialValue param of useRef. Once a value is provided we can access the same object via the .current property. Let's take a closer look at the specific use cases for useRef and dive into some examples.
                    </p>
                </div>
                <div className='text-center p-2 mt-12'>
                    <h1 className='text-xl font-bold'>What is useRef?</h1>
                    <p className='mt-3'>useMemo in React is essential react hook for improving the performance and speed of your application by caching the output in the computer memory and returning it when the same input is given again.
                        The React useMemo hook performs some calculations when requested and caches the result in the computer memory. Whenever the React memo hooks are asked to perform another operation with the same value, the old result will be returned without needing to waste computer resources calculating all over again.
                    </p>
                </div>

            </section>
        </div>
    );
};

export default Blog;
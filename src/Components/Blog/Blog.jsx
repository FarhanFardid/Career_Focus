import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-200">
      <h2 className="text-4xl font-bold text-center p-3">Welcome to Blogs </h2>
      <article className="m-4">
        <p className="text-2xl font-bold text-blue-600 p-2">
          1. When context API is used?
        </p>
        <p className="text-lg font-normal p-2">
          Context API is typically used in React applications when data or state
          needs to be shared between multiple components that are not directly
          connected by a parent-child relationship. It allows pass the data
          through the component tree without having to pass props manually at
          every level.Context API is especially useful when we have a lot of
          components that need to access the same data or when passing data
          through props would be too cumbersome or impractical.{" "}
        </p>
      </article>
      <article className="m-4">
        <p className="text-2xl font-bold text-blue-600 p-2">
          2. What is Custom Hooks?
        </p>
        <p className="text-lg font-normal p-2">
          Custom Hooks in React are functions that allow you to reuse stateful
          logic across multiple components. They are a way to abstract away
          complex logic or functionality from a component and make it reusable
          and easy to share.Custom Hooks follow a specific naming convention -
          they always start with the word "use".Custom Hooks can do many things,
          such as managing state, handling side effects, abstracting away APIs
          or libraries, and much more. They can also take in props and return
          data, similar to regular functions.{" "}
        </p>
      </article>
      <article className="m-4">
        <p className="text-2xl font-bold text-blue-600 p-2">
          3. What is useRef?
        </p>
        <p className="text-lg font-normal p-2">
          useRef is a React Hook that allows us to create a mutable reference to
          an element or value that persists across renders. The useRef Hook
          returns an object with a current property that can be used to store
          and retrieve the current value of the reference. One common use case
          for useRef is to access and modify the properties of a DOM element. we
          can use useRef to create a reference to an input element, and then use
          the current property to set the input's value or other properties.{" "}
        </p>
      </article>
      <article className="m-4">
        <p className="text-2xl font-bold text-blue-600 p-2">
          4. What is useMemo?
        </p>
        <p className="text-lg font-normal p-2">
          useMemo is a React Hook that memoizes the result of a function call
          and returns the cached value on subsequent renders, as long as the
          inputs to the function have not changed. Memoization is a technique
          used to optimize the performance of functions by caching their results
          based on their inputs. When the same function is called with the same
          inputs, the cached result is returned instead of recomputing the
          result, which can be more efficient in certain situations..{" "}
        </p>
      </article>
    </div>
  );
};

export default Blog;

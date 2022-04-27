# Advanced react hooks

Repository with some code examples and notes about advanced react hooks.

<br>

## Table of Contents

- <a href="#useRef">useRef hook</a>
- <a href="#useMemo">useMemo hook</a>
- <a href="#useCallback">useCallback</a>
- <a href="#custom-hooks">Custom hooks</a>
- <a href="#useful-links">Useful links</a>
- <a href="#setup-section">Installation/Usage</a>
- <a href="#acknowledgments-section">Acknowledgments</a>

<br>

<h2 id='useRef'>useRef hook</h2>

**1. Example 1:**

Create DOM reference adding a ref attribute to an element to access it directly in the DOM.

<br>

**2. Example 2:**

Get previous state.

<br>

**3. Example 3:**

Memory leack error fix.

React components that perform state updates and run asynchronous operations can cause memory leak issues if the state is updated after the component is unmounted.

You may encounter the following warning message in React application when working with asynchronous calls:

```
Warning: Can't perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```

With combination of useRef and useEffect, we could cleanup memory leaks.

<br>

<h2 id='useMemo'> useMemo hook </h2>
It can be used for performance optimization. Returns a memoized value.
<br>
Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed.

<br>
This optimization helps to avoid expensive calculations on every render.
(use this as a last resource: there are consequences to overusing it so it is better to use it only when there are performance issues)

<br>

<h2 id='useCallback'> useCallback hook </h2>
It can be used for performance optimization. Returns a memoized callback. 
<br>
Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.

<br>

In some ways, it's similar to useMemo, but the big difference is that useMemo returns a memoized value and useCallback returns a memoized callback function.
<br>
Both expect a function and an array of dependencies. UseMemo calls the function and returns the result when the dependencies change and use callback returns the function when the dependencies change.

<br>

<h2 id='custom-hooks'>Custom hooks</h2>

**1. useFetch:**
To make HTTP requests

<br>

**2. useLocalStorage:**
To store items in local storage as well as your state

<br>

<h2 id="useful-links">Useful links</h2>

- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html#usecallback)

- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

- [An Intro to Advanced React Hooks](https://medium.com/in-the-weeds/an-intro-to-advanced-react-hooks-a8af6397fe28)

<br>

<h2 id="setup-section">Installation/Usage</h2>

**1. Clone this repo:**

```
git clone https://github.com/rosgas/advanced-react-hooks.git
```

**2. Installation**

```
npm install
```

**3. Then run**

After all dependencies have been installed you can run the app locally in development mode or you can built out the static assets to deploy them on any webserver.

- **Run the app in development mode**

  After installing all dependencies you can run the app on the webpack dev server by running the following command:

  ```
  npm start
  ```

  Open http://localhost:3000 to view it in the browser.

<br>

You can learn more in the [Create React App documentation.](https://create-react-app.dev/docs/getting-started/)

<br>

<h2 id="acknowledgments-section">Acknowledgments</h2>

- [Traversy Media](https://www.traversymedia.com/)

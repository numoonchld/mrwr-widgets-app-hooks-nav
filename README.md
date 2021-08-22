# mrwr-widgets-app-hooks-nav


Workbench for [Udemy Coursework](https://www.udemy.com/course/react-redux/) - Section 12 and 13


- widget app has four routes and corresponding components 
- events are dispacthced from links and listened to on each of the Route components in the main App
- `useState` and `useEffect` are used plentifully for making API calls to wikipedia API and google translate API 
  - `useEffect` debouncing has also been impemented 
  - debouncing uses a intermidate useEffect hook to throttle API calls by using a `1000 ms` buffer time


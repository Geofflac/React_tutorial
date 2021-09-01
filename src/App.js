
import Todo from "./components/todo";

// element are function that NEED to return element that can be rendered such as this JSX hello!, the inspection page will not show the function
function App() {
  return (
  <div>
    <h1>My Todos</h1>
    {/* self closing tag /> for todo */}
    {/* we are adding kei=ys 'text' and assigned them values to be passed down to the todo component */}
    <Todo text='Learn React' />
    <Todo text='Master react' />
    <Todo text='Explore react course'/>

  </div>
  );
}
// stop at 1:00:00...
export default App;

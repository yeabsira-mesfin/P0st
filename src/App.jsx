import Post from "./components/Post";
const names = ['Yeabsira', 'Mesfin']
function App() {
  return (
    <>
      <Post name={'Yeabsira'} course={"React.js is the best"}/>
      <Post name={'Mesfin'} course={"React is cool bro!"}/>
    </>
  );
}

export default App;

import './App.css';
import MyHello from './MyHello';

function App() {
  const name = '김민정';
  return (
    // JSX 문법규칙2 - 여러 개의 태그는 하나의 태그로 묶여야 한다. (지금의 div태그처럼)
    <div className="App">
      <h1> Hello This is WebProgramming lecture</h1>
      {/* JSX 문법규칙1 - 태그는 반드시 닫아야 한다. self-closing 태그가 가능하다. */}
      {/* <br> */}
      <br /> 
      {/* JSX 문법규칙3 - 변수명은 {}로 감싼다 */}
      {/* JSX 문법규칙4 - CSS의 클래스(class) 스타일은 className으로 설정한다. */}
      <h3 className="box"> Hello, {name} </h3>

      <MyHello />
      <MyHello />
      {/* 주석 */}
    </div>
  );
}

export default App;

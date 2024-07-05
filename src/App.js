import "./App.css";
import React, { useReducer } from "react";
import ErrorBoundary from "./Components/ErrorBoundary";
import Form from "./Components/Form";
import Hero from "./Components/Hero";
import Increment from "./Components/Increment";
import LifecycleA from "./Components/LifecycleA";
import ListRendering from "./Components/ListRendering";
import Message from "./Components/Message";
import Reference from "./Components/Reference";
import Welcome from "./Components/Welcome";
import ArrayHook from "./Hooks/ArrayHook";
import ConditionalEffect from "./Hooks/ConditionalEffect";
// import Counter from "./Hooks/Counter";
import Counter from "./Reducer/Counter";
import EffectOnce from "./Hooks/EffectOnce";
import FetchData from "./Hooks/FetchData";
import IndPostFetch from "./Hooks/IndPostFetch";
import MouseContainer from "./Hooks/MouseContainer";
import ObjectHook from "./Hooks/ObjectHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import PostList from "./Http/PostList";
import PostForm from "./Http/postForm";
import ComponentC from "./Reducer/ComponentC";
import ComponentF from "./Context/ComponentF";
import ComponentE from "./Context/ComponentE";
import UpdatedCounter from "./Reducer/UpdatedCounter";
import ComponentA from "./Reducer/ComponentA";
import ComponentB from "./Reducer/ComponentB";

export const UserContext = React.createContext();
export const phoneContext = React.createContext();
export const countContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <countContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </countContext.Provider>
  );
}
// {/* <Welcome name="Sameer" role="developer">
//   <p>Here comes the children props</p>
// </Welcome>
// <Welcome name="Sriram" role="PlayBoy">
//   <button>Hit Me </button>
// </Welcome>
// <Message />
// <Increment /> */}
// {/* <ListRendering /> */}
// {/* <Form /> */}
// {/* <LifecycleA /> */}
// {/* <Reference /> */}
// {/* <ErrorBoundary>
//   <Hero heroName="Iron Man" />
// </ErrorBoundary>
// <ErrorBoundary>
//   <Hero heroName="Thor" />
// </ErrorBoundary>
// <ErrorBoundary>
//   <Hero heroName="Joker" />
// </ErrorBoundary> */}
// {/* <PostList /> */}
// {/* <PostForm /> */}
// {/* <Counter /> */}
// {/* <ObjectHook /> */}
// {/* <ArrayHook /> */}
// {/* <UseEffectHook /> */}
// {/* <ConditionalEffect /> */}
// {/* <EffectOnce /> */}
// {/* <MouseContainer /> */}
// {/* <FetchData /> */}
// {/* <IndPostFetch /> */}
// {/* <UserContext.Provider value={"Sameer"}>
//   <phoneContext.Provider value={"OnePlus"}>
//     <ComponentC />
//   </phoneContext.Provider>
// </UserContext.Provider> */}
// {/* <UpdatedCounter /> */}
// {/* <Counter /> */}

export default App;

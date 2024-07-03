import "./App.css";
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
import Counter from "./Hooks/Counter";
import EffectOnce from "./Hooks/EffectOnce";
import FetchData from "./Hooks/FetchData";
import IndPostFetch from "./Hooks/IndPostFetch";
import MouseContainer from "./Hooks/MouseContainer";
import ObjectHook from "./Hooks/ObjectHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import PostList from "./Http/PostList";
import PostForm from "./Http/postForm";

function App() {
  return (
    <div className="App">
      {/* <Welcome name="Sameer" role="developer">
        <p>Here comes the children props</p>
      </Welcome>
      <Welcome name="Sriram" role="PlayBoy">
        <button>Hit Me </button>
      </Welcome>
      <Message />
      <Increment /> */}
      {/* <ListRendering /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <Reference /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Iron Man" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Thor" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      {/* <Counter /> */}
      {/* <ObjectHook /> */}
      {/* <ArrayHook /> */}
      {/* <UseEffectHook /> */}
      {/* <ConditionalEffect /> */}
      {/* <EffectOnce /> */}
      {/* <MouseContainer /> */}
      {/* <FetchData /> */}
      <IndPostFetch />
    </div>
  );
}

export default App;

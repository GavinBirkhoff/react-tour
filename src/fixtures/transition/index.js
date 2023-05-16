import Transition from "./Transition";
import Search from "./Search";
import NoTransition from "./NoTransition";
const TransitionView = () => {
  return (
    <>
      <h3>Transition</h3>
      <Transition></Transition>
      <Search />
      <h3>NoTransition</h3>
      <NoTransition></NoTransition>
    </>
  );
};

export default TransitionView
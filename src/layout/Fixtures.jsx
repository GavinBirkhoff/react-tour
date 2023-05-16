import State from "../fixtures/state";
import useLocation from "../hooks/useLocation";

const Fixtures = () => {
  const { pathname } = useLocation();
  const getFixtureContent = (route) => {
    console.log(route);
    switch (route) {
      case "/state":
        return <State></State>;
      default:
        return <p>404</p>;
    }
  };
  return <div>{getFixtureContent(pathname)}</div>;
};

export default Fixtures;

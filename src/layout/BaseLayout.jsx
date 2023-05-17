import { useEffect } from "react";
import Fixtures from "./Fixtures";
import Side from "./Side";

const BaseLayout = () => {
  useEffect(() => {
    const pathChange = (...e) => {
        console.log(...e);
    };
    window.addEventListener("popstate", pathChange);
    return () => {
      window.removeEventListener("popstate", pathChange);
    };
  }, []);
  return (
    <div>
      <div>
        <Side />
      </div>
      <div>
        <Fixtures />
      </div>
    </div>
  );
};

export default BaseLayout;

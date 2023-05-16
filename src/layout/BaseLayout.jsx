import Fixtures from "./Fixtures";
import Side from "./Side";

const BaseLayout = () => {
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

export default BaseLayout
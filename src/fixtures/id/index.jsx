import Log from "./Log";
import PasswordField from "./PasswordField";

const Id = () => {
  return (
    <>
      <h3>基本打印</h3>
      <Log />
      <h3>Generating unique IDs for accessibility attributes</h3>
      <PasswordField />
      <PasswordField />
    </>
  );
};

export default Id
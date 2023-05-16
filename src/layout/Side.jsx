import { useHistory } from "../hooks";

const menus = [
  { path: "/state", label: "state", name: "state" },
  { path: "/id", label: "id", name: "id" },
];
const Side = () => {
  const history = useHistory();
  const handleClick = (item) => {
    const { path } = item;
    history.pushState({}, null, path);
  };
  return (
    <div>
      <ul>
        {menus.map((menu) => (
          <li onClick={() => handleClick(menu)}>{menu.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Side;

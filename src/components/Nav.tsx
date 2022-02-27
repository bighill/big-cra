import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      Navigation:
      <Link to="/">Home Page</Link>
      <Link to="/subpage">Sub Page</Link>
      <Link to="/subpage/subpage">Sub Sub Page</Link>
    </div>
  );
};

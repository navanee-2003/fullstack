import { headerLinks } from "../../../constants/index";
import { Link } from "react-router-dom";
const NavItems = () => {
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row font-medium">
      {headerLinks.map((link) => {
        return (
          <li key={link._id}>
            <Link to={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;

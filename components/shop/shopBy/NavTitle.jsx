import { BiCaretDown } from "react-icons/bi";

const NavTitle = ({ title, icons }) => (
  <div className="flex items-center justify-between pb-5">
    <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
    {icons && <BiCaretDown />}
  </div>
);

export default NavTitle;

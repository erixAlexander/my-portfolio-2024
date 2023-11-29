import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const ToggleButton = ({ setOpen, open }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(open);
    }, 600);
  }, [open]);
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {isOpen ? <IoCloseSharp size={26} /> : <IoMdMenu size={26} />}
    </button>
  );
};

export default ToggleButton;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const NavItem = (props) => {
  return (
    <div className={`flex ${props.className}`} id={props.id}>
      {props.item}
    </div>
  );
};

export default NavItem;

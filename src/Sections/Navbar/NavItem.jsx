

const NavItem = ({navItem}) => {
    const {name,href} = navItem;
    return (
        <li>
            <a href={href}>{name}</a>
        </li>
    );
};

export default NavItem;
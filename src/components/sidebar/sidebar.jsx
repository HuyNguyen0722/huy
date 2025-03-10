import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';
import { FaHome, FaLocationArrow, FaSearch, FaBuilding, FaPlane, FaGamepad, FaCog, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";

const cx = classNames.bind(styles);

function Sidebar() {
    const menuItems = [
        {
            id: 1,
            title: "MENU",
            items: [
                { name: "Home", icon: <FaHome /> },
                { name: "Search", icon: <FaSearch /> },
                { name: "Local", icon: <FaLocationArrow /> },
            ],
        },
        {
            id: 2,
            title: "CATEGORIES",
            items: [
                { name: "Technology & Coding", icon: <MdOutlineComputer /> },
                { name: "Travel", icon: <FaPlane /> },
                { name: "Food & Cooking", icon: <FaBowlFood /> },
                { name: "Lifestyle & Minimalism", icon: <FaBuilding /> },
                { name: "Gaming & Esports", icon: <FaGamepad />}
            ],
        },
        {
            id: 3,
            title: "GENERAL",
            items: [
                { name: "Settings", icon: <FaCog /> },
                { name: "Log Out", icon: <FaSignOutAlt /> },
            ],
        },
    ];

    return (
        <div className={cx("container")}>
            <div className={cx("container-title")}>
                <h3>My blog</h3>
            </div>
            <ul className={cx("sidebar")}>
                {menuItems.map((menuItem) => (
                    <li key={menuItem.id} className={cx("menu-section")}>
                        <span className={cx("menu-title")}>{menuItem.title}</span>
                        <ul className={cx("submenu")}>
                            {menuItem.items.map((item, index) => (
                                <li key={index} className={cx("submenu-item")}>
                                    {item.icon} <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;

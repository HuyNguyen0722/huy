import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {

    const menuItems = [
        {name: "Home", icon: "", path: ""}
    ]

    return(
        <div className={cx("container")}>
            Sidebar
        </div>
    )
    
}

export default Sidebar;
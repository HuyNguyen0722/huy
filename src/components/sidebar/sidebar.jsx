import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';
import { MdFacebook, MdMail } from "react-icons/md";
import { RiSteamFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const cx = classNames.bind(styles);

function Sidebar() {

    const socialList = [
        {
            icon: <MdFacebook />,
            path: "https://www.facebook.com"
        },
        {
            icon: <IoLogoGithub  />,
            path: "https://github.com/HuyNguyen0722"
        },
        {
            icon: <AiFillInstagram />,
            path: "https://www.instagram.com"
        },
        {
            icon: <AiFillYoutube />,
            path: "https://www.youtube.com"
        },
        {
            icon: <MdMail />,
            path: "mailto: namkhon1235@gmail.com"
        },
        {
            icon: <RiSteamFill  />,
            path: "https://steamcommunity.com/profiles/76561198255502594/"
        }
    ]

    const handleClick = (e,path) => {
        e.preventDefault();
        window.open(path, "_blank", "noopener,noreferrer")
    }

    return (
        <div className={cx("container")}>
            <div className={cx("container-header")}>
                <img src={logo} alt='' />
                <div>
                    <h4>Nguyễn Huy</h4>
                </div>
                <div className={cx("social")}>
                    {socialList.map((social) => (
                        <Link className={cx("text")} onClick={(e) => handleClick(e, social.path)}>{social.icon}</Link>
                    ))}
                </div>
            </div>
            <div className={cx("container-middle")}>

            </div>
            <div className={cx("container-bottom")}>

            </div>
        </div>
    );
}

export default Sidebar;
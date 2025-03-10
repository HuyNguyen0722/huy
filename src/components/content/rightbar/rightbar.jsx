import classNames from "classnames/bind";
import styles from "./rightbar.module.scss";
import { MdFacebook, MdMail } from "react-icons/md";
import { RiSteamFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import logo from '../../../assets/logo.jpg';
import bgImage from '../../../assets/background.jpg';
import Music from '../../content/rightbar/music/music'
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Rightbar() {
    const socialList = [
        { icon: <MdFacebook className={cx("facebook")} />, path: "https://www.facebook.com" },
        { icon: <IoLogoGithub className={cx("github")} />, path: "https://github.com/HuyNguyen0722" },
        { icon: <AiFillInstagram className={cx("instagram")} />, path: "https://www.instagram.com" },
        { icon: <AiFillYoutube className={cx("youtube")} />, path: "https://www.youtube.com" },
        { icon: <MdMail className={cx("mail")} />, path: "mailto:namkhon1235@gmail.com" },
        { icon: <RiSteamFill className={cx("steam")} />, path: "https://steamcommunity.com/profiles/76561198255502594/" },
    ];

    const handleClick = (e, path) => {
        e.preventDefault();
        window.open(path, "_blank", "noopener,noreferrer");
    };

    return (
        <div className={cx("container")} >
            <div className={cx("profile-card")} style={{ "--bg-image": `url(${bgImage})` }}>
                <div className={cx("background-image")}></div>
                <div className={cx("profile-image")}>
                    <img src={logo} alt="Profile" />
                </div>
                <h3 className={cx("name")}>Nguyễn Huy</h3>
                <div className={cx("social")}>
                    <ul className={cx("social-contact")}>
                        {socialList.map((item) => (
                            <li className={cx("list-item")}>
                                <Link onClick={(e) => handleClick(e, item.path)}>
                                    {item.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={cx("music-player")}>
                <Music />
            </div>
        </div>
    );
}

export default Rightbar;
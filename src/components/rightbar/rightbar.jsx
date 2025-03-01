import classNames from "classnames/bind";
import styles from "./rightbar.module.scss";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { MdFacebook, MdMail } from "react-icons/md";
import { RiSteamFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { IoPauseOutline, IoPlay } from "react-icons/io5";
import track1 from '../../assets/track1.mp3'
const cx = classNames.bind(styles);

function Rightbar() {

    const album = [
        {id: 1, name: "Suýt nữa thì", single: "Andiez", src: "../../assets/track1.mp3"}
    ]

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handleSeek = (e) => {
        const newTime = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const handleUpdateTime = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handlePlayPause = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    function formatDuration(durationSeconds) {
        if (isNaN(durationSeconds)) return "00:00";
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = Math.floor(durationSeconds % 60);
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    }

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.addEventListener("timeupdate", handleUpdateTime);
        audio.addEventListener("loadedmetadata", () => {
            setDuration(audio.duration);
        });

        return () => {
            audio.removeEventListener("timeupdate", handleUpdateTime);
            audio.removeEventListener("loadedmetadata", () => {
                setDuration(audio.duration);
            });
        };
    }, [audioRef]);

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
        <div className={cx("container")}>
            <div className={cx("container-header")}>
                <div className={cx("imagine")}>
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <h5>Nguyễn Huy</h5>
                </div>
                <div className={cx("social")}>
                    {socialList.map((social, index) => (
                        <Link key={index} className={cx("text")} onClick={(e) => handleClick(e, social.path)}>
                            {social.icon}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={cx("container-middle")}></div>
            <div className={cx("container-bottom")}>
                <div className={cx("media-music")}>

                    <div>
                        
                    </div>

                    <input type="range" min="0" max={duration || 0} value={currentTime} onChange={handleSeek} />

                    <audio ref={audioRef} src={track1} />

                    <div className={cx("track-duration")}>
                        <p>{formatDuration(currentTime)}</p>
                        <p>{formatDuration(duration)}</p>
                    </div>

                    <button onClick={handlePlayPause}>
                        <span>{isPlaying ? <IoPauseOutline /> : <IoPlay />}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Rightbar;

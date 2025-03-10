import classNames from "classnames/bind";
import styles from './music.module.scss'
import logo from '../../../../assets/logo.jpg'
import { FaBackwardStep, FaForwardStep, FaRepeat, FaPause, FaPlay } from "react-icons/fa6";
import { FaRandom } from "react-icons/fa";
import { useRef, useState } from "react";



const cx = classNames.bind(styles);

function Music() {

    const albums = [
        { id: 1, name: "", image: "", path: "" },
        { id: 2, name: "", image: "", path: "" },
    ]

    const [isPlaying, setIsPlaying] = useState(false)
    const [active, setActive] = useState(false)
    const [state, setState] = useState(false)

    const handleToggle = () => {
        setActive(!active)
    }

    const handlePlay = () => {
        setIsPlaying(!isPlaying);

        if (!isPlaying) {
            setState(true);
        } else {
            setState(!state);
        }
    };

    return (
        <div className={cx("player")}>
            <div className={cx("thumbnail")}>
                <div className={cx("circle-thumbnail", { state })}>
                    <img src={logo} alt="test" />
                </div>
            </div>
            <div className={cx("header")}>
                <h3>Suýt nữa thì</h3>
                <h5>Andiez</h5>
            </div>

            <div className={cx("controls")}>
                <div className={cx("repeat")}>
                    <button className={cx("btn-repeat", { active })} onClick={handleToggle}>
                        <FaRepeat />
                    </button>
                </div>
                <div className={cx("prev")}>
                    <FaBackwardStep />
                </div>
                <div className={cx("toggle-play-pause")}>
                    <button onClick={handlePlay}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
                </div>
                <div className={cx("next")}>
                    <FaForwardStep />
                </div>
                <div className={cx("random")}>
                    <button onClick={handleToggle}>
                        <FaRandom />
                    </button>
                </div>
            </div>
        </div>);
}

export default Music;
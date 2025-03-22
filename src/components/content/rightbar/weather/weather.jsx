import classNames from "classnames/bind";
import styles from './weather.module.scss'
import axios from 'axios'
import { useEffect, useState } from "react";
const cx = classNames.bind(styles)

function Weather() {

    const [weatherforecase, setweatherforecase] = useState(null)
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const fetWeather = async () => {
            try {
                const API_KEY = "2312ce5e7d0f1ea2f80b2903d6035601"
                const CITY = "Hanoi"

                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
                );

                const data = response.data;
                setweatherforecase(data);

                const sunrise = data.sys.sunrise * 1000;
                const sunset = data.sys.sunset * 1000;
                const now = Date.now();

                setIsDarkMode(now < sunrise || now > sunset)

            }
            catch {

            }
        }
    })

    return (
        <div className={cx("container")}>

        </div>
    );
}

export default Weather;
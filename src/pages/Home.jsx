import classNames from "classnames/bind";
import Content from "../components/content/content";
import Sidebar from "../components/sidebar/sidebar";
import styles from '../pages/home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    return ( 
        <div className={cx("container")}>
            <Sidebar/>
            <Content/>
        </div>
     );
}

export default Home;
import classNames from 'classnames/bind';
import styles from './content.module.scss'
import Rightbar from './rightbar/rightbar';
const cx = classNames.bind(styles)

function Content() {
    return ( 
        <div className={cx("container")}>
            <div className={cx("container-center")}>

            </div>
            <div className={cx("container-right")}>
                <Rightbar/>
            </div>
        </div>
     );
}

export default Content;
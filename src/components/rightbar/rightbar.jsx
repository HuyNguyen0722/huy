import classNames from 'classnames/bind';
import styles from './rightbar.module.scss'

const cx = classNames.bind(styles)

function Rightbar() {
    return ( 
        <div className={cx("container")}>
            rightbar
        </div>
     );
}

export default Rightbar;
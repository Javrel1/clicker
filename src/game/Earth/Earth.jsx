import style from './style.module.css';
import cookie from '../../resources/cookie.png'
import {useSelector, useDispatch} from "react-redux"
import {increment} from "../../store/reducer.jsx"
import * as React from 'react';



function Earth() {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className={style.container}>
            <div id="game" className={style.game}>
                <div className={style.count}>
                    <div className={style.countBox}>
                        {count}
                    </div>
                </div>
                <div className={style.cookieHold}>
                        <img onClick={()=>{
                            dispatch(increment);
                        }} className={style.cookie} src={cookie}/>
                </div>
            </div>
        </div>
    )
}
export default Earth;



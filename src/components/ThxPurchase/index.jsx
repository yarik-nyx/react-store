import React from 'react'

import styles from './ThxPurchase.module.scss'

import { useDispatch } from 'react-redux';
import { clearItems } from '../../redux/slices/cartSlice';

const ThxPurchase = () => {
    const dispatch = useDispatch()
    dispatch(clearItems())
    return (
        <div className={styles.root}> 
            <h1>      
                <span>😨</span>      
                <br/>
                Спасибо за заказ 
            </h1>
            <p className={styles.desc}>Сообщение отправлено на почту.</p>
        </div>

    )
}

export default ThxPurchase
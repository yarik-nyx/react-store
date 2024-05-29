import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addItem, removeItem, removeItems } from "../redux/slices/cartSlice";

const CartItem = ({id, idPage, title,type, price, count, imageurl, letter, link}) => {

    const dispatch = useDispatch()

    const onClickPlus = () => {
        let item = {}
        if(!type || !letter){
             item = {
                id,
                price,
            }
        } else {
            item = {
                id,
                price,
                letter,
                type
            }
        }
        dispatch(addItem(item))
    }

    const onClickMinus = () => {
        let item = {}
        if(!type || !letter){
             item = {
                id,
                price,
            }
        } else {
            item = {
                id,
                price,
                letter,
                type
            }
        }
        dispatch(removeItem(item))
    }

    const onClickClear = () => {
        let item = {}
        if(!type || !letter){
             item = {
                id,
                price,
            }
        } else {
            item = {
                id,
                price,
                letter,
                type
            }
        }
        dispatch(removeItems(item))
    }

    return (
        <div class="cart">
            <div class="content__items">
                <div class="cart__item">
                        <div className="cart__item-img">
                        <Link key={id} to={`/${link}/${idPage}`}>
                            <img
                            className="item-block__image"
                            src={imageurl}
                            alt="Item"
                            />
                        </Link>
                        </div>
                        <div className="cart__item-info">
                        <Link key={id} to={`/${link}/${idPage}`}>
                                <h3>{title}</h3>
                                {type && letter  && <p>{type.type}, {letter.letter}</p>}
                            </Link>
                        </div>
                    
                    <div class="cart__item-count">
                        <div onClick={onClickMinus} class="button button--outline button--circle cart__item-count-minus">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                                <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                            </svg>
                        </div>
                        <b>{count}</b>
                        <div onClick={onClickPlus} class="button button--outline button--circle cart__item-count-plus">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                                <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                            </svg>

                        </div>
                    </div>
                    <div class="cart__item-price">
                        <b>{count * price} ₽</b>
                    </div>
                    <div class="cart__item-remove">
                        <div onClick={onClickClear} class="button button--outline button--circle">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                                <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                            </svg>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItem
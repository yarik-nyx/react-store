import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

function ItemBlock({value, link})
{

    const {id, price, title, imageurl, letters, types, rating} = value
    
    let [procPrice, setProcPrice] = useState(price)

    const dispatch = useDispatch()

    let [count, setCount] = useState(0)

    const onClickAdd = () => {
        setCount(++count)
        let item = {}
        if(!types || !letters){
             item = {
                id: id+link,
                idPage: id,
                title,
                link,
                price,
                imageurl,
            }
        } else {
             item = {
                id:id+types[typeCurr].type + letters[letterCurr].letter,
                idPage: id,
                link,
                title,
                price:procPrice,
                imageurl,
                type: types[typeCurr],
                letter: letters[letterCurr]
            }
        }

        dispatch(addItem(item))
    }

    let [typeCurr, setTypeCurr] = useState(0)

    let [letterCurr, setLetterCurr] = useState(0)

    return (
        <div className="item-block-wrapper">
             <div className="item-block">
                <Link key={value.id} to={`/${link}/${value.id}`}>
                <img
                    className="item-block__image"
                    src={imageurl}
                    alt="Item"
                />
                <h4 className="item-block__title">{title}</h4>
                </Link>
                {types && letters  && 
                    <div className="item-block__selector">
                    <ul>
                        {
                            types.map((value, i) => (
                                <li key={i} onClick={() => {
                                    setTypeCurr(i)
                                    if(i === 0){
                                        if(letterCurr === 1){
                                            setProcPrice(price - Math.round(price * 0.1))
                                        } else if (letterCurr === 2) {
                                            setProcPrice(price + Math.round(price * 0.1))
                                        } else {
                                            setProcPrice(price)
                                        }
                                    } else {
                                        if(letterCurr === 1){
                                            setProcPrice(Math.round(price - price * 0.1) +  600)
                                        } else if (letterCurr === 2) {
                                            setProcPrice(Math.round(price + price * 0.1) +  600)
                                        } else {
                                            setProcPrice(price + 600)
                                        }
                                    }
                                    } 
                                } className={ typeCurr === i ? 'active' : ''}>{value.type}</li>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            letters.map((value, index) => (
                                <li key={index} onClick={() => 
                                    {
                                        setLetterCurr(index)
                                        if(index === 1){
                                            setProcPrice(typeCurr === 1 ? (Math.round(price - price * 0.1)) + 600 : Math.round(price - price * 0.1))
                                        } else if (index === 2){
                                            setProcPrice(typeCurr === 1 ? (Math.round(price + price * 0.1)) + 600 : Math.round(price + price * 0.1))
                                        } else {
                                            setProcPrice(typeCurr === 1 ? price + 600 : price)
                                        }
                                }} className={letterCurr === index ? 'active' : ''}>{value.letter}</li>
                            ))
                        }
                    </ul>
                </div>
                }
                
                <div className="item-block__bottom">
                    <div className="item-block__price">от {procPrice} ₽</div>
                    
                    <button className="button button--outline button--add" onClick={onClickAdd}>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {count > 0 && <i>{count}</i>}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ItemBlock
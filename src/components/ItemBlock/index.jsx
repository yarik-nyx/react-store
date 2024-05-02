import React, {useState} from 'react'

import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

function ItemBlock({id, price, title, image, letters, types, rating})
{

    
    const dispatch = useDispatch()

    let [count, setCount] = useState(0)

    const onClickAdd = () => {
        setCount(++count)
        let item = {}
        if(!types || !letters){
             item = {
                id,
                title,
                price,
                image,
            }
        } else {
             item = {
                id,
                title,
                price,
                image,
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
                <img
                    className="item-block__image"
                    src={image}
                    alt="Item"
                />
                <h4 className="item-block__title">{title}</h4>
                {types && letters  && 
                    <div className="item-block__selector">
                    <ul>
                        {
                            types.map((value, i) => (
                                <li key={i} onClick={() => setTypeCurr(i)} className={ typeCurr === i ? 'active' : ''}>{value}</li>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            letters.map((value, index) => (
                                <li key={index} onClick={() => setLetterCurr(index)} className={letterCurr === index ? 'active' : ''}>{value}</li>
                            ))
                        }
                    </ul>
                </div>
                }
                <div className="item-block__bottom">
                    <div className="item-block__price">от {price} ₽</div>
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
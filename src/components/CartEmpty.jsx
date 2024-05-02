import React from "react";

import { Link } from "react-router-dom";

const CartEmpty = () => {
    return (
        <div class="content">
            <div class="container container--cart">
                <div class="cart cart--empty">
                    <h2>Корзина пустая <icon>😕</icon></h2>
                    <p>
                    Вероятней всего, вы еще не выбрали комплектющие.<br />
                    Для того, чтобы посмотреть комплектующие, перейди на главную страницу.
                    </p>
                    <Link to="/" class="button button--black">
                    <span>Вернуться назад</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartEmpty
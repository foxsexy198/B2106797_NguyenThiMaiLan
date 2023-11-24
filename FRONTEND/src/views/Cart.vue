<template>
    <div class="shopping-cart">
        <div class="cart-empty"></div>
        <div class="heading-cart">
            <input type="checkbox" name="" value="">
            <p class="all-product">All product</p>
        </div>

        <div multiple class="list-cart-product">
                <div class="cart-product" v-for="product in products" :key="product.id">
                    <input class="cart-product-select" type="checkbox" name="" value="">
                    <img :src="product.thumbnail" alt="">
                    <span class="cart-product-name">
                        {{ products.name}}
                    </span>
                    <span class="cart-product-price">
                        Price: {{ product.price }}
                    </span>
                    <label class="cart-product-quantity" for="quantity">Quantity:</label>
                    <div class="quantity-input">
                        <button class="quantity-decrease">-</button>
                        <input type="number" id="quantity" name="quantity" min="1" max="10" step="1" value="1">
                        <button class="quantity-increase">+</button>
                    </div>
                    <span class="cart-product-total">
                        Tổng cộng: 10000đ
                    </span>
                    <span class="cart-product-remove">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                            <path d="M3.125 3.16663V17.3333H16.875V3.16663H3.125Z" fill="#FF7F96" stroke="black" stroke-linejoin="round"/>
                            <path d="M8.16675 7.33325V12.7499" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.8334 7.33325V12.7499" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M0.833374 3.16663H19.1667" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.33337 3.16663L7.84083 0.666626H12.1895L13.6667 3.16663H6.33337Z" fill="#FF7F96" stroke="black" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <button class="cart-product-buy">Buy</button>
                       
                </div>
        </div>
    </div>
</template>

<script>
    export  default {
        name: 'Cart',
        data() {
            return {
                products: [
                    {
                    "name": "Rambutan",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "25000",
                    "quantity": 15,
                    "available": true,
                    "thumbnail": "https://images.meesho.com/images/products/174364463/tqqsn_512.webp"
                    },
                    {
                    "name": "Durian",
                    "type": "hesperidium",
                    "classify": "1kg",
                    "price": "80000",
                    "quantity": 30,
                    "available": true,
                    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVESwWl8ilWhCilOH7IjVQ_L3oTvZM_q3opQxTsNqOMyBNxeqMmmCdLIyJSW_8_tklAmg&usqp=CAU"
                    },
                    {
                    "name": "Start apple",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "50000",
                    "quantity": 10,
                    "available": true,
                    "thumbnail": "https://seed2plant.in/cdn/shop/products/WhatsAppImage2022-05-07at11.39.06AMcopy_1100x_e647f284-3c98-40c7-ae7d-9a0366c60425_800x.webp?v=1674828625"
                    },
                    {
                    "name": "Avocado",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "15000",
                    "quantity": 20,
                    "available": true,
                    "thumbnail": "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/01/03161820/shutterstock_785296315-1-1-810x541.jpg"
                    },
                    {
                    "name": "Jack fruit",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "10000",
                    "quantity": 25,
                    "available": true,
                    "thumbnail": "https://images-cdn.welcomesoftware.com/Zz01Y2YwNGFlODk4MzAxMWVjOWUyNmI2YmVlZDE5OGU3ZQ==/Untitled.jpeg?width=1366"
                    },
                    {
                    "name": "Mangosteen",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "45000",
                    "quantity": 15,
                    "available": true,
                    "thumbnail": "https://m.media-amazon.com/images/I/51Z3L5qVkvL._AC_UF1000,1000_QL80_.jpg"
                    }
                    
                ]
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
    const decreaseButton = document.querySelector('.quantity-decrease');
    const increaseButton = document.querySelector('.quantity-increase');
    const quantityInput = document.querySelector('#quantity');

    decreaseButton.addEventListener('click', function() {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    increaseButton.addEventListener('click', function() {
        if (parseInt(quantityInput.value) < parseInt(quantityInput.max)) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }
    });
});
</script>

<style scoped>
    .cart-empty {
        height: 5rem;
    }

    /* Heading cart */
    .shopping-cart {
        display: flex;
        flex-direction: column;
    }

    .heading-cart {
        display: flex;
        font-size: 1.3rem;
        padding: 2rem 0 1.5rem 3rem;
    }

    .heading-cart input {
        margin-right: 1rem;
        width: 1.3rem;
    }

    /* Product */
    .list-product {
        display: flex;
        flex-direction: column;
    }

    .cart-product {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 10px;
    }

    .cart-product-select {
        width: 1.1rem;
        height: 1.1rem;
    }
    .cart-product img {
        width: 5rem;
        height: 5rem;
        margin-left: -3rem;
        object-fit: cover;
    }

    .cart-product-name {
        font-size: 1.3rem;
        margin-left: -3rem;
    }

    .cart-product-quantity {
        margin-right: -6rem;
    }

    .cart-product-total {
        color: red;
    }

    .cart-product-buy {
        padding: 0.5rem 2rem;
        font-size: 1rem;
        border: gray 1px solid;
        border-radius: 40px 30px 20px 20px;
        color: #fff;
        background-color: var(--main-color);
    }

    /* Button quantity */
    .quantity-input {
        display: flex;
        align-items: center;
    }

    .quantity-input button {
        font-size: 1em;
        padding: 5px 10px;
        background-color: #f0f0f0;
        border: none;
        cursor: pointer;
    }

    .quantity-input input {
        font-size: 1em;
        width: 30px;
        text-align: center;
    }
</style>
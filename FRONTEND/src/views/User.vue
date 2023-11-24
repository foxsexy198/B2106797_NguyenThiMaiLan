<template>
    <div class="page-user">
        <div class="user-empty"></div>
        <div class="user-person">
            <img src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/03/avatar-nu-nguoi-that-1.jpg?ssl%5Cu003d1" alt=" avata">
            <span class="user-person-name">Mai Lan</span>
        </div>

        <div class="user-info">
            <ul class="user-info-person">
                <p class="user-info-title">Information</p>
                <li class="user-info-name">Full name:   Nguyen Thi Mai Lan</li>
                <li class="user-info-date">Birthday:    </li>
                <li class="user-info-mail">Email:   lankc3939@gmail.com</li>
                <li class="user-info-phone">Phone:  077707007</li>
                <li class="user-info-sex">Sex:   Female</li>
                <li class="user-info-country">Country:  Viet Nam</li>
                <button class="management-order">Order management</button>
            </ul>
            
            <div class="user-info-bought">
                <div class="product-container" v-for="product in products" :key="product.id">
                    <!-- <div class="user-item-bought"> -->
                        <div class="product-img">
                            <img :src="product.thumbnail" alt="Product Image" class="product-img">
                        </div>
                        <p class="item-bought-name">{{ product.name }} - {{ product.quantity }}</p>
                        <span class="item-bought-price">{{ product.price }}</span>
                        <button class="item-bought-repurchase">Repurchase</button>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export  default {
        name: 'User',
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
</script>

<style scoped>
    .user-empty { 
        height: 5rem;
    }

    /* User person */
    .user-person {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .user-person img {
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        object-fit: cover;
    }

    .user-person-name {
        font-size: 2.5rem;
        font-weight: bold;
        opacity: 0.7;
        font-family:'Courier New', Courier, monospace;
        padding: 1rem;
        margin-right: -1rem;
        letter-spacing: 1rem;
    }

    /* User info */
    .user-info {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .user-info-person {
        display: flex;
        width: 40%;
        flex-direction: column;
        justify-content: center;
        margin-top: -364px;
        margin-left: 20px;
        border-right: #ece5e5 1px dotted;
    }

    .user-info-person li {
        padding: 10px ;
        font-size: 20px;
    }
   
    .management-order {
        color: #4f4b4be5;
        background: rgb(190, 198, 178);
        border: 1px solid #ece5e5 ;
        width: 35%;
        font-size: 18px;
        margin-top: 10px;
        padding: 5px;
        border-radius: 10px;
    }
    /* Repurchase */
    .user-info-bought {
        margin-top: 100px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: calc(100% - 240px);
    }
    .product-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 1.1rem;
        background: white;
        width: calc(20% - 20px);
        margin-right: 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .product-img {
        width: 100%;
        aspect-ratio: 1;
        /* background: white; */
        overflow: hidden;
        margin-bottom: 10px;
    }

    .product-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* border-radius: 8px; */
    }
    .user-info-bought p, .user-info-person p {
        text-align: center ;
        font-size: 1.4rem;
        margin-top: 1rem;
        color: #75757575;
    }


    .item-bought-name {
        padding: 0.2rem 0;
        font-size: 1.2rem;
        text-align: center;
    }
    .item-bought-price {
        text-align: center;
        padding: 0.2rem 0;
    }

    .item-bought-repurchase {
        padding: 0.5rem;
        font-size: 1rem;
        border: none;
        margin: 0.5rem 0;
        border-radius: 20% 0 0 0;
        color: #ece5e5;
        background-color: #cd0000;
    }

    .item-bought-repurchase:hover {
        background-color: var(--main-color);
    }
</style>
<template>
    <div class="body">
        <div class="body-bar">
            <div class="bar-title">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 19H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> -->
                <div>Product portfolio</div>
            </div>

            <div class="bar-box">
                <a class="bar-item">Caryopsis</a>
                <a class="bar-item">Berry</a>
                <a class="bar-item">Pseudocarp</a>
                <a class="bar-item">Esperidium</a>
                <a class="bar-item">Drupe</a>
                <a class="bar-item">Pepo</a>
                <a class="bar-item">Vegetable</a>
            </div>            
        </div>

        <div class="body-product">
            <div  class="product-item" v-for="product in products" :key="product.id">
                <div class="product-img">
                    <img :src="product.thumbnail" alt="Product Image">
                </div>
                <p class="product-name">{{ product.name }} - {{ product.classify }}</p>
                <span class="product-price">{{ product.price }}</span>
                <button class="product-add-cart">Add cart</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',

        data () {
            return {
                products: [

                    {
                    "name": "Siamese banana",
                    "type": "caryopsis",
                    "classify": "1kg",
                    "price": "15000",
                    "quantity": 30,
                    "available": true,
                    "thumbnail": "https://binhdienonline.com/thumbs_size/product/2021_04/chuoi-xiem/[550x550-cr]chuoi-su--38.jpg"
                    },
                    {
                    "name": "Cherry",
                    "type": "berry",
                    "classify": "1kg",
                    "price": "300000",
                    "quantity": 20,
                    "available": true,
                    "thumbnail": "https://hoaquafuji.com/storage/app/media/cac-loai-cherry-nhap-khau-2-min.jpg"
                    },
                    {
                    "name": "Kiwi",
                    "type": "caryopsis",
                    "classify": "1kg",
                    "price": "150000",
                    "quantity": 20,
                    "available": true,
                    "thumbnail": "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg"
                    },
                    {
                    "name": "BlueBerry",
                    "type": "berry",
                    "classify": "1kg",
                    "price": "370000",
                    "quantity": 15,
                    "available": true,
                    "thumbnail": "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/blueberry_ket_hop_cao_bach_qua_cap_doi_hoan_hao_cuc_tot_cho_nao_bo_1_6191c2bcf1.jpg"
                    },
                    {
                    "name": "Raspberry",
                    "type": "berry",
                    "classify": "1kg",
                    "price": "350000",
                    "quantity": 10,
                    "available": true,
                    "thumbnail": "https://cdn.tgdd.vn/Files/2021/07/29/1371615/phuc-bon-tu-mam-xoi-la-gi-co-tac-dung-gi-co-phai-la-qua-dau-tam-khong-202107291524135907.jpg"
                    },
                    {
                    "name": "Strawberry",
                    "type": "pseudocarp",
                    "classify": "1kg",
                    "price": "120000",
                    "quantity": 25,
                    "available": true,
                    "thumbnail": "https://2sao.vietnamnetjsc.vn/images/2023/03/16/15/43/dau-tay3.jpg"
                    },
                    {
                    "name": "Orange Navel",
                    "type": "esperidium",
                    "classify": "1kg",
                    "price": "125000",
                    "quantity": 18,
                    "available": true,
                    "thumbnail": "https://hoaquafuji.com/storage/app/media/cam-ruot-do-my-fuji-0-3.jpg"
                    },
                    {
                    "name": "Black grapes",
                    "type": "berry",
                    "classify": "1kg",
                    "price": "120000",
                    "quantity": 10,
                    "available": true,
                    "thumbnail": "https://familyfruits.com.vn/wp-content/uploads/2023/02/01.jpeg"
                    },
                    {
                    "name": "Black finger grapes",
                    "type": "berry",
                    "classify": "1kg",
                    "price": "280000",
                    "quantity": 9,
                    "available": true,
                    "thumbnail": "https://media.loveitopcdn.com/1254/tac-dung-nho-ngon-tay-nhobonmuacom-2.jpeg"
                    },
                    {
                    "name": "Pink finger grapes",
                    "type": "berry",
                    "classify": "1kg",
                    "price": "110000",
                    "quantity": 10,
                    "available": true,
                    "thumbnail": "https://down-vn.img.susercontent.com/file/b3b49a532424c1a579a18ea9caaa37e5"
                    },
                    {
                    "name": "Milk grapes",
                    "type": "berry",
                    "classify": "1kg",
                    "price": "800000",
                    "quantity": 5,
                    "available": true,
                    "thumbnail": "https://cdn.luxuryfruit.vn/wp-content/uploads/2022/09/nho-sua-han-quoc-shine-muscat-2.jpg"
                    },
                    {
                    "name": "Na",
                    "type": "caryopsis",
                    "classify": "1kg",
                    "price": "45000",
                    "quantity": 9,
                    "available": true,
                    "thumbnail": "https://hungviet-vhr.org/wp-content/uploads/2022/05/qua-na-28-8-2020.jpg"
                    },
                    {
                    "name": "Sapote",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "40000",
                    "quantity": 9,
                    "available": true,
                    "thumbnail": "https://www.lakshmistores.com/cdn/shop/products/fresh-sapota-500x500-1.jpg?v=1639172682"
                    },
                    {
                    "name": "Longan",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "30000",
                    "quantity": 10,
                    "available": true,
                    "thumbnail": "https://nhanong24h.com/wp-content/uploads/2022/12/nhan-long-hung-yen-co-mau-vang-sam-da-tron-bong..jpg"
                    },
                    {
                    "name": "Litchi",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "35000",
                    "quantity": 10,
                    "available": true,
                    "thumbnail": "https://anh.24h.com.vn/upload/2-2017/images/2017-06-13/1497340768-149734043880128-qua_vai.jpg"
                    },
                    {
                    "name": "Pome",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "79000",
                    "quantity": 8,
                    "available": true,
                    "thumbnail": "https://i.pinimg.com/736x/30/c7/f4/30c7f4deadc45debb5c568f7890190d5.jpg"
                    },
                    {
                    "name": "Pomegranate",
                    "type": "hesperidium",
                    "classify": "1kg",
                    "price": "55000",
                    "quantity": 20,
                    "available": true,
                    "thumbnail": "https://english.ahram.org.eg/Media/News/2020/12/15/2020-637436690667459419-745.jpg"
                    },
                    {
                    "name": "Pear",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "65000",
                    "quantity": 10,
                    "available": true,
                    "thumbnail": "https://ogden_images.s3.amazonaws.com/www.motherearthliving.com/images/2012/02/20115516/pears-in-blue-bowl.jpg"
                    },
                    {
                    "name": "Guava",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "20000",
                    "quantity": 12,
                    "available": true,
                    "thumbnail": "https://images2.thanhnien.vn/528068263637045248/2023/9/17/2-oi-shutterstock-1694953624149847722825.jpg"
                    },
                    {
                    "name": "Peach",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "30000",
                    "quantity": 14,
                    "available": true,
                    "thumbnail": "https://www.tasteofhome.com/wp-content/uploads/2019/06/peaches-shutterstock_297863489-1.jpg?fit=700%2C700"
                    },
                    {
                    "name": "Crispy persimmons",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "25000",
                    "quantity": 25,
                    "available": true,
                    "thumbnail": "https://foody24h.vn/uploads/services/hong-gion-da-lat-1449-2021-09-04.jpg"
                    },
                    {
                    "name": "Soft persimmon",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "35000",
                    "quantity": 15,
                    "available": true,
                    "thumbnail": "https://azurestandard.imgix.net/cms/cut-persimmons.jpg?auto=format,compress&crop=faces,edges&w=1200&h=630"
                    },
                    {
                    "name": "Watermelon",
                    "type": "pepo",
                    "classify": "1kg",
                    "price": "12000",
                    "quantity": 30,
                    "available": true,
                    "thumbnail": "https://hinh365.com/wp-content/uploads/2020/06/thu-vien-anh-dep-ve-qua-dua-hau-voi-khoan-100-619-tam-anh-chat-luong-cuc-cao.jpg"
                    },
                    {
                    "name": "Melon",
                    "type": "pepo",
                    "classify": "1kg",
                    "price": "45000",
                    "quantity": 20,
                    "available": true,
                    "thumbnail": "https://hoanmy.com/wp-content/uploads/2023/07/phan-biet-dua-luoi-1024x576.jpg"
                    },
                    {
                    "name": "Grapefruit",
                    "type": "hesperidium",
                    "classify": "1kg",
                    "price": "20000",
                    "quantity": 20,
                    "available": true,
                    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4VfbqJkBq8UoAB96fENUkJmTFjdwiMlyDDGDnQI_mVSCv7TBxsUbvG0sf_IooOp9hUM&usqp=CAU"
                    },
                    {
                    "name": "Tangerine",
                    "type": "hesperidium",
                    "classify": "1kg",
                    "price": "40000",
                    "quantity": 22,
                    "available": true,
                    "thumbnail": "https://specialtyproduce.com/sppics/5867.png"
                    },
                    {
                    "name": "Mango",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "20000",
                    "quantity": 7,
                    "available": true,
                    "thumbnail": "https://www.spicestore.hk/2651-large_default/indian-alphonso-mango-3kg.jpg"
                    },
                    {
                    "name": "Plum",
                    "type": "drupe",
                    "classify": "1kg",
                    "price": "30000",
                    "quantity": 10,
                    "available": true,
                    "thumbnail": "https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1bXxlbnwwfHwwfHx8MA%3D%3D"
                    },
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
    .body {
        margin-top: 92px;
    }

    .body-bar {
        position: fixed;
        left: 0px;
        top: 92px;
        width: 200px;
        /* background: red; */
        /* border: 3px solid black; */
    }
    .bar-box {
        display: flex;
        flex-direction: column;
    }
    .bar-title {
        padding: 1rem 1.5rem;
        font-size: 1.3rem;
        color: #fff;
        background-color: var(--green-color1);
    }

    .bar-item {
        font-size: 1.1rem;
        border-bottom: #757575 1px solid;
        border-left: #757575 1px solid;
        border-right: #757575 1px solid;
        
        padding: 0.5rem 0.5rem 0.5rem 1.5rem;
    }

    .bar-item:hover {
        background-color: rgb(213, 246, 222);
        transform: scale(1.02);
    }

 
    .body-product {
        margin-left: 210px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: calc(100% - 240px);
        /* background: green; */
        
    }

    .product-item {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 1.1rem;
        background: white;
        width: calc(20% - 20px);
        margin-left: 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
        /* padding: 30px; */
        overflow: hidden;
        /* background: red; */
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

    .product-name {
        padding: 0.2rem 0;
        font-size: 1.2rem;
        text-align: center;
    }
    .product-price {
        text-align: center;
        padding: 0.2rem 0;
    }

    .product-add-cart {
        font-family: sans-serif;
        font-weight: bold;
        padding: 0.5rem;
        font-size: 1rem;
        border: none;
        margin: 0.5rem 0;
        border-radius: 20% 0 0 0;
        color: #000;
        background-color: #d3efb1;
        background-color: #a9ff40;
    }

    .product-add-cart:hover {
        background-color: var(--main-color);
    }
</style>
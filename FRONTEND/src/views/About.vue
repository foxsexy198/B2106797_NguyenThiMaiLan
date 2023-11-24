<template>
    <div class="about">
        <div class="about-empty"></div>
        <div class="about-us">
            <h3 class="about-title">Welcome To Lysian Store</h3>
            <h6 class="about-born">Since 2023</h6>
            <div class="about-intro">
                <p class="about-content">
                    The Lysian Store provides conventional, exotic fruits and dry fruits through direct source since 1976. Our priority is to deliver fresh and pesticide free products to our customers. Our brand is committed to deliver you the best quality of fresh and nutritious fruits and dry fruits At your place at a low price.
                </p>  

                <img src="https://thefruitshop.in/images/about/lemon-banner.png" alt="Lysian" class="about-img">
            </div>
        </div>

        <div class="about-choose">
            <h3 class="about-title">Why Choose Us</h3>
            <div class="choose-parent">
                <img src="https://thefruitshop.in/images/about/medium-banner.png" alt="Lysian">
                <ul class="choose-parent-item">
                    <li class="choose-item choose-quality" >
                        <p class="choose-item-title">Quality</p>
                        <p class="choose-item-text">We facilitate our customers with the farm-fresh quality products. You never deliver stale or contaminated food to them.</p>
                    </li>
    
                    <li class="choose-item choose-healthy">
                        <p class="choose-item-title">Healthy</p>
                        <p class="choose-item-text">Harmful pesticide free fruits are always more nutritious and healthy.</p>
                    </li>
    
                    <li class="choose-item choose-fresh">
                        <p class="choose-item-title">Fresh</p>
                        <p class="choose-item-text">We offer you fresh fruits and vegetables which are sourced from organic farms so that you can lead a healthier life</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
    }
</script>

<style scoped>
    .about-empty {
        margin-top: 5rem;
    }

    /* Intro */
    .about-us {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .about-title {
        font-size: 1.5rem;
        padding: 1rem;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .about-born {
        font-size: 1rem;
        padding: 0 1rem 1rem 1rem;
        font-style:italic ;
        font-weight: 400;
        color: #938d8d;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .about-intro {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .about-content {
        width: 40%;
        padding: 1rem;
        margin-top: -7rem;
        word-spacing: 10px;
        letter-spacing: 0.05rem;
        line-height: 1.5rem;
    }

    /* Quality */
    .about-choose {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
    }

    .choose-parent {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: -3rem;
    }

    .choose-parent img {
        width: auto;
        height: auto;
        object-fit: cover;
    }

    .choose-parent-item {
        display: flex;
        flex-direction: column;
        margin: -3rem 2rem 0 2rem;
    }

    .choose-item {
        padding: 1rem;
        border-bottom: #75757575 1px solid;
    }

    .choose-item-title {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .choose-item-text {
        font-size: 1rem;
        letter-spacing: 0.05rem;
    }
</style>
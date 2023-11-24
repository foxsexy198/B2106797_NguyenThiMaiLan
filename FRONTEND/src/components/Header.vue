<template>
    <div class="header">
        <div class="header-logo">
             <router-link :to="{ path: '/' }">
            <img src="../assets/logo.svg" alt="logo" class="logo-img">
             <span href="#" class="logo-name">Lysian</span>
             </router-link>
        </div>

        <div class="header-search">
            <input type="text" class="search-box" placeholder="What you search?">
            <button class="search-btn">Search</button>
        </div>

        <ul class="header-nav">
            <li class="nav-item"><a href="/">Home</a></li>
            <li class="nav-item"><router-link :to="{ path: '/about' }">About Us</router-link></li>
            <li class="nav-item"><router-link :to="{ path: '/contact' }">Contact Us</router-link></li>
        </ul>

        <div class="header-user">
            <router-link :to="{ path: '/cart' }" class="user-item cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                    <path d="M19.5613 3.87359C19.1822 3.41031 18.5924 3.12873 17.9821 3.12873H5.15889L4.75914 1.63901C4.52718 0.773016 3.72769 0.168945 2.80069 0.168945H0.653099C0.295301 0.168945 0 0.450523 0 0.793474C0 1.13562 0.294459 1.418 0.653099 1.418H2.80069C3.11654 1.418 3.39045 1.61936 3.47434 1.92139L6.04306 11.7077C6.27502 12.5737 7.07451 13.1778 8.00152 13.1778H16.4028C17.3289 13.1778 18.1507 12.5737 18.3612 11.7077L19.9405 5.50575C20.0877 4.941 19.9619 4.33693 19.5613 3.87365L19.5613 3.87359ZM18.6566 5.22252L17.0773 11.4245C16.9934 11.7265 16.7195 11.9279 16.4036 11.9279H8.00154C7.68569 11.9279 7.41178 11.7265 7.32789 11.4245L5.49611 4.39756H17.983C18.1936 4.39756 18.4042 4.49824 18.5308 4.65948C18.6567 4.81994 18.7192 5.0213 18.6567 5.22266L18.6566 5.22252Z" fill="#17696A"/>
                    <path d="M8.44437 13.9815C7.2443 13.9815 6.25488 14.9277 6.25488 16.0752C6.25488 17.2227 7.24439 18.1689 8.44437 18.1689C9.64445 18.1697 10.6339 17.2235 10.6339 16.0758C10.6339 14.9282 9.64436 13.9813 8.44437 13.9813V13.9815ZM8.44437 16.9012C7.9599 16.9012 7.58071 16.5386 7.58071 16.0753C7.58071 15.612 7.9599 15.2494 8.44437 15.2494C8.92885 15.2494 9.30804 15.612 9.30804 16.0753C9.30722 16.5189 8.90748 16.9012 8.44437 16.9012Z" fill="#17696A"/>
                    <path d="M15.6875 13.9815C14.4875 13.9815 13.498 14.9277 13.498 16.0752C13.498 17.2227 14.4876 18.1689 15.6875 18.1689C16.8875 18.1689 17.877 17.2227 17.877 16.0752C17.8565 14.9284 16.8875 13.9815 15.6875 13.9815ZM15.6875 16.9011C15.2031 16.9011 14.8239 16.5385 14.8239 16.0753C14.8239 15.612 15.2031 15.2494 15.6875 15.2494C16.172 15.2494 16.5512 15.612 16.5512 16.0753C16.5512 16.5189 16.1506 16.9011 15.6875 16.9011Z" fill="#17696A"/>
                </svg>
            </router-link>
           
            <router-link :to="{ path: '/users' }" class="user-item user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_703_103)">
                            <path d="M10.0135 0C13.4268 0 16.2037 2.6446 16.2037 5.8954C16.2037 8.0994 14.9306 10.0274 13.0799 11.0196C16.8402 12.1766 19.617 15.3172 19.9639 19.229C20.0796 20.2204 18.1125 20.2759 18.0551 19.3392C17.6498 15.4274 14.1209 12.4524 10.0135 12.4524C5.84799 12.4524 2.37732 15.4274 1.97202 19.3392C1.85635 20.2759 -0.110763 20.2204 0.00490547 19.229C0.410142 15.372 3.18683 12.1766 6.88892 11.0196C5.03747 10.0282 3.76517 8.0992 3.76517 5.8954C3.76517 2.6446 6.60017 0 10.0135 0ZM10.0135 1.87344C7.64198 1.87344 5.73224 3.6914 5.73224 5.89524C5.73224 8.15384 7.64109 9.97264 10.0135 9.97264C12.3277 9.97264 14.2364 8.15468 14.2364 5.89524C14.2364 3.69124 12.3275 1.87344 10.0135 1.87344Z" fill="#17696A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_703_103">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
    .header {
        opacity: 0.8;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-around;
        top: 0;
        right: 0;
        left: 0;
        box-shadow: 0 0 1px 0;
        background-color: #fff;
    }

    .header-logo {
        display: flex;
        align-items: center;
        padding: 1rem 0 0 0;
    }

    .logo-img {
        width: 3rem;
        height: 3rem;
    }

    .logo-name {
        font-size: 2rem;
        margin-left: 1rem;
    }

    .header-search {
        display: flex;
    }

    .search-box {
        padding: 0.5rem 3rem;
        font-size: 0.9rem;
        border: rgb(121, 121, 121) 1px  solid;
        border-radius: 0.3rem 0 0 0.3rem;
    }

    .search-btn {
        padding: 0.5rem;
        font-size: 0.9rem;
        color: #fff;
        border: rgb(121, 121, 121);
        border-radius: 0 0.3rem 0.3rem 0;
        background-color: var(--main-color);
    }

    .header-nav {
        display: flex;
        font-size: 1rem;
        justify-content: space-between;
    }

    .nav-item {
        padding: 1rem;
    }

    .header-user {
        display: flex;
    }

    .user-item {
        padding-left: 1rem;
    }

    .user-item:hover {
        transform: scale(1.03);
    }
</style>
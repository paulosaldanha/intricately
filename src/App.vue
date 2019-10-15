<template>
    <div>
        <ul class="nav">
            <li>
                <img src="">
            </li>
            <li>
                <input type="text" name="search" id="search" placeholder="Seach Companies">
            </li>    
            <li>
                <small>OR</small> <button>New Smart List</button>
            </li> 
            <li>
                <a href="">Prospect</a>
                <ul class="nav__sub-menu">
                <li>
                    <a href="">Child Link A</a>
                </li>
                <li>
                    <a href="">Child Link B</a>
                </li>
                <li>
                    <a href="">Child Link C</a>
                </li>
                </ul>
            </li>
            <li>
                <a href="">Alert</a>
                <ul class="nav__sub-menu">
                <li>
                    <a href="">Child Link A</a>
                </li>
                <li>
                    <a href="">Child Link B</a>
                </li>
                <li>
                    <a href="">Child Link C</a>
                </li>
                </ul>
            </li>
            <li>
                <a href="">Learn</a>
                <ul class="nav__sub-menu">
                <li>
                    <a href="">Child Link A</a>
                </li>
                <li>
                    <a href="">Child Link B</a>
                </li>
                <li>
                    <a href="">Child Link C</a>
                </li>
                </ul>
            </li>
            <li>
                <img src="" alt="Chrome">
            </li>
            <li>
                <img src="" alt="User">
            </li>    
        </ul>
        <ul class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li>Company Data</li>
        </ul>
        <div class="sidemenu">
            <router-link :to="'/data'">Home</router-link>
            <router-link :to="{path: 'data'}">Home</router-link>
            <router-link :to="{name: 'data'}">Home</router-link>
            <router-link to="/data">Company Data</router-link>
            <router-link to="/page">Company Page</router-link>
        </div>

        <router-view></router-view>

        <div class="footer">
            <p>Footer</p>
        </div>
    </div>    
</template>

<script>
export default {};
</script>
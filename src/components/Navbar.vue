<template>
<div class="navbar">
    <nav class="nav-extended indigo ">
        <div class="nav-content blue darken-2 center">
            <router-link :to="{ name: 'Home' }">
                <span class="nav-title">SHOP LIST</span>
            </router-link>
            <router-link :to="{ name: 'AddTask' }">
                <a href="" class="btn-floating btn-large halfway-fab pink">
                    <i class="material-icons">add</i>
                </a>
            </router-link>
        </div>
    </nav>
</div> 
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.nav-title {
    font-weight: bolder;
    letter-spacing: 1px;
    text-shadow: 1px 2px 12px #333;
}
</style>
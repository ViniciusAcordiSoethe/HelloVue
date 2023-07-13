<script setup>
</script>
<template>
    <nav class="top-menu">
        <ul>
            <li><RouterLink to="/"><button class="menu-button">Home</button></RouterLink></li>
            <div class="dropdown">
                <button class="menu-button">Materias</button>
                <div class="dropdown-content">
                    <RouterLink class="drop-item" to="/about">aboput</RouterLink>
                    <RouterLink class="drop-item" to="/about/mission">Mission</RouterLink>
                    <RouterLink class="drop-item" to="/about/history">History</RouterLink>
                </div>
            </div>
            <li><RouterLink to="/contact"><button class="menu-button">Contact</button></RouterLink></li>
        </ul>        
    </nav>
</template>
<style scoped>
.top-menu {
    background-color: #333;
    color: #fff;
    padding: 10px;
}
.top-menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 50px;
}

.menu-button {
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
    transition: 0.2s;
}

.menu-button:hover {
    color: hsla(160, 100%, 37%, 1);
    background-color: #555;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #333;
    min-width: 100px;
    z-index: 1;
    flex-direction: column;
    border-radius: 5px;
}

.drop-item{
    padding: 10px;
    border-radius: 5px;
}

.drop-item:hover {
    background-color: #555;
}

.dropdown:hover .dropdown-content {
    display: flex;
}

</style>
<!-- TodoHeader.vue -->

<template>
    <header>
        <h1 class="logo">My Todo</h1>
        <p class="date">{{ timestamp }}</p>
    </header>
</template>


<script>
export default {
    data() {
        return {
            timestamp: ""
        };
    },
    created() {
        const now = new Date();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        const weekList = new Array("일요일.", "월요일.", "화요일.", "수요일.", "목요일.", "금요일.", "토요일.");
        const week = weekList[now.getDay()];
        this.timestamp = `${month}/${date} ${week}`;
    }
};
</script>

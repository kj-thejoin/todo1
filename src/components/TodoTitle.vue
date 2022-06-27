<!-- TodoTitle.vue -->

<template>
    <div class="title">
        <p class="title__message">{{ message }}</p>
        <p class="title__task">
            당신은 오늘
            <span class="title__task-total">{{ taskTotal }} </span> 개의 할 일이 있습니다.
        </p>
    </div>
</template>

<script>
export default{
    data() {
        return {
            message: "Hello, nana.",
            taskTotal : 5
        };
    }
};
</script>

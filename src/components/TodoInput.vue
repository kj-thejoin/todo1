<!-- TodoInput.vue -->

<template>
    <div class="add">
        <input type="text" class="add__input" placeholder="할 일을 입력하세요." v-model="newTodoItem" v-on:keyup.enter="addTodoItem"/>
        <button class="add__button">
            <span class="blind">추가</span>

        </button>
    </div>
</template>

<script>
export default{
    data() {
        return {
            newTodoItem: ""
        };
    }
};
</script>

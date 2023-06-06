<script setup>
defineProps(['isModalOpen', 'title', 'primaryButtonName'])
defineEmits(['onCloseModal', 'onAction'])



</script>

<template>
    <Teleport to="#modal">
        <div class="modal-bg" v-if="isModalOpen">
            <div class="modal">
                <div class="top">
                    <header>
                        <button @click="$emit('onCloseModal')" class="close-btn">x</button>
                        <h2>{{ title }}</h2>
                    </header>
                    <slot></slot>
                </div>
                <footer>
                    <button class="secondaryButton" @click="$emit('onCloseModal')">Cancelar</button>
                    <button v-if="primaryButtonName" class="primaryButton" @click="$emit('onAction')">{{ primaryButtonName }}</button>
                </footer>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.modal {
    position: relative;
    background: white;
    border-radius: 0.8rem;
    display: block;
    width: max-content;
    height: max-content;
}

.top {
    padding: 2rem 2rem 0 2rem;
}

.modal .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
}

footer {
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem;
    margin-top: 3rem;
    background-color: #E0E4E8;
}

footer button {
    border-radius: 0.5rem;
    padding: 0.4rem 3rem;
    border: none;
}

footer .secondaryButton {
    background-color: transparent;
}

footer .secondaryButton:hover {
    background-color: lightgray;
}

footer .primaryButton {
    background-color: #D75C37;
    color: white;
}

footer .primaryButton:hover {
    background-color: #BF3D16;
}
</style>
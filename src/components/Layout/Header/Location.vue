<template>
    <div class="h-10 lg:h-12 flex items-center px-2 lg:px-4 rounded-full hover:bg-gray-100 transition-all cursor-pointer" v-on:click="toggleMenu">
        <i class="icon icon-location w-6 h-6 mr-3"></i>
        <div class="flex flex-col">
            <div class="text-sm font-semibold">Konum</div>
            <div class="text-xs font-normal text-orange-500 flex items-center capitalize">
                <div class="locationChooseText">Konum Seç</div>
                <div class="h-2 w-2 ml-2 bg-no-repeat bg-contain icon icon-arrow" v-if="menu.isOpen"></div>
                <div class="h-2 w-2 ml-2 bg-no-repeat bg-contain icon icon-arrow transform rotate-180" v-else></div>
                </div>
            </div>
        <div v-if="menu.isOpen">
            <!-- location select menu -->
        </div>
    </div>
</template>

<script>
    // export default {}
    export default {
        data() {
            return {
                menu: {
                    isOpen: false
                }
            }
        },
        methods: {
            toggleMenu() {
                this.menu.isOpen = !this.menu.isOpen;
                console.log(this.menu.isOpen);
            },
            closeMenu() {
                this.menu.isOpen = false;
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
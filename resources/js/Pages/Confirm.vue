<script setup>
import { Head } from '@inertiajs/vue3';

const data = reactive({
    phone: null,
    code: null
})

const send = () => {
    data.send = true
}
</script>

<template>
    <Head title="Wifiga bog'lanish" />
    <div class="p-6 container md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row">
        <div class="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
            <img src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Envelope with a newsletter"
                role="img" class="h-full xl:w-full lg:w-1/2 w-full" />
        </div>
        <div class="w-full xl:w-1/2 xl:pl-40 xl:py-28">
            <h1
                class="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">
                Bog'lanish</h1>
            <p v-if="!data.send" class="text-base leading-normal text-gray-600 text-center xl:text-left">Wifi tarmoqg'idan
                foydalanish uchun
                qurilmani telefon raqamingiz orqali tadiqlang</p>
            <p v-if="data.send" class="text-base leading-normal text-gray-600 text-center xl:text-left">{{ data.phone }} -
                telefon raqamiga kod yuborildi</p>
            <div class="flex items-stretch mt-12">
                <input v-if="!data.send"
                    class="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-3 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
                    type="phone" v-model="data.phone" placeholder="Telefon raqamingiz" />
                <input v-if="data.send"
                    class="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-3 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
                    type="number" v-model="data.code" placeholder="Kodni kiriting" />
                <button @click="send()"
                    class="w-64 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                    {{ data.send ? 'Tasdiqlash' : 'Kod yuborish' }}
                </button>
            </div>
        </div>
    </div>
</template>

<template>
    <div class="mt-6">
        <div class="max-w-5xl min-h-screen px-10 py-6 bg-white rounded-lg shadow-md">
            <div class="inline-flex">
                <li class="list-none">
                    <router-link to="/userpanel" class="items-center text-black p-2 rounded-md   font-medium hover:bg-gray-700 focus:bg-gray-700 focus:shadow-outline list-none">
                        <span class="text-gray-600"></span>
                        <span>Link 1</span>
                    </router-link>
                </li>

                <li class="list-none">
                    <router-link to="/userpanel/panel/" class="items-center text-black p-2 rounded-md font-medium hover:bg-gray-700 focus:bg-gray-700 focus:shadow-outline list-none">
                        <span class="text-gray-600">
                        </span>
                        <span>Link 2</span>
                    </router-link>
                </li>

                <li class="list-none">
                    <router-link to="/userpanel/panel/" class="items-center text-black p-2 rounded-md       font-medium hover:bg-gray-700 focus:bg-gray-700 focus:shadow-outline list-none">
                        <span class="text-gray-600">
                        </span>
                        <span>Link 3</span>
                    </router-link>
                </li>
            </div>

            <div class="mt-2">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
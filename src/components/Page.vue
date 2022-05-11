<script setup>

</script>

<template>

 <div class="text-gray-400 font-nunito grid md:grid-cols-4">  <!--content wraper-->
    <div class="p-4 md:col-span-1">  <!--entete-->
        <nav>
            <div class="flex">
                <div class="flex items-center justify-items-center">
                    <div class="bg-primary h-3 w-3"></div>
                    <div class="bg-secondary-100 h-4 w-3"></div>
                    <div class="bg-secondary-200 h-6 w-3"></div>
                </div>
                <h1 class="text-gray-700 text-2xl font-bold ml-2">
                    <a href="" class="sm:text-primary md:text-secondary-200 lg:text-secondary-100 text-gray-300 hover:text-purple-700">KamerFood</a>
                </h1>              
            </div>
            <ul>
                <li>
                    <a href="">
                    <span class="text-gray-700 font-bold">Accueil</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    </a>
                </li>
                <li>
                    <a href="">
                    <span>Contact</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    </a>
                </li>
                <li>
                    <a href="">
                    <span>Apropos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <main class="p-16 bg-gray-100 md:col-span-3">  <!--contenu principal-->
        <div class="my-2 text-secondary-200 flex justify-center md:justify-end">
            <a href="" class="btn border-2 border-secondary-200 hover:bg-secondary-200 hover:text-white">Connexion</a> 
            
            <a href="" class="ml-1 btn border-2 border-secondary-200 hover:bg-secondary-200 hover:text-white">Inscription</a>
        </div>
        <header class="mt-8">
                <h2 class="text-primary text-5xl font-semibold">Recettes</h2>
                <h3 class="text-2xl font-semibold">Pour les pros</h3>
        </header>
        <div>
            <div>
                <h4 class="text-secondary-100 text-3xl my-4 border-b pb-2 border-gray-300">Recettes les plus récentes</h4>
                <div class="py-16 grid md:grid-cols-3 gap-8">
                    <!--nos cards ici-->
                    <div class="card ">
                        <img src="../../dist/images/Poisson Braise.jpg" alt="poisson braisé" class="w-full sm:h-48 md:40 lg:35 xl:32 object-cover"/>
                        <div class="m-4">
                            <span class="font-bold text-2xl">Poisson Braisé</span>
                            <span class="block text-lg">Par tony pro</span>
                        </div>
                        <div class="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="mx-2 uppercase">30:00 mins</span>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../../dist/images/poulet dg.png" alt="poisson braisé" class="w-full sm:h-48 md:40 lg:35 xl:32 object-cover"/>
                        <div class="m-4">
                            <span class="font-bold text-2xl">Poisson Dg</span>
                            <span class="block text-lg">Par tony pro</span>
                        </div>
                        <div class="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="mx-2 uppercase">30:00 mins</span>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../../dist/images/cokie-plantain mur.jpg" alt="poisson braisé" class="w-full sm:h-48 md:40 lg:35 xl:32 object-cover"/>
                        <div class="m-4">
                            <span class="font-bold text-2xl">Koki Plantain Mûr</span>
                            <span class="block text-lg">Par tony pro</span>
                        </div>
                        <div class="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="mx-2 uppercase">30:00 mins</span>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../../dist/images/brochette-de-porc-la-chinoise.jpg" alt="poisson braisé" class="w-full sm:h-48 md:40 lg:35 xl:32 object-cover"/>
                        <div class="m-4">
                            <span class="font-bold text-2xl">Brochette de Porc</span>
                            <span class="block text-lg">Par tony pro</span>
                        </div>
                        <div class="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="mx-2 uppercase">30:00 mins</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h4 class="text-secondary-200 text-3xl my-4 border-b pb-2 border-gray-300">Recettes les plus populaires</h4>
                <div class="pb-16">
                    <!--Les cartes ici-->
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <span class="bg-gray-300 text-gray-800 p-3 btn">afficher plus ...</span>
        </div>
    </main>
 </div>
</template>
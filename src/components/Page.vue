<script setup>

</script>

<template>

 <div class="text-gray-400 font-nunito">  <!--content wraper-->
    <div class="p-4">  <!--entete-->
        <nav>
            <div class="flex">
                <div class="flex items-center justify-items-center">
                    <div class="bg-primary h-3 w-3"></div>
                    <div class="bg-secondary-100 h-4 w-3"></div>
                    <div class="bg-secondary-200 h-6 w-3"></div>
                </div>
                <h1 class="text-gray-700 text-2xl font-bold ml-2">
                    <a href="" class="text-primary ">KamerFood</a>
                </h1>              
            </div>
            <ul>
                <li>
                    <a href=""><span class="text-gray-700 font-bold">Accueil</span></a>
                </li>
                <li>
                    <a href=""><span>Contact</span></a>
                </li>
                <li>
                    <a href=""><span>Apropos</span></a>
                </li>
            </ul>
        </nav>
    </div>
    <main class="p-16">  <!--contenu principal-->
        <div class="my-2 text-secondary-200 flex justify-end">
            <a href="">Connexion</a>
            <a href="" class="ml-3">Inscription</a>
        </div>
        <header class="mt-8">
                <h2 class="text-primary text-5xl font-semibold">Recettes</h2>
                <h3 class="text-2xl font-semibold">Pour les pros</h3>
        </header>
        <div>
            <div>
                <h4 class="text-secondary-100 text-3xl my-4 border-b pb-2 border-gray-300">Recettes les plus récentes</h4>
                <div class="py-16">
                    <!--nos cards ici-->
                    <div>
                        <img src="#" alt=""/>
                        <div>
                            <span>Poisson Braisé</span>
                            <span>Par tony pro</span>
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
            <span class="bg-gray-300 text-gray-800 p-3">afficher plus ...</span>
        </div>
    </main>
 </div>
</template>
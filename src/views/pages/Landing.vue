<script setup>
function smoothScroll(id) {
    document.body.click();
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-900">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div class="navbar py-6 px-6 mx-0 md:mx-12 lg:mx-0 lg:px-10 flex items-center justify-between fixed top-0 w-full z-20 bg-surface-0 dark:bg-surface-900 shadow-lg">
                <a class="flex items-center" href="#">
                    <img src="/public/demo/images/logo.png" alt="" style="width: 50px; height: 50px; margin-right: 20px" />
                    <span class="mr-20 w-40"><img src="/public/demo/images/logo2.png" alt="" /></span>
                </a>
                <Button
                    class="lg:!hidden"
                    text
                    severity="secondary"
                    rounded
                    v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                >
                    <i class="pi pi-bars !text-2xl"></i>
                </Button>
                <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border">
                    <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8">
                        <li>
                            <a @click="smoothScroll('#hero')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                                <Button severity="info" text>Home</Button>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#aboutus')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                                <Button severity="info" text>About us</Button>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#deleveries')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                                <Button severity="info" text>Schedules</Button>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#testi')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                                <Button severity="info" text>Testemonies</Button>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#contact')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                                <Button severity="info" text>Contacts</Button>
                            </a>
                        </li>
                    </ul>
                    <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2">
                        <Button label="Login" as="router-link" to="/auth/login" severity="success"></Button>
                    </div>
                </div>
            </div>

            <div
                id="hero"
                class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
                style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(100, 149, 237) 0%, rgb(135, 206, 235) 100%); clip-path: ellipse(150% 75% at 93% 14%)"
            >
                <div class="mx-6 md:mx-20 mt-0 md:mt-20">
                    <h1 class="text-6xl font-bold text-blue-500 leading-tight" style="position: relative; top: 100px">
                        Welcome
                        <span class="block">Home</span>
                    </h1>

                    <p class="font-normal text-2xl leading-normal md:mt-4 text-gray-700" style="position: relative; top: 100px">Come to our station to see hanimetv</p>
                    <Button label="Get Started" as="router-link" to="/views/dashboardss" severity="info" raised rounded class="!text-xl mt-8 !px-4" style="position: relative; top: 100px"></Button>
                </div>
                <div class="flex justify-center md:justify-end">
                    <img src="/public/demo/images/art.png" alt="Hero Image" style="width: 770px; height: 550px; position: relative; left: 80px; bottom: 100px" />
                </div>
            </div>

            <div id="aboutus" class="py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
                <div class="grid grid-cols-12 gap-4 justify-center">
                    <div
                        class="col-span-12 mt-20 mb-20 p-2 md:p-20"
                        style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                    >
                        <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                            <div class="text-gray-900 mb-2 text-3xl font-semibold">About us</div>
                            <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6" style="max-width: 800px">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sapiente iste officia earum eligendi, deleniti enim beatae consectetur minima quaerat eaque, quibusdam cumque, accusamus numquam. Tempore nostrum
                                quibusdam veritatis et.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about" class="py-6 px-6 lg:px-20 mx-0 my-2 lg:mx-20">
                <div class="text-center">
                    <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Powerful Everywhere</div>
                </div>

                <div class="grid grid-cols-12 gap-4 mt-20 pb-2 md:pb-20">
                    <div class="flex justify-center col-span-12 lg:col-span-6 p-0 order-1 lg:order-none" style="border-radius: 8px">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ea57877a3c73263837fc99720e06cff4fe04064615cbb6ef71ec1032cd2ecb8?placeholderIfAbsent=true&apiKey=8205138dbf9646f198b9f4c85c0a161f" class="w-11/12" alt="mockup" />
                    </div>

                    <div class="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4">
                        <div class="flex items-center justify-center bg-purple-200 self-center lg:self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                            <i class="pi pi-fw pi-mobile !text-4xl text-purple-700"></i>
                        </div>
                        <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Cellphone</div>
                        <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0 md:ml-2" style="max-width: 650px"
                            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic impedit optio sint nihil. Sit minima harum quis, quo assumenda blanditiis ut distinctio eveniet vitae asperiores maxime voluptate est dicta!</span
                        >
                    </div>
                </div>

                <div class="grid grid-cols-12 gap-4 my-20 pt-2 md:pt-20">
                    <div class="col-span-12 lg:col-span-6 my-auto flex flex-col text-center lg:text-left lg:items-start gap-4">
                        <div class="flex items-center justify-center bg-yellow-200 self-center lg:self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                            <i class="pi pi-fw pi-desktop !text-3xl text-yellow-700"></i>
                        </div>
                        <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">PC</div>
                        <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal mr-0 md:mr-2" style="max-width: 650px"
                            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, aliquid. Facere officia id neque, placeat magni tempore. Repellat, odio ut? Nihil a quis excepturi nesciunt architecto ipsum nostrum commodi culpa.
                        </span>
                    </div>

                    <div class="flex justify-end order-1 sm:order-2 col-span-12 lg:col-span-6 p-0" style="border-radius: 8px">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ea57877a3c73263837fc99720e06cff4fe04064615cbb6ef71ec1032cd2ecb8?placeholderIfAbsent=true&apiKey=8205138dbf9646f198b9f4c85c0a161f" class="w-11/12" alt="mockup" />
                    </div>
                </div>
            </div>

            <div id="deleveries" class="py-6 px-6 lg:px-20 my-2 md:my-6">
                <div class="text-center mb-6">
                    <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Here's How it Works</div>
                    <span class="text-muted-color text-2xl">Hadokin</span>
                </div>

                <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                    <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                        <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                            <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl"></div>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/113242f612a25f6013bfbf4d84806cbc62efef27ab478aa55ba6820e2bbd38fa?placeholderIfAbsent=true&apiKey=8205138dbf9646f198b9f4c85c0a161f"
                                class="w-7/12 mx-auto"
                                alt="free"
                            />
                            <div class="my-8 flex flex-col items-center gap-4">
                                <Button label="Order First" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl leading-normal">wer</span>
                                </li>

                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl leading-normal">wer</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl leading-normal">rew</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                        <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                            <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl"></div>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/113242f612a25f6013bfbf4d84806cbc62efef27ab478aa55ba6820e2bbd38fa?placeholderIfAbsent=true&apiKey=8205138dbf9646f198b9f4c85c0a161f"
                                class="w-7/12 mx-auto"
                                alt="free"
                            />
                            <div class="my-8 flex flex-col items-center gap-4">
                                <Button label="Order First" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl leading-normal">Free</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl leading-normal">Basta</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl leading-normal">Free</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                        <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                            <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl"></div>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/113242f612a25f6013bfbf4d84806cbc62efef27ab478aa55ba6820e2bbd38fa?placeholderIfAbsent=true&apiKey=8205138dbf9646f198b9f4c85c0a161f"
                                class="w-7/12 mx-auto"
                                alt="free"
                            />
                            <div class="my-8 flex flex-col items-center gap-4">
                                <Button label="Order First" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl leading-normal">werew</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl leading-normal">werew</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl leading-normal">werew</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" class="py-8 px-6 mx-0 mt-20 lg:mx-0 md:h-80" style="background-color: #01488a">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 md:col-span-2">
                        <a @click="smoothScroll('#home')" class="flex flex-wrap items-center justify-center md:justify-start md:mb-0 mb-4 w-10 cursor-pointer bg-blue-500 rounded-full">
                            <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style="width: 50px; height: 50px" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>

                    <div class="col-span-12 md:col-span-10 mt-6">
                        <div class="grid grid-cols-12 gap-8 text-center md:text-left">
                            <div class="col-span-12 md:col-span-3">
                                <h4 class="font-bold text-2xl leading-normal mb-4 text-white text-surface-900 dark:text-surface-0">Resources</h4>
                                <a class="leading-normal text-xl block cursor-pointer text-white mb-2 text-surface-700 dark:text-surface-100">Get Started</a>
                                <a class="leading-normal text-xl block cursor-pointer text-white mb-2 text-surface-700 dark:text-surface-100">Learn</a>
                            </div>

                            <div class="col-span-12 md:col-span-3">
                                <h4 class="font-bold text-2xl leading-normal mb-4 text-white text-surface-900 dark:text-surface-0">Community</h4>
                                <a class="leading-normal text-xl block cursor-pointer text-white mb-2 text-surface-700 dark:text-surface-100">Discord</a>
                                <a class="leading-normal text-xl block cursor-pointer text-white mb-2 text-surface-700 dark:text-surface-100">FAQ</a>
                                <a class="leading-normal text-xl block cursor-pointer text-white text-surface-700 dark:text-surface-100">Blog</a>
                            </div>

                            <div class="col-span-12 md:col-span-3">
                                <h4 class="font-bold text-2xl leading-normal mb-4 text-white text-surface-900 dark:text-surface-0">Legal</h4>
                                <a class="leading-normal text-xl block cursor-pointer text-white mb-2 text-surface-700 dark:text-surface-100">Privacy Policy</a>
                                <a class="leading-normal text-xl block cursor-pointer text-white text-surface-700 dark:text-surface-100">Terms of Service</a>
                            </div>

                            <div class="col-span-12 md:col-span-3">
                                <h4 class="font-bold text-2xl leading-normal mb-4 text-white text-surface-900 dark:text-surface-0">Social</h4>
                                <div class="flex flex-row space-x-4">
                                    <a href="">
                                        <img src="/public/demo/images/fb.png" alt="" class="w-8 h-8" />
                                    </a>
                                    <a href="">
                                        <img src="/public/demo/images/tlp.png" alt="" class="w-8 h-8" />
                                    </a>
                                    <a href="">
                                        <img src="/public/demo/images/twit.png" alt="" class="w-8 h-8" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

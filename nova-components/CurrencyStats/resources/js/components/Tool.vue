<template>
    <div>
        <heading class="mb-6">1 INR is equal to:</heading>

        <div class="flex flex-row -mx-6 mb-6">
            <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div
                    class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
                >
                    <h1 class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                        $
                    </h1>
                    <div class="mx-5">
                        <h4 class="text-2xl font-semibold text-gray-700">
                            {{ usd }}
                        </h4>
                    </div>
                </div>
            </div>

            <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div
                    class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
                >
                    <h1 class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                        €
                    </h1>
                    <div class="mx-5">
                        <h4 class="text-2xl font-semibold text-gray-700">
                            {{ eur }}
                        </h4>
                    </div>
                </div>
            </div>

            <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div
                    class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
                >
                    <h1 class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                        £
                    </h1>
                    <div class="mx-5">
                        <h4 class="text-2xl font-semibold text-gray-700">
                            {{ gbp }}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usd: 0.0,
            eur: 0.0,
            gbp: 0.0
        };
    },
    mounted() {
        fetch("https://api.exchangeratesapi.io/latest?base=INR")
            .then(response => response.json())
            .then(response => {
                this.usd =
                    response && response.rates && response.rates.USD
                        ? response.rates.USD
                        : 0.0;
                this.eur =
                    response && response.rates && response.rates.EUR
                        ? response.rates.EUR
                        : 0.0;
                this.gbp =
                    response && response.rates && response.rates.GBP
                        ? response.rates.GBP
                        : 0.0;
            })
            .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            });
    }
};
</script>

<style>
/* Scoped Styles */
</style>

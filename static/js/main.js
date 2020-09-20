var allPageData = [this.indexData];

var allData = {
    data: {
    },
    created() {
    },
    mounted() {

    },
    method: {
    },
    computed: {

    }
}

for (let i = 0; i < allPageData.length; i++) {
    const pageData = allPageData[i];
    if (pageData) {
        allData.data = Object.assign(allData.data, pageData.data)
        allData.method = Object.assign(allData.method, pageData.method)
        allData.computed = Object.assign(allData.computed, pageData.computed)
    }
}

var app = new Vue({
    el: '#app',
    created() {
        var _this = this;
        for (let i = 0; i < allPageData.length; i++) {
            const pageData = allPageData[i];
            if (pageData) {
                pageData.created(this)
            }
        }
    },
    mounted() {
        for (let i = 0; i < allPageData.length; i++) {
            const pageData = allPageData[i];
            if (pageData) {
                pageData.mounted(this)
            }
        }
    },
    data: allData.data,
    methods: allData.method,
    computed: allData.computed
})
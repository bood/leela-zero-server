module.exports = {
    template: '<div v-on:click="click">{{ `Debug ${value}` }}</div>',
    data: function () {
        return { value: 1 };
    },
    methods: {
        click: function () {
            this.value += 1;
        },
    }
};

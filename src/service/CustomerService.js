export const CustomerService = {
    getData() {
        return [
            {
                id: 1000,
                country: {
                    name: 'Guadalupe',
                    code: 'dz'
                },
                date: '2015-09-13',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                },
                balance: 70663
            }
           
        ];
    },

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

};

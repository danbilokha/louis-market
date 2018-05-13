import {Watch} from 'shared/dictionaries/watch.dictionary';

class Order {

    constructor(public name: string,
                public phone: string,
                public email: string,
                public watch: Watch) {
    }

}

export {Order};

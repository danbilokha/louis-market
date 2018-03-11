const toArray = (elem: any): Array<any> => {
    const array = [];
    switch (typeof elem) {
        case 'object':
            if (elem instanceof Array) {
                return elem;
            }

            for (const key in elem) {
                if (elem.hasOwnProperty(key)) {
                    array.push(elem[key]);
                }
            }

            return array;

        default:
            return [];
    }
};

const skip = (count: number) => (data: Array<any>): any => count ? data.slice(count) : data;
const take = (count: number) => (data: Array<any>): any => count ? data.slice(0, count) : data;

export {toArray, skip, take};

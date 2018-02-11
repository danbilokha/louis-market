const skip = (count: number) => (data: Array<any>): any => data.slice(count);
const take = (count: number) => (data: Array<any>): any => data.slice(0, count);

export {skip, take};

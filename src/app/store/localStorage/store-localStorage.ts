import {Injectable} from '@angular/core';


@Injectable()
class StoreLocalStorageService {

    public set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public get(key: string): object {
        return JSON.parse(localStorage.getItem(key));
    }

    public clear(): void {
        localStorage.clear();
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}

export {StoreLocalStorageService};

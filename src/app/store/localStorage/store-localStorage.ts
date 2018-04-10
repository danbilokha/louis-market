import {Injectable} from '@angular/core';

@Injectable()
class StoreLocalStorageService {

    public set(key: string, value: any): void {
        this._set(key, value);
    }

    public get(key: string): object {
        return this._get(key);
    }

    public removeItem(key: string): void {
        this._removeItem(key);
    }

    public clear(): void {
        this._clear();
    }

    private _set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    private _get(key: string): object {
        return JSON.parse(localStorage.getItem(key));
    }

    private _clear(): void {
        localStorage.clear();
    }

    private _removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}

export {StoreLocalStorageService};

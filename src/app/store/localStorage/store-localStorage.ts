import {Injectable} from '@angular/core';
import {STORAGE_NAMESPACE} from '@store/store.dictionary';

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

    public isLocaStoragelKey(key: string): boolean {
        return STORAGE_NAMESPACE.has(key);
    }

    private _set(key: string, value: any): void {
        localStorage.setItem(key.toUpperCase(), JSON.stringify(value));
    }

    private _get(key: string): object {
        return JSON.parse(localStorage.getItem(key.toUpperCase()));
    }

    private _clear(): void {
        localStorage.clear();
    }

    private _removeItem(key: string): void {
        localStorage.removeItem(key.toUpperCase());
    }
}

export {StoreLocalStorageService};

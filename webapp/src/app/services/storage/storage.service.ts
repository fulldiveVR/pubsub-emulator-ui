import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private prefix = 'pubsub-ui'

    constructor() { }

    private prefixedKey(key: string): string {
        return `${this.prefix}.${key}`
    }

    save(key: string, data: any): void {
        const dataString = JSON.stringify(data)
        localStorage.setItem(this.prefixedKey(key), dataString)
    }

    load(key: string): any | null {
        const dataString = localStorage.getItem(this.prefixedKey(key))
        return dataString ? JSON.parse(dataString) : null
    }
}
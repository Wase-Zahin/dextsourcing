declare module '*.css';

declare global {
    interface SymbolConstructor {
        readonly iterator: unique symbol;
        readonly toStringTag: unique symbol;
    }

    interface Iterable<T> {
        [Symbol.iterator](): Iterator<T>;
    }

    interface Iterator<T> {
        next(): IteratorResult<T>;
    }

    interface IteratorResult<T> {
        done: boolean;
        value: T;
    }
}

export {};
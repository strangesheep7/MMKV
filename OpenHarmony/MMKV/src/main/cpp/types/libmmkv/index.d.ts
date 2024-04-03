export const initialize: (rootDir: string, cacheDir: string, logLevel?: number) => string;
export const version: () => string;
export const getDefaultMMKV: (mode: number, cryptKey?: string) => bigint;
export const encodeBool: (handle: bigint, key: string, value: boolean, expiration?: number) => boolean;
export const decodeBool: (handle: bigint, key: string, defaultValue: boolean) => boolean;
export const encodeInt32: (handle: bigint, key: string, value: number, expiration?: number) => boolean;
export const decodeInt32: (handle: bigint, key: string, defaultValue: number) => number;
export const encodeUInt32: (handle: bigint, key: string, value: number, expiration?: number) => boolean;
export const decodeUInt32: (handle: bigint, key: string, defaultValue: number) => number;
export const encodeInt64: (handle: bigint, key: string, value: bigint, expiration?: number) => boolean;
export const decodeInt64: (handle: bigint, key: string, defaultValue: bigint) => bigint;
export const encodeUInt64: (handle: bigint, key: string, value: bigint, expiration?: number) => boolean;
export const decodeUInt64: (handle: bigint, key: string, defaultValue: bigint) => bigint;
export const encodeDouble: (handle: bigint, key: string, value: number, expiration?: number) => boolean;
export const decodeDouble: (handle: bigint, key: string, defaultValue: number) => number;
export const encodeString: (handle: bigint, key: string, value: string, expiration?: number) => boolean;
export const decodeString: (handle: bigint, key: string, defaultValue?: string) => string;
export const encodeBytes: (handle: bigint, key: string, value: ArrayBuffer, expiration?: number) => boolean;
export const decodeBytes: (handle: bigint, key: string, defaultValue?: ArrayBuffer) => ArrayBuffer;

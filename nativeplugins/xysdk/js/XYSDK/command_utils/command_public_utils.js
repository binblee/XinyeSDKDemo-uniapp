import { strToGBKByte } from './printUtil-GBK.js'

export function strToBytesUseCharset(charsetName, str) {
    if (charsetName == 'gbk') {
        return Array.from(strToGBKByte(str))
    }
    throw "请实现其他编码"
}

export function strToBytes_GBK(str) {
    return Array.from(strToGBKByte(str))
}


export function byteMerger(byte_1, byte_2) {
    return byte_1.concat(byte_2)
}


/**
 * byte数组转换成base64 数据
 * @param {byte[]} buffer
 */
export function byteArrayToBase64(buffer) {
    var bytes = new Uint8Array(buffer);
    const base64 = uni.arrayBufferToBase64(bytes)
    return base64
}

/**
 * base64 数据转成byte数组
 * @param {string} base64Str 
 */
export function base64ToByteArray(base64Str) {
    let arrayBuffer = uni.base64ToArrayBuffer(base64Str);
    let array = Array.prototype.slice.call(new Uint8Array(arrayBuffer));
    return array
}
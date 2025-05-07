
var xysdk = uni.requireNativePlugin("xysdk");

function isIos() {
    return uni.getSystemInfoSync().platform === 'ios'
}

export class XYSDK {

    /**
     * 统一回调
     * @param {Function} callback 回调对象{actionCode: string, info: Object}, 				isSuccess是否收到回应，  
     * actionCode: CONN_STATE_DISCONN: 断开连接
     * info: 'type': 0: wifi 1: 蓝牙 2: USB 
     *  
	 * 回调对象示例：
	 {
		"actionCode": "CONN_STATE_DISCONN",
		"info": {
			"type": 1
		}
	 }
     */
    static addCallback(callback) {
        if (xysdk && xysdk.addCallback) {
            xysdk.addCallback(callback)
        }
    }
	
	static init() {
		if (xysdk && !isIos()){
			xysdk.init()
		}
	}

    /**
     * @param {number} x x坐标
     * @param {number} y y坐标
     * @param {number} mode
                    0:OVERWRINTE<br>
                    1:OR<br>
                    2:XOR<br>
     * @param {string} imageData 
     * @param {number} bitmapType imageData 图片的base64字符串
                    0: Dithering
                    1: Threshold
     * @param {Function} callback 回调base64字符串
     */
    static createTSCImageSendData(x, y, mode, imageData, bitmapType, callback) {
        if (xysdk && xysdk.createTSCImageSendData) {
            xysdk.createTSCImageSendData({
                "x": x,
                "y": y,
                "mode": mode,
                "imageData": imageData,
                "bitmapType": bitmapType
            }, callback)
        }
    }

    /** 生成80的打印数据
     * @param {number} mode图片模式
                    0: 正常大小
                    1: 倍宽
                    2: 倍高
                    3: 倍宽倍高
     * @param {string} imageData 图片的base64字符串
     * @param {number} bitmapType 生成位图模式
                    0: Dithering
                    1: Threshold
     * @param {Function} callback 回调base64字符串
     */
    static create80ImageSendData(mode, imageData, bitmapType, callback) {
        if (xysdk && xysdk.create80ImageSendData) {
            xysdk.create80ImageSendData({
                "mode": mode,
                "imageData": imageData,
                "bitmapType": bitmapType
            }, callback)
        }
    }

    /** 生成58的打印数据
     * @param {number} mode图片模式
                    0: 正常大小
                    1: 倍宽
                    2: 倍高
                    3: 倍宽倍高
     * @param {string} imageData 图片的base64字符串
     * @param {number} bitmapType 生成位图模式
                    0: Dithering
                    1: Threshold
     * @param {Function} callback 回调base64字符串
     */
    static create58ImageSendData(mode, imageData, bitmapType, callback) {
        if (xysdk && xysdk.create58ImageSendData) {
            xysdk.create58ImageSendData({
                "mode": mode,
                "imageData": imageData,
                "bitmapType": bitmapType
            }, callback)
        }
    }

    /** 打开蓝牙
     * @param {Function} callback 回调boolean, 代表是否连接成功
     */
    static openBLE(callback) {
        if (xysdk && xysdk.openBLE) {
            xysdk.openBLE(callback)
        }
    }

    /**
     * 开始搜索
     */
    static startScanBluetooth() {
        if (xysdk && xysdk.startScanBluetooth) {
            xysdk.startScanBluetooth()
        }
    }

    /**
     * 停止搜索
     */
    static stopScanBluetooth() {
        if (xysdk && xysdk.stopScanBluetooth) {
            xysdk.stopScanBluetooth()
        }
    }

    /**	连接蓝牙设备
     * @param {string} id 设备到唯一标识
     * @param {Object} callback 回调boolean, 代表是否连接成功
     */
    static connectBluetooth(id, callback) {
        if (xysdk && xysdk.connectBluetooth) {
            xysdk.connectBluetooth({"id": id  }, callback)
        }
    }

    /** 蓝牙搜索的回调
    * @param {Function} callback 回调Array, 搜索到的设备
    * Array包含的对象：
    * 	{
    * 	'id': 唯一标识(安卓: mac地址, ios: UUID)
    * 	'name': 设备名称
    *   'rssi': 信号强度
    * 	}
    */
    static addFindBluetoothDeviceCallback(callback) {
        if (xysdk && xysdk.addFindBluetoothDeviceCallback) {
            xysdk.addFindBluetoothDeviceCallback(callback)
        }
    }

    /**
     * @param {string} ip 需要连接的ip
     * @param {Function} callback 回调boolean, 代表是否连接成功
     */
    static connectWifi(ip, callback) {
        if (xysdk && xysdk.connectWifi) {
            xysdk.connectWifi({ "ip": ip }, callback)
        }
    }

    /**
     * @param {Function} callback 回调Array, 已连接的设备
     */
    static getUSBList(callback) {
        if (xysdk && xysdk.getUSBList) {
			if (isIos()) {
				callback([])
			    return
			}
            xysdk.getUSBList(callback)
        }
    }

    /**
     * @param {string} key usbKey
     * @param {Function} callback 回调boolean, 代表是否连接成功
     */
    static connectUSB(key, callback) {
        if (xysdk && xysdk.addFindBluetoothDeviceCallback) {
            if (isIos()) {
				callback(false)
                return
            }
            xysdk.connectUSB({ "key": key }, callback)
        }
    }

    /** 断开连接
     * @param {number} connectType 设备连接类型 0: wifi 1: 蓝牙 2: USB 
     */
    static disconnect(connectType) {
        if (xysdk && xysdk.disconnect) {
           xysdk.disconnect({ 'connectType': connectType })
        }
    }

    /** 发送数据
     * @param {string} data base64的打印数据
     * @param {number} connectType 设备连接类型 0: wifi 1: 蓝牙 2: USB 
     * @param {Function} callback 回调boolean, 代表是否发送成功
     */
    static sendData(data, connectType, callback) {
        if (xysdk && xysdk.sendData) {
            xysdk.sendData({ 'data': data, 'connectType': connectType }, callback)
        }
    }

    /** 发送数据 带回调
     * @param {string} data base64的打印数据
     * @param {number} connectType 设备连接类型 0: wifi 1: 蓝牙 2: USB 
     * @param {number}  timeout回应超时
     * @param {Function} callback 回调对象{isSuccess: boolean, callbackData: string}, 				isSuccess是否收到回应，  
                callbackData base64的回应数据
     */
    static sendDataWithCallback(data, connectType, timeout, callback) {
        if (xysdk && xysdk.sendDataWithCallback) {
            xysdk.sendDataWithCallback({ 'data': data, 'connectType': connectType, 'timeout': timeout }, callback)
        }
    }
}



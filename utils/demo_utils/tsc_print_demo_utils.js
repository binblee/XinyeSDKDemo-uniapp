
import TSCCommandUtils from '../XYSDK/command_utils/tsc_command_utils'
import { byteMerger, base64ToByteArray } from '../XYSDK/command_utils/command_public_utils'
import { XYSDK } from '../XYSDK/XYSDK'
import { pathToBase64 } from '../../js_sdk/mmmm-image-tools/index.js'


const pageW = 50 // 50mm
const pageH = 15 //15mm

export class TSCPrintAction {
    printSimpleData() {
        let printData = []
        //设置标签纸大小
        printData = byteMerger(printData, TSCCommandUtils.sizeBymm(pageW, pageH))
        //设置间隙
        printData = byteMerger(printData, TSCCommandUtils.gapBymm(2, 0))
        //清除缓存
        printData = byteMerger(printData, TSCCommandUtils.cls())
		// 设置打印浓度
		printData = byteMerger(printData, TSCCommandUtils.density(7))
        //设置方向
        printData = byteMerger(printData, TSCCommandUtils.direction(0))
        // 线条
        printData = byteMerger(printData, TSCCommandUtils.bar(10, 10, 200, 3))
        //条码
        printData = byteMerger(printData, TSCCommandUtils.barCode(10, 45, "128", 100, 1, 0, 2, 2, "abcdef12345"))
        //文本,简体中文是TSS24.BF2,可参考编程手册中字体的代号
        printData = byteMerger(printData, TSCCommandUtils.text(220, 10, "TSS24.BF2", 0, 1, 1, "这是测试文本"))
        // 打印一份
        printData = byteMerger(printData, TSCCommandUtils.printCount(1))

        return printData
    }


    printTextData() {
        let printData = []
        //设置标签纸大小
        printData = byteMerger(printData, TSCCommandUtils.sizeBymm(70, 50))
        //设置间隙
        printData = byteMerger(printData, TSCCommandUtils.gapBymm(2, 0))
        //清除缓存
        printData = byteMerger(printData, TSCCommandUtils.cls())
		// 设置打印浓度
		printData = byteMerger(printData, TSCCommandUtils.density(7))
        //设置方向
        printData = byteMerger(printData, TSCCommandUtils.direction(0))
        //文本,简体中文是TSS24.BF2,可参考编程手册中字体的代号
        printData = byteMerger(printData, TSCCommandUtils.text(220, 10, "TSS24.BF2", 0, 1, 1, "这是测试文本"))
        // 打印一份
        printData = byteMerger(printData, TSCCommandUtils.printCount(1))

        return printData
    }

    printBarcodeData() {
        let printData = []
        //设置标签纸大小
        printData = byteMerger(printData, TSCCommandUtils.sizeBymm(pageW, pageH))
        //设置间隙
        printData = byteMerger(printData, TSCCommandUtils.gapBymm(2, 0))
        //清除缓存
        printData = byteMerger(printData, TSCCommandUtils.cls())
		// 设置打印浓度
		printData = byteMerger(printData, TSCCommandUtils.density(7))
        //设置方向
        printData = byteMerger(printData, TSCCommandUtils.direction(0))
        //条码, gussing 100px == 12mm
        printData = byteMerger(printData, TSCCommandUtils.barCode(30, 20, "128", 50, 1, 0, 2, 2, "zy1234567890123"))
        // 打印一份
        printData = byteMerger(printData, TSCCommandUtils.printCount(1))
        return printData
    }

    printQRData() {
        let printData = []
        //设置标签纸大小
        printData = byteMerger(printData, TSCCommandUtils.sizeBymm(pageW, pageH))
        //设置间隙
        printData = byteMerger(printData, TSCCommandUtils.gapBymm(2, 0))
        //清除缓存
        printData = byteMerger(printData, TSCCommandUtils.cls())
		// 设置打印浓度
		printData = byteMerger(printData, TSCCommandUtils.density(7))
        //设置方向
        printData = byteMerger(printData, TSCCommandUtils.direction(0))
        //二维码
        printData = byteMerger(printData, TSCCommandUtils.qrCode(10, 20, "M", 3, "A", 0, "M1", "S3", "123456789"))
        // 打印一份
        printData = byteMerger(printData, TSCCommandUtils.printCount(1))

        return printData
    }

    printbitmapData(x, y, mode, bitmapType, callback) {
        uni.compressImage({
            src: '/static/test.png',
			quality: 80,
			width:100,
            success: res => {
                pathToBase64(res.tempFilePath).then(base64 => {
                    // 获取base64
                    XYSDK.createTSCImageSendData(x, y, mode, base64, bitmapType, imageBase64 => {
                        let printData = [];
                        let imagePrintData = base64ToByteArray(imageBase64);

                        //设置标签纸大小
                        printData = byteMerger(printData, TSCCommandUtils.sizeBymm(70, 50));
                        //设置间隙
                        printData = byteMerger(printData, TSCCommandUtils.gapBymm(2, 0));
                        //清除缓存
                        printData = byteMerger(printData, TSCCommandUtils.cls());
						// 设置打印浓度
						printData = byteMerger(printData, TSCCommandUtils.density(7))

                        printData = byteMerger(printData, imagePrintData);

                        printData = byteMerger(printData, TSCCommandUtils.printCount(1));

                        callback(printData)
                    })
                }).catch(error => {
                    callback(null)
                })
            }
        })
    }
}


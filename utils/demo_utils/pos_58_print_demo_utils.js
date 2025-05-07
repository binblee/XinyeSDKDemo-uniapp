import Pos58Commond from '../XYSDK/command_utils/pos_58_command_utils'
import { byteMerger, strToBytes_GBK, base64ToByteArray } from '../XYSDK/command_utils/command_public_utils'
import { XYSDK } from '../XYSDK/XYSDK'
import { pathToBase64 } from '../../js_sdk/mmmm-image-tools/index.js'


export class Pos58_PrintAction {
    printSimpleData() {
        let printData = []

        printData = byteMerger(printData, Pos58Commond.initializePrinter());
		// 设置打印浓度
		printData = byteMerger(printData, Pos58Commond.printDensity(5));
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(50, 0));//设置初始位置
        printData = byteMerger(printData, Pos58Commond.selectCharacterSize(17));//字体放大一倍
        printData = byteMerger(printData, strToBytes_GBK("商品"));
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(250, 0));
        printData = byteMerger(printData, strToBytes_GBK("价格"));
        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());
        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());

        printData = byteMerger(printData, Pos58Commond.initializePrinter());
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(30, 0));
        printData = byteMerger(printData, strToBytes_GBK("黄焖鸡"));
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(220, 0));
        printData = byteMerger(printData, strToBytes_GBK("5元"));
        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());

        printData = byteMerger(printData, Pos58Commond.initializePrinter());
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(30, 0));
        printData = byteMerger(printData, strToBytes_GBK("黄焖鸡呀"));
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(220, 0));
        printData = byteMerger(printData, strToBytes_GBK("6元"));
        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());

        printData = byteMerger(printData, Pos58Commond.initializePrinter());
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(30, 0));
        printData = byteMerger(printData, strToBytes_GBK("黄焖鸡"));
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(220, 0));
        printData = byteMerger(printData, strToBytes_GBK("7元"));
        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());

        printData = byteMerger(printData, Pos58Commond.initializePrinter());
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(30, 0));
        printData = byteMerger(printData, strToBytes_GBK("黄焖鸡"));
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(220, 0));
        printData = byteMerger(printData, strToBytes_GBK("8元"));
        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());

        printData = byteMerger(printData, Pos58Commond.initializePrinter());
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(30, 0));
        printData = byteMerger(printData, strToBytes_GBK("黄焖鸡"));
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(220, 0));
        printData = byteMerger(printData, strToBytes_GBK("9元"));
        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());

        printData = byteMerger(printData, Pos58Commond.initializePrinter());
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(30, 0));
        printData = byteMerger(printData, strToBytes_GBK("黄焖鸡"));
        printData = byteMerger(printData, Pos58Commond.setAbsolutePrintPosition(220, 0));
        printData = byteMerger(printData, strToBytes_GBK("10元"));
        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());
        return printData
    }


    printTextData() {
        let printData = []
        printData = byteMerger(printData, Pos58Commond.initializePrinter());
        printData = byteMerger(printData, strToBytes_GBK("1234567890qwertyuiopakjbdscm nkjdv mcdskjb"));
        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());
        return printData
    }

    printBarcodeData() {
        let printData = []
        //初始化打印机，清除缓存
        printData = byteMerger(printData, Pos58Commond.initializePrinter());
		// 设置打印浓度
		printData = byteMerger(printData, Pos58Commond.printDensity(5));
        //选择对齐方式
        printData = byteMerger(printData, Pos58Commond.selectAlignment(1));
        //选择HRI文字文字
        printData = byteMerger(printData, Pos58Commond.selectHRICharacterPrintPosition(2));
        //设置条码宽度
        printData = byteMerger(printData, Pos58Commond.setBarcodeWidth(2));
        //设置高度
        printData = byteMerger(printData, Pos58Commond.setBarcodeHeight(80));
        //条码的类型和内容，73是code128的类型，请参考说明手册每种类型的规则
        printData = byteMerger(printData, Pos58Commond.printBarcodeWithLength(73, 10, "{B12345678"));
        //打印指令
        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());
        return printData
    }

    printQRData() {
        let printData = []
        //初始化打印机，清除缓存
        printData = byteMerger(printData, Pos58Commond.initializePrinter());
		// 设置打印浓度
		printData = byteMerger(printData, Pos58Commond.printDensity(5));
        //选择对齐方式
        printData = byteMerger(printData, Pos58Commond.selectAlignment(1));
        printData = byteMerger(printData, Pos58Commond.printQRcode(3, 48, "www.xprinter.net"));
        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());
        return printData
    }

    printbitmapData(mode, bitmapType, callback) {
        uni.compressImage({
            src: '/static/test.png',
			quality: 80,
			width:100,
            success: res => {
                pathToBase64(res.tempFilePath).then(base64 => {
                    // 获取base64
                    XYSDK.create58ImageSendData(mode, base64, bitmapType, imageBase64 => {
                        let printData = [];
                        let imagePrintData = base64ToByteArray(imageBase64);
                        printData = byteMerger(printData, Pos58Commond.initializePrinter());
						// 设置打印浓度
						printData = byteMerger(printData, Pos58Commond.printDensity(5));
                        printData = byteMerger(printData, imagePrintData);
                        printData = byteMerger(printData, Pos58Commond.printAndFeedLine());
                        callback(printData)
                    })
                }).catch(error => {

                    callback(null)
                })
            }
        })
    }
}


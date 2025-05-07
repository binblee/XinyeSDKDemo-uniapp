import { byteMerger, strToBytesUseCharset } from "./command_public_utils"
var charsetName = "gbk";

class Pos80Command {
    /**
     * 设置编码字符集
     * @param charset 
     */
    static setCharsetName(charset) {
        charsetName = charset
    }

    static horizontalPositioning() {
        let data = [9];
        return data;
    }

    static printAndFeedLine() {
        let data = [10];
        return data;
    }

    static printAndBackStandardmodel() {
        let data = [12];
        return data;
    }

    static PrintAndCarriageReturn() {
        let data = [13];
        return data;
    }

    static canclePrintDataByPagemodel() {
        let data = [24];
        return data;
    }

    static sendRealtimestatus(n) {
        let data = [16, 4, n];
        return data;
    }

    static requestRealtimeForPrint(n) {
        let data = [16, 5, n];
        return data;
    }

    static openCashboxRealtime(m, t) {
        let data = [16, 20, 1, m, t];
        return data;
    }

    static printByPagemodel() {
        let data = [27, 12];
        return data;
    }

    static setCharRightSpace(n) {
        let data = [27, 32, n];
        return data;
    }

    static selectPrintModel(n) {
        let data = [27, 33, n];
        return data;
    }

    static setAbsolutePrintPosition(m, n) {
        let data = [27, 36, m, n];
        return data;
    }

    static selectOrCancleCustomChar(n) {
        let data = [27, 37, n];
        return data;
    }

    static defineuserDefinedCharacters(c1, c2, bytes) {
        let data = [27, 38, 3, c1, c2];
        data = byteMerger(data, bytes);
        return data;
    }

    static selectBmpModel(m, nL, nH, bytes) {
        let data = [27, 42, m, nL, nH];
        data = byteMerger(data, bytes);
        return data;
    }

    static selectOrCancelUnderlineModel(n) {
        let data = [27, 45, n];
        return data;
    }

    static setDefultLineSpacing() {
        let data = [27, 50];
        return data;
    }

    static setLineSpaceing(n) {
        let data = [27, 51, n];
        return data;
    }

    static selectPrinter(n) {
        let data = [27, 61, n];
        return data;
    }

    static cancelUserDefinedCharacters(n) {
        let data = [27, 63, n];
        return data;
    }

    static initializePrinter() {
        let data = [27, 64];
        return data;
    }

    /**
     * 
     * @param b 
     * @returns 
     */
    static setHorizontalmovementPosition(bytes) {
        let data = [27, 68];
        const nul = [0];
        data = byteMerger(data, bytes);
        data = byteMerger(data, nul);
        return data;
    }

    static selectOrCancelBoldModel(n) {
        let data = [27, 69, n];
        return data;
    }

    static selectOrCancelDoubelPrintModel(n) {
        let data = [27, 71, n];
        return data;
    }

    static printAndFeed(n) {
        let data = [27, 74, n];
        return data;
    }

    static selectPageModel() {
        let data = [27, 76];
        return data;
    }

    static selectFont(n) {
        let data = [27, 77, n];
        return data;
    }

    static selectInternationalCharacterSets(n) {
        let data = [27, 82, n];
        return data;
    }

    static selectStandardModel() {
        let data = [27, 83];
        return data;
    }

    static selectPrintDirectionUnderPageModel(n) {
        let data = [27, 84, n];
        return data;
    }

    static selectOrCancelCW90(n) {
        let data = [27, 86, n];
        return data;
    }

    static setPrintAreaUnderPageModel(xL, xH, yL, yH, dxL, dxH, dyL, dyH) {
        let data = [27, 87, xL, xH, yL, yH, dxL, dxH, dyL, dyH];
        return data;
    }

    static setRelativeHorizontalPrintPosition(nL, nH) {
        let data = [27, 92, nL, nH];
        return data;
    }

    static selectAlignment(n) {
        let data = [27, 97, n];
        return data;
    }

    static selectPrintTransducerOutPutPageOutSignal(n) {
        let data = [27, 99, 51, n];
        return data;
    }

    static selectPrintTransducerStopPrint(n) {
        let data = [27, 99, 52, n];
        return data;
    }

    static allowOrForbidPressButton(n) {
        let data = [27, 99, 53, n];
        return data;
    }

    static printAndFeedForward(n) {
        let data = [27, 100, n];
        return data;
    }

    static creatCashboxContorlPulse(m, t1, t2) {
        let data = [27, 112, m, t1, t2];
        return data;
    }

    static selectCharacterCodePage(n) {
        let data = [27, 116, n];
        return data;
    }

    static selectOrCancelConvertPrintModel(n) {
        let data = [27, 123, n];
        return data;
    }

    static printBmpInFLASH(n, m) {
        let data = [28, 112, n, m];
        return data;
    }

   /**
    * @param {number[][]} bitmapDatas 图片二进制数据的数组，二维数组
    * @param {int} n 图片张数
    */
   static definedFlashBmp(bitmapDatas, n) {
       let data = [28, 113, n];
       if (list && list.length != 0) {
           for (i = 0; i < list.length; ++i) {
   			bmpData = bitmapDatas[i]
   			data = byteMerger(data, bmpData);
           }
           return data;
       } else {
           return [];
       }
   }

    static selectCharacterSize(n) {
        let data = [29, 33, n];
        return data;
    }

    static setAbsolutePositionUnderPageModel(nL, nH) {
        let data = [29, 36, nL, nH];
        return data;
    }

    /**
     * @param {number[]} bitmapData 图片二进制数据，数组形式
     */
    static definedDownLoadBmp(bitmapData) {
        let data = [29, 42];
        data = byteMerger(data, bitmapData);
        return data;
    }

    static executePrintDataSaveByTransformToHex() {
        let data = [29, 40, 65, 2, 0, 0, 1];
        return data;
    }

    static printDownLoadBmp(m) {
        let data = [29, 47, m];
        return data;
    }

    static startOrStopMacrodeFinition() {
        let data = [29, 58];
        return data;
    }

    static selectOrCancelInvertPrintModel(n) {
        let data = [29, 66, n];
        return data;
    }

    static selectHRICharacterPrintPosition(n) {
        let data = [29, 72, n];
        return data;
    }

    static setLeftSpace(nL, nH) {
        let data = [29, 76, nL, nH];
        return data;
    }

    static setHorizontalAndVerticalMoveUnit(x, y) {
        let data = [29, 80, x, y];
        return data;
    }

    /**
     * 选择切纸模式并切纸
     * @param {int} 0 or 48,全切;1 or 49，半切 
     * @returns 
     */
    static selectCutPagerModerAndCutPager(m) {
        let data = [29, 86, m];
        return data;
    }

    /**
     * 选择切纸模式并切纸
     * @param {int} m m=66
     * @param {int} n 进纸n，然后半切纸。
     * @returns 
     */
    static selectCutPagerModerAndCutPagerWithCount(m, n) {
        if (m != 66) {
            return new byte[0];
        } else {
            let data = [29, 86, m, n];
            return data;
        }
    }

    static setPrintAreaWidth(nL, nH) {
        let data = [29, 87, nL, nH];
        return data;
    }

    static setVerticalRelativePositionUnderPageModel(nL, nH) {
        let data = [29, 92, nL, nH];
        return data;
    }

    static executeMacrodeCommand(r, t, m) {
        let data = [29, 94, r, t, m];
        return data;
    }

    static openOrCloseAutoReturnPrintState(n) {
        let data = [29, 97, n];
        return data;
    }

    static selectHRIFont(n) {
        let data = [29, 102, n];
        return data;
    }

    static setBarcodeHeight(n) {
        let data = [29, 104, n];
        return data;
    }

    /**
     * 打印条码
     * @param {int} m 条码类型
     * @param {string} content 条码内容
     * @returns 
     */
    static printBarcode(m, content) {
        let data = [29, 107, m];
        const end = [0];
        const text = strTobytes(content);
        data = byteMerger(data, text);
        data = byteMerger(data, end);
        return data;
    }

    /**
     * 打印条码
     * @param {int} m 条码类型
     * @param {int} n 条码内容content的长度
     * @param {string} content 条码内容
     * @returns 
     */
    static printBarcodeWithLength(m, n, content) {
        let data = [29, 107, m, n];
        const text = strTobytes(content);
        data = byteMerger(data, text);
        return data;
    }

    /**
     * 打印条码
     * @param {int} alignment 选择对齐方式
     * @param {int} HRI 选择HRI字符打印位置, 0~3 or 48~51,代表字符相对条码的打印位置
     * @param {int} width 宽
     * @param {int} height 高
     * @param {int} type 条码类型
     * @param {int} size 条码内容content的长度
     * @param {string} content content 条码内容
     * @returns 
     */
    static printBarcodeWithStyle(alignment, HRI, width, height, type, size, content) {
        let data1 = [27, 97, alignment];
        let data2 = [29, 72, HRI];
        let data3 = [29, 119, width];
        let data4 = [29, 104, height];
        let data5 = [29, 107, type, size];
        const text = strTobytes(content);
        data5 = byteMerger(data5, text);
        data5 = byteMerger(byteMerger(byteMerger(byteMerger(data1, data2), data3), data4), data5);
        return data5;
    }

    static returnState(n) {
        let data = [29, 114, n];
        return data;
    }

    static setBarcodeWidth(n) {
        let data = [29, 119, n];
        return data;
    }

    static setChineseCharacterModel(n) {
        let data = [28, 33, n];
        return data;
    }

    static selectChineseCharModel() {
        let data = [28, 38];
        return data;
    }

    static selectOrCancelChineseCharUnderLineModel(n) {
        let data = [28, 45, n];
        return data;
    }

    static CancelChineseCharModel() {
        let data = [28, 46];
        return data;
    }

    static definedUserDefinedChineseChar(c2, bytes) {
        let data = [28, 50, -2, c2];
        data = byteMerger(data, bytes);
        return data;
    }

    static setChineseCharLeftAndRightSpace(n1, n2) {
        let data = [28, 83, n1, n2];
        return data;
    }

    static selectOrCancelChineseCharDoubleWH(n) {
        let data = [28, 87, n];
        return data;
    }

    static printerOrderBuzzingHint(n, t) {
        let data = [27, 66, n, t];
        return data;
    }

    static printerOrderBuzzingAndWarningLight(m, t, n) {
        let data = [27, 67, m, t, n];
        return data;
    }

    static SetsTheNumberOfColumnsOfTheDataAreaForPDF417(n) {
        let data = [29, 40, 107, 3, 0, 48, 65, n];
        return data;
    }

    static SetsTheNumberOfRowsOfTheDataAreaForPDF417(n) {
        let data = [29, 40, 107, 3, 0, 48, 66, n];
        return data;
    }

    static SetsTheModuleWidthOfPDF417(n) {
        let data = [29, 40, 107, 3, 0, 48, 67, n];
        return data;
    }

    static SetsTheModuleHeightForPDF417(n) {
        let data = [29, 40, 107, 3, 0, 48, 68, n];
        return data;
    }

    static SetsTheErrorCorrectionLevelForPDF417(m, n) {
        let data = [29, 40, 107, 4, 0, 48, 69, m, n];
        return data;
    }

    static SpecifiesOrCancelsVariousPDF417SymbolOptions(m) {
        let data = [29, 40, 107, 3, 0, 48, 70, m];
        return data;
    }

    static StoresSymbolDataInThePDF417SymbolStorageArea(pL, pH, bytes) {
        let data = [29, 40, 107, pL, pH, 48, 80, 48];
        data = byteMerger(data, bytes);
        return data;
    }

    static PrintsThePDF417SymbolDataInTheSymbolStorageArea() {
        let data = [29, 40, 107, 3, 0, 48, 81, 48];
        return data;
    }

    static TransmitsTheSizeOfTheSymbolDataInTheSymbolStorageAreaPDF417() {
        let data = [29, 40, 107, 3, 0, 48, 82, 48];
        return data;
    }

    static SetsTheSizeOfTheQRCodeSymbolModule(n) {
        let data = [29, 40, 107, 48, 103, n];
        return data;
    }

    static SetsTheErrorCorrectionLevelForQRCodeSymbol(n) {
        let data = [29, 40, 107, 48, 105, n];
        return data;
    }

    static StoresSymbolDataInTheQRCodeSymbolStorageArea(code) {
        const bytes = strTobytes(code);
        const a = b.length;
        let pL;
        let pH;
        if (a <= 255) {
            pL = a;
            pH = 0;
        } else {
            pH = a / 256;
            pL = a % 256;
        }

        let data = [29, 40, 107, 48, -128, pL, pH];
        data = byteMerger(data, bytes);
        return data;
    }

    static PrintsTheQRCodeSymbolDataInTheSymbolStorageArea() {
        let data = [29, 40, 107, 48, -127];
        return data;
    }

    static printQRcode(n, errLevel, code) {
        const bytes = strTobytes(code);
        let a = bytes.length;
        let nL;
        let nH;
        if (a <= 255) {
            nL = a;
            nH = 0;
        } else {
            nH = a / 256;
            nL = a % 256;
        }

        let data = [29, 40, 107, 48, 103, n, 29, 40, 107, 48, 105, errLevel, 29, 40, 107, 48, -128, nL, nH];
        data = byteMerger(data, bytes);
        const c = [29, 40, 107, 48, -127];
        data = byteMerger(data, c);
        return data;
    }

    static TransmitsTheSizeOfTheSymbolDataInTheSymbolStorageAreaQRCode() {
        let data = [29, 40, 107, 3, 0, 49, 82, 48];
        return data;
    }

    static SpecifiesTheModeForMaxiCodeSymbol(n) {
        let data = [29, 40, 107, 3, 0, 50, 65, n];
        return data;
    }

    static StoresSymbolDataInItheMaxiCodeSymbolStorageArea(pL, pH, bytes) {
        let data = [29, 40, 107, pL, pH, 50, 80, 48];
        data = byteMerger(data, bytes);
        return data;
    }

    static PrintsTheMaxiCodeSymbolDataInTheSymbolStorageArea() {
        let data = [29, 40, 107, 3, 0, 50, 81, 48];
        return data;
    }

    static TransmitsTheSizeOfTheEncodedSymbolDataInTheSymbolStorageAreaMaxiCode() {
        let data = [29, 40, 107, 3, 0, 50, 82, 48];
        return data;
    }
	
	/**
	 * @param {number} n 打印浓度:1<= n <=8
	 */
	static printDensity(n) {
	    let data = [31, 27, 31, 19, 20, n];
	    return data;
	}
}


function strTobytes(str) {
    return strToBytesUseCharset(charsetName, str)
}

export default Pos80Command;
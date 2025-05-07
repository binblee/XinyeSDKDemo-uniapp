import { byteMerger, strToBytesUseCharset } from "./command_public_utils"
var charsetName = "gbk";

class Pos58Commond {
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

    static cancelUserDefinedCharacters(n) {
        let data = [27, 63, n];
        return data;
    }

    static initializePrinter() {
        let data = [27, 64];
        return data;
    }

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

    static selectFont(n) {
        let data = [27, 77, n];
        return data;
    }

    static selectInternationalCharacterSets(n) {
        let data = [27, 82, n];
        return data;
    }

    static selectOrCancelCW90(n) {
        let data = [27, 86, n];
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

	/**
	 * @param {number[]} bitmapData 图片二进制数据，数组形式
	 */
    static definedDownLoadBmp(bitmapData) {
        let data = [29, 42];
        data = byteMerger(data, bitmapData);
        return data;
    }

    static printDownLoadBmp(m) {
        let data = [29, 47, m];
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

    static setPrintAreaWidth(nL, nH) {
        let data = [29, 87, nL, nH];
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

    static printBarcode(m, content) {
        let data = [29, 107, m];
        const end = [];
        const text = strTobytes(content);
        data = byteMerger(data, text);
        data = byteMerger(data, end);
        return data;
    }

    static printBarcodeWithLength(m, n, content) {
        let data = [29, 107, m, n];
        const text = strTobytes(content);
        data = byteMerger(data, text);
        return data;
    }

    static printcode128(content) {
        let data = [29, 107, 73, 10, 123, 65, 48, 49, 50, 51, 52, 53, 54, 55];
        const text = strTobytes(content);
        data = byteMerger(data, text);
        const end = [13, 10];
        data = byteMerger(data, end);
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

    static queryPrinterState() {
        let data = [27, 118];
        return data;
    }

    static openOrCloseLableModelInReceip(isOpen) {
        let data;
        if (isOpen) {
            data = [31, 27, 31, 0, 1, 1, -128, 1];
            return data;
        } else {
            data = [31, 27, 31, 0, 1, 1, -128, 0];
            return data;
        }
    }

    static endOfLable() {
        let data = [31, 27, 31, 0, 1, 1, -127];
        return data;
    }

    static checkLableAndGap() {
        let data = [31, 27, 31, 0, 1, 1, -126];
        return data;
    }

    static setTheLableWidth(width) {
        let data = [31, 27, 31, 0, 1, 1, -125, width];
        return data;
    }

    static selectFontB() {
        let data = [31, 27, 31, 48, 1];
        return data;
    }

    static seletFontA() {
        let data = [27, 33, 0];
        return data;
    }

    static setSpeed(n) {
        let data = [31, 27, 31, 47, n];
        return data;
    }

    static setDormancyTime(n) {
        let data = [31, 27, 31, 0, 0, 1, -94, n];
        return data;
    }

    static setOffTime(n) {
        let data = [31, 27, 31, 0, 0, 1, -93, n];
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

export default Pos58Commond;
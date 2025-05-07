import { byteMerger, strToBytesUseCharset } from "./command_public_utils"

var charsetName = "gbk";

class TSCCommandUtils {
    /**
 * 设置编码字符集
 * @param charset 
 */
    static setCharsetName(charset) {
        charsetName = charset
    }

    static sizeBymm(m, n) {
        let str = "SIZE " + m + " mm," + n + " mm\n";
        let data = strTobytes(str);
        return data;
    }

    static sizeByinch(m, n) {
        let str = "SIZE " + m + "," + n + "\n";
        let data = strTobytes(str);
        return data;
    }

    static sizeBydot(m, n) {
        let str = "SIZE " + m + " dot," + n + " dot\n";
        let data = strTobytes(str);
        return data;
    }

    static gapByinch(m, n) {
        let str = "GAP " + m + "," + n + "\n";
        let data = strTobytes(str);
        return data;
    }

    static gapBymm(m, n) {
        let str = "GAP " + m + " mm," + n + " mm\n";
        let data = strTobytes(str);
        return data;
    }

    static gapBydot(m, n) {
        let str = "GAP " + m + " dot," + n + " dot\n";
        let data = strTobytes(str);
        return data;
    }

    /**
     * this command feeds the paper throught the gap sensor in an effort to determine the paper and gap sizes,respectively.
     * @param x  x: paper length（in dots） 
     * @param y: gap length(in dots)
     * @returns 
     */
    static gapDetectBy(x, y) {
        let str = "GAPDETECT " + x + "," + y + "\n";
        let data = strTobytes(str);
        return data;
    }

    static gapDetect() {
        let str = "GAPDETECT\n";
        let data = strTobytes(str);
        return data;
    }

    static blineDetect(x, y) {
        let str = "BLINEDETECT " + x + "," + y + "\n";
        let data = strTobytes(str);
        return data;
    }

    static autoDetect(x, y) {
        let str = "AUTODETECT " + x + "," + y + "\n";
        let data = strTobytes(str);
        return data;
    }

    static blineByinch(m, n) {
        let str = "BLINE " + m + "," + n + "\n";
        let data = strTobytes(str);
        return data;
    }

    static blineBymm(m, n) {
        let str = "BLINE " + m + " mm," + n + " mm\n";
        let data = strTobytes(str);
        return data;
    }

    static blineBydot(m, n) {
        let str = "BLINE " + m + " dot," + n + " dot\n";
        let data = strTobytes(str);
        return data;
    }

    static offSetByinch(m) {
        let str = "OFFSET " + m + "\n";
        let data = strTobytes(str);
        return data;
    }

    static offSetBymm(m) {
        let str = "OFFSET " + m + " mm\n";
        let data = strTobytes(str);
        return data;
    }

    static offSetBydot(m) {
        let str = "OFFSET " + m + " dot\n";
        let data = strTobytes(str);
        return data;
    }

    static speed(n) {
        let str = "SPEED " + n + "\n";
        let data = strTobytes(str);
        return data;
    }

	/**
	 * @param {number} n 打印浓度 1 <= n <= 15
	 */
    static density(n) {
        let str = "DENSITY " + n + "\n";
        let data = strTobytes(str);
        return data;
    }

    static direction(n) {
        let str = "DIRECTION " + n + "\n";
        let data = strTobytes(str);
        return data;
    }

    static reference(x, y) {
        let str = "REFERENCE " + x + ", " + y + "\n";
        let data = strTobytes(str);
        return data;
    }

    static shift(n) {
        let str = "SHIFT " + n + "\n";
        let data = strTobytes(str);
        return data;
    }

    static country(n) {
        let str = "COUNTRY " + n + "\n";
        let data = strTobytes(str);
        return data;
    }

    static codePage(n) {
        let str = "CODEPAGE " + n + "\n";
        let data = strTobytes(str);
        return data;
    }

    static cls() {
        let str = "CLS\n";
        let data = strTobytes(str);
        return data;
    }

    static feed(n) {
        let str = "FEED " + n + "\n";
        let data = strTobytes(str);
        return data;
    }

    static backFeed(n) {
        let str = "BACKFEED " + n + "\n";
        let data = strTobytes(str);
        return data;
    }

    static formFeed() {
        let str = "FORMFEED\n";
        let data = strTobytes(str);
        return data;
    }

    static home() {
        let str = "HOME\n";
        let data = strTobytes(str);
        return data;
    }

    /**
     * this command prints the label format currently stored in the image buffer.
     * @param {int} m specifies how many sets of labels will be printed
     * @param {int} n specifies how many copies should be printed for each particular label set.
     * @returns 
     */
    static print(m, n) {
        let str = "PRINT " + m + "," + n + "\n";
        let data = strTobytes(str);
        return data;
    }
    /**
     * this command prints the label format currently stored in the image buffer.
     * @param {int} m  specifies how many sets of labels will be printed
     * @returns 
     */
    static printCount(m) {
        let str = "PRINT " + m + "\n";
        let data = strTobytes(str);
        return data;
    }

    static sound(level, interval) {
        let str = "SOUND " + level + "," + interval + "\n";
        let data = strTobytes(str);
        return data;
    }

    static cut() {
        let str = "CUT\n";
        let data = strTobytes(str);
        return data;
    }

    static limitFeedByinch(n) {
        let str = "LIMITFEED n\n";
        let data = strTobytes(str);
        return data;
    }

    static limitFeedBymm(n) {
        let str = "LIMITFEED n mm\n";
        let data = strTobytes(str);
        return data;
    }

    static limitFeedBydot(n) {
        let str = "LIMITFEED n dot\n";
        let data = strTobytes(str);
        return data;
    }

    /**
     * At this command ,the printer will print out the printer information
     * @returns 
     */
    static selfTest() {
        let str = "SELFTEST\n";
        let data = strTobytes(str);
        return data;
    }

    /**
     * At this command,the printer will print out the printer information
     * @param {string} page the one kind of the printer informations.
     * @returns 
     */
    static selfTestBy(page) {
        let str = "SELFTEST " + page + "\n";
        let data = strTobytes(str);
        return data;
    }

    static eoj() {
        let str = "EOJ\n";
        let data = strTobytes(str);
        return data;
    }

    static delay(ms) {
        let str = "DELAY " + ms + "\n";
        let data = strTobytes(str);
        return data;
    }

    static disPlay(s) {
        let str = "DISPLAY " + s + "\n";
        let data = strTobytes(str);
        return data;
    }

    static initialPrinter() {
        let str = "INITIALPRINTER\n";
        let data = strTobytes(str);
        return data;
    }

    static bar(x, y, width, heigth) {
        let str = "BAR " + x + "," + y + "," + width + "," + heigth + "\n";
        let data = strTobytes(str);
        return data;
    }

    static barCode(x, y, codeType, heigth, human, rotation, narrow, wide, content) {
        let str = "BARCODE " + x + "," + y + ",\"" + codeType + "\"," + heigth + "," + human + "," + rotation + "," + narrow + "," + wide + ",\"" + content + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    // static bitmap(x, y, mode, Bitmap bitmap, BmpType bmpType) {
    //     int width = (bitmap.getWidth() + 7) / 8;
    //     int heigth = bitmap.getHeight();
    //     let str = "BITMAP " + x + "," + y + "," + width + "," + heigth + "," + mode + ",";
    //     String end = "\n";
    //     byte[] ended = strTobytes(end);
    //     byte[] head = strTobytes(str);
    //     let data = BitmapToByteData.downLoadBmpToSendTSCData(bitmap, bmpType);
    //     data = byteMerger(head, data);
    //     data = byteMerger(data, ended);
    //     return data;
    // }

    static box(x, y, x_end, y_end, thickness) {
        let str = "BOX " + x + "," + y + "," + x_end + "," + y_end + "," + thickness + "\n";
        let data = strTobytes(str);
        return data;
    }

    static ellipse(x, y, width, height, thickness) {
        let str = "ELLIPSE " + x + "," + y + "," + width + "," + height + "," + thickness + "\n";
        let data = strTobytes(str);
        return data;
    }

    static codeBlockFMode(x, y, rotation, row_height, module_width, content) {
        let str = "CODABLOCK " + x + "," + y + "," + rotation + "," + row_height + "," + module_width + ",\"" + content + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    /**
     * this command draws an DataMatrix 2d barcode .
     * @param {int} x 
     * @param {int} y 
     * @param {int} width 
     * @param {int} height 
     * @param {int} xm 
     * @param {int} row 
     * @param {int} col 
     * @param {string} expression 
     * @param {string} content  content: the content of DataMatrix.
     * @returns 
     */
    static dmatrixWithRowAndCol(x, y, width, height, xm, row, col, expression, content) {
        let str = "DMATRIX " + x + "," + y + "," + width + "," + height + "," + xm + "," + row + "," + col + "," + expression + ",\"" + content + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    /**
     * this command draws an DataMatrix 2d barcode .
     * @param {int} x 
     * @param {int} y 
     * @param {int} width 
     * @param {int} height 
     * @param {string} expression 
     * @param {string} content  content: the content of DataMatrix.
     * @returns 
     */
    static dmatrix(x, y, width, height, expression, content) {
        let str = "DMATRIX " + x + "," + y + "," + width + "," + height + "," + expression + ",\"" + content + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    static erase(x, y, width, height) {
        let str = "ERASE " + x + "," + y + "," + width + "," + height + "\n";
        let data = strTobytes(str);
        return data;
    }

    static pdf417(x, y, width, height, rotate, option, content) {
        let str = "PDF417 " + x + "," + y + "," + width + "," + height + "," + rotate + "," + option + ",\"" + content + "\"\n";
        let data = strTobytes(str);
        return data;
    }


    static putBmpWithBPP(x, y, filename, bpp, contrast) {
        let str = "PUTBMP " + x + "," + y + ",\"" + filename + "\", " + bpp + ", " + contrast + "\n";
        let data = strTobytes(str);
        return data;
    }

    static putBmp(x, y, filename) {
        let str = "PUTBMP " + x + "," + y + ",\"" + filename + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    static putpcx(x, y, filename) {
        let str = "PUTPCX " + x + "," + y + ",\"" + filename + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    static qrCodeWithRotation(x, y, eccLevel, cellWidth, mode, rotation, model, mask, content) {
        let str = "QRCODE " + x + "," + y + "," + eccLevel + "," + cellWidth + "," + mode + "," + rotation + "," + model + "," + mask + ",\"" + content + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    static qrCode(x, y, eccLevel, cellWidth, mode, rotation, content) {
        let str = "QRCODE " + x + "," + y + "," + eccLevel + "," + cellWidth + "," + mode + "," + rotation + ",\"" + content + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    static reverse(x, y, width, height) {
        let str = "REVERSE " + x + "," + y + "," + width + "," + height + "\n";
        let data = strTobytes(str);
        return data;
    }

    static text(x, y, font, rotation, x_multiplication, y_multiplication, content) {
        let str = "TEXT " + x + "," + y + ",\"" + font + "\"," + rotation + "," + x_multiplication + "," + y_multiplication + ",\"" + content + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    static blockBySpace(x, y, width, height, font, rotation, x_multiplication, y_multiplication, space, alignment, content) {
        let str = "BLOCK " + x + "," + y + "," + width + "," + height + ",\"" + font + "\"," + rotation + "," + x_multiplication + "," + y_multiplication + "," + space + "," + alignment + ",\"" + content + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    static block(x, y, width, height, font, rotation, x_multiplication, y_multiplication, content) {
        let str = "BLOCK " + x + "," + y + "," + width + "," + height + ",\"" + font + "\"," + rotation + "," + x_multiplication + "," + y_multiplication + ",\"" + content + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    static checkPrinterStateByPort9100() {
        let data = [29, 97, 31];
        return data;
    }

    static checkPrinterStateByPort4000() {
        let data = [27, 118, 0];
        return data;
    }

    static downLoadFileName(filename) {
        let str = "DOWNLOAD \"" + filename + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    static downLoadWithContent(filename, size, content) {
        let str = "DOWNLOAD \"" + filename + "\"," + size + "," + content + "\n";
        let data = strTobytes(str);
        return data;
    }

    static downLoadFileData(filename, fileData) {
        let data = fileData
        const size = data.length;
        let str = "DOWNLOAD \"" + filename + "\"," + size + ",";
        const head = strTobytes(str);
        data = byteMerger(head, data);
        const end = strTobytes("\n");
        data = byteMerger(data, end);
        return data;
    }

    static downLoadBitmapData(filename, bitmapData) {
        let data = bitmapData
        const size = data.length;
        let str = "DOWNLOAD \"" + filename + "\"," + size + ",";
        const head = strTobytes(str);
        data = byteMerger(head, data);
        const end = strTobytes("\n");
        data = byteMerger(data, end);
        return data;
    }

    static eop() {
        let str = "EOP\n";
        let data = strTobytes(str);
        return data;
    }

    static files() {
        let str = "FILES\n";
        let data = strTobytes(str);
        return data;
    }

    static kill(filename) {
        let str = "KILL \"" + filename + "\"\n";
        let data = strTobytes(str);
        return data;
    }

    static move() {
        let str = "MOVE\n";
        let data = strTobytes(str);
        return data;
    }

    static run(filename) {
        let str = "RUN \"" + filename + "\"\n";
        let data = strTobytes(str);
        return data;
    }

}

function strTobytes(str) {
    return strToBytesUseCharset(charsetName, str)
}


export default TSCCommandUtils;
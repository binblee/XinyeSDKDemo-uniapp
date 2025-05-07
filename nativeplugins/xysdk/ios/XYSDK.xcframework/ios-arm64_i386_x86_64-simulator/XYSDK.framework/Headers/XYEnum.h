//
//  XYEnum.h
//  XYSDK
//
//  Created by vida on 2022/3/22.
//

#ifndef XYEnum_h
#define XYEnum_h

#import <Foundation/Foundation.h>

/// 实时传送打印机状态枚举
typedef NS_ENUM(NSUInteger, XYGetPrinterRealTimeStatusType) {
    /// 传送打印机状态
    XYGetPrinterRealTimeStatusTypePrinter = 1,
    /// 传送脱机状态
    XYGetPrinterRealTimeStatusTypeOffline,
    /// 传送错误状态
    XYGetPrinterRealTimeStatusTypeError,
    /// 传送纸传感器状态
    XYGetPrinterRealTimeStatusTypePaperSensor,
};

typedef NS_OPTIONS(NSUInteger, XYReturnPrinterRealTimeStatus) {
    /// 未知
    XYReturnPrinterRealTimeStatusUnknow = 0,
    /// 正常
    XYReturnPrinterRealTimeStatusNoError = 1 << 0,
    /** ---------打印机状态 / XYGetPrinterRealTimeStatusPrinter---------------  */
    
    /// 一个或两个钱箱打开 0x00
    XYReturnPrinterRealTimeStatusOneOrTwoBoxOpened = 1 << 1,
    /// 脱机 0x08
    XYReturnPrinterRealTimeStatusOffline = 1 << 2,
    /** ---------脱机状态 / XYGetPrinterRealTimeStatusOffline---------------  */
    
    /// 上盖未关 0x04
    XYReturnPrinterRealTimeStatusCoverOpen = 1 << 3,
    /// 未按下走纸键 0x08
    XYReturnPrinterRealTimeStatusPaperButtonNoDown = 1 << 4,
    /// 缺纸 0x20
    XYReturnPrinterRealTimeStatusNoPaper = 1 << 5,
    /// 有错误情况 0x40
    XYReturnPrinterRealTimeStatusHasError = 1 << 6,
    
    /** ---------错误状态/ XYGetPrinterRealTimeStatusError---------------  */
    ///  切刀有错误 0x08
    XYReturnPrinterRealTimeStatusCutterError = 1 << 7,
    /// 有不可恢复错误 0x20
    XYReturnPrinterRealTimeStatusIrrecoverableError = 1 << 8,
    /// 打印头温度或电压超出范围 0x40
    XYReturnPrinterRealTimeStatusPrintHeadError = 1 << 9,
    
    /** ---------纸传感器状态 / XYGetPrinterRealTimeStatusPaperSensor---------------  */
    /// 纸将尽 0x0c
    XYReturnPrinterRealTimeStatusPaperWillRunOut = 1 << 10,
    /// 纸尽 0x60
    XYReturnPrinterRealTimeStatusRunOutOfPaper = 1 << 11,
};



#endif /* XYEnum_h */

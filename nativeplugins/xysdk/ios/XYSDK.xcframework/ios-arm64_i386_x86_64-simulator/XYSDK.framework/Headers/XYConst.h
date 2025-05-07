//
//  Const.h
//  XYSDK
//
//  Created by vida on 2022/2/22.
//


#ifndef Const_h
#define Const_h

#import <Foundation/Foundation.h>

/// 蓝牙状态变更的通知
FOUNDATION_EXPORT NSNotificationName const XYBluetoothStateChangeNotification;
/// 蓝牙状态的key
FOUNDATION_EXPORT NSString *const XYBluetoothStateKey;


FOUNDATION_EXPORT NSErrorDomain const XYSDKErrorDomain;
FOUNDATION_EXPORT NSErrorDomain const XYCommandErrorDomain;

NS_ERROR_ENUM(XYSDKErrorDomain) {
    XYErrorOther = -1000,
};


NS_ERROR_ENUM(XYCommandErrorDomain) {
    /// 超时
    /**
     NSError *error = [XYErrorUtils commandErrorWithCode:XYCommandErrorTimeout
                                          descriptionKey: @"Timeouted"
                                          reasonErrorKey: [NSString stringWithFormat: @"查询打印任务成功状态超时, 当前设置的超时时间为 %lf", timeout]
                              recoverySuggestionErrorKey: @"1.确保打印机支持指令。2.打印任务可能正在执行或等待执行。"];
     */
    XYCommandErrorTimeout = 1001,

    /// 断开，但没有错误(代码断开)
    /**
     NSError *error = [XYErrorUtils commandErrorWithCode:XYCommandErrorDisconnectNoError
                                          descriptionKey: @"DisconnectPeripheral without error"
                                          reasonErrorKey:@"收到系统断开连接的回调，但没有收到错误"
                              recoverySuggestionErrorKey:@"调用了cancelPeripheralConnection:"];
     */
    XYCommandErrorDisconnectNoError = 1002,
    /// 没有读取到写特征值
    /**
     [XYErrorUtils commandErrorWithCode:XYCommandErrorNoWriteCharacteristic
                                 descriptionKey: @"No write characteristic"
                                 reasonErrorKey: @"没有获取到蓝牙外设的写特征值"
                     recoverySuggestionErrorKey: @"检查蓝牙设备的写特征值"];
     */
    XYCommandErrorNoWriteCharacteristic = 1003,
    /// 数据为空
    /**
     NSError *error = [XYErrorUtils commandErrorWithCode:XYCommandErrorNilData
                                          descriptionKey: @"Data is Nil"
                                          reasonErrorKey:@"传入的Data为nil"
                              recoverySuggestionErrorKey:@"检查Data"];
     */
    XYCommandErrorNilData = 1004,
    /// Peripheral为空
    /**
     NSError *error = [XYErrorUtils commandErrorWithCode:XYCommandErrorNotSentComplete
                                 descriptionKey: @"Not sent complete"
                                 reasonErrorKey: @"在发送数据的过程中, 外设连接出现过中断"
                     recoverySuggestionErrorKey: @"已知：在控制中心关闭蓝牙不会触发disconnectPeripheral的代理方法"];
     */
    XYCommandErrorNilPeripheral = 1005,
    /// 蓝牙状态是断开的
    /**
     NSError *error = [XYErrorUtils commandErrorWithCode:XYCommandErrorPeripheralDisconnected
                                          descriptionKey: @"Peripheral is 已经断开"
                                          reasonErrorKey:@"传入的Peripheral的state是 disconnected"
                              recoverySuggestionErrorKey:@"传入的Peripheral已经断开连接"];
     */
    XYCommandErrorPeripheralDisconnected = 1006,
    
    /// 写入超时, 这个异常很特殊，不会停止打印任务
    /// 写入数据，打印机超时，例如缺纸，待打印机正常后，会继续打印任务, 如果需要不需要继续打印，调用取消任务
    /**
     NSError *error = [XYErrorUtils commandErrorWithCode:XYCommandErrorWriteDataTimeout
                                          descriptionKey: @"写入超时"
                                          reasonErrorKey:@"写入超时"
                              recoverySuggestionErrorKey:@"写入数据，打印机没有反馈，如缺纸"];
     */
    XYCommandErrorWriteDataTimeout = 1007,
};


#endif /* Const_h */

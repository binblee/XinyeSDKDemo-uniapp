//
//  XYBLEManager.h
//  Printer
//
//  Created by apple on 16/4/5.
//  Copyright © 2016年 Admin. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreBluetooth/CoreBluetooth.h>
#import "BLEManager.h"
#import "XYEnum.h"

NS_ASSUME_NONNULL_BEGIN

typedef BleManagerSendFinishCallBack XYBLEManagerSendDataCallback;
typedef void(^XYTSCCompletionBlock)(CBCharacteristic * _Nullable character, NSError * _Nullable error);
@protocol XYBLEManagerDelegate <NSObject>

- (void)XYcentralManagerDidUpdateState:(CBCentralManager *)central;
// 发现周边
- (void)XYdidUpdatePeripheralList:(NSArray *)peripherals RSSIList:(NSArray *)rssiList;
// 连接成功
- (void)XYdidConnectPeripheral:(CBPeripheral *)peripheral;
// 连接失败
- (void)XYdidFailToConnectPeripheral:(CBPeripheral *)peripheral error:(NSError *)error;
// 断开连接
- (void)XYdidDisconnectPeripheral:(CBPeripheral *)peripheral isAutoDisconnect:(BOOL)isAutoDisconnect;
// 发送数据成功
- (void)XYdidWriteValueForCharacteristic:(CBCharacteristic *)character error:(NSError *)error;

@end

@interface XYBLEManager : NSObject
{
        int commandSendMode; //命令发送模式 0:立即发送 1：批量发送
        /**
         *  指定写入数据的编码方式 utf8等
         */
        NSStringEncoding encodingType;

}
@property (nonatomic,weak) id<XYBLEManagerDelegate> delegate;
/**
 *  指定写入数据的外设
 */
@property (nonatomic,strong) CBPeripheral *writePeripheral;
@property (nonatomic,strong) BLEManager *manager;


#pragma mark - 基本方法
/**
 *  单例方法
 *
 *  @return self
 */
+ (instancetype)sharedInstance;
/**
 *  开始扫描
 */
- (void)XYstartScan;
/**
 *  停止扫描
 */
- (void)XYstopScan;
/**
 *  连接指定设备
 */
- (void)XYconnectDevice:(CBPeripheral *) peripheral;
/**
 *  手动断开现连设备
 */
-(void)XYdisconnectRootPeripheral;
/**
 *  写入打印数据
 *  dataStr : 输入字符串
 */
- (void)XYsendDataToPeripheral:(CBPeripheral *)peripheral dataString:(NSString *)dataStr;

//统一的发送指令方法，通过指令工具类，得到完整指令，然后再发送
-(void)XYWriteCommandWithData:(NSData *)data;

//统一的发送指令方法，带发送完成回调
-(void)XYWriteCommandWithData:(NSData *)data sendFinishCallBack:(XYBLEManagerSendDataCallback)sendFinishCallBack;

// 统一的发送指令方法, 并等待设备响应
- (void)XYWriteCommandWithData:(NSData *)data callBack:(XYTSCCompletionBlock)block;

- (void)XYWriteCommandToPeripheral:(CBPeripheral *)peripheral data:(NSData *)data;

//统一的发送指令方法，带发送完成回调
-(void)XYWriteCommandToPeripheral:(CBPeripheral *)peripheral data:(NSData *)data sendFinishCallBack:(XYBLEManagerSendDataCallback)sendFinishCallBack;

- (void)XYWriteCommandToPeripheral:(CBPeripheral *)peripheral data:(NSData *)data callBack:(XYTSCCompletionBlock __nullable)block;

- (void)getPrinterStatusForType:(XYGetPrinterRealTimeStatusType)type callback:(void(^_Nullable)(XYReturnPrinterRealTimeStatus status, NSError * _Nullable error))callback;

/* 32.设置打印机发送命令模式
 * 范围：0，1
 ＊ 0:立即发送
 ＊ 1:批量发送
 */
- (void)XYSetCommandMode:(BOOL)Mode;
/* 33.返回批量打印缓冲区指令
 */
-(NSArray*)XYGetBuffer;

/* 34.清除打印缓冲区内容
 */
-(void)XYClearBuffer;

/* 35.批量发送打印缓冲区指令
 */
-(void)XYSendCommandBuffer;

/* 36.设置命令data编码方式
 */
-(void)XYSetDataCodingType:(NSStringEncoding) codingType;


@end

NS_ASSUME_NONNULL_END

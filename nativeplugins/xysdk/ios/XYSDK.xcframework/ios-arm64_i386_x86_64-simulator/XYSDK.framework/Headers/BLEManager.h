//
//  BLEManage.h
//  
//
//  Created by femto01 on 15/11/20.
//  Copyright © 2015年 WTT. All rights reserved.
//

/**
 *  #define kBLEM [BLEManager sharedBLEManager]
    if (kBLEM.isConnected) {
        [kBLEM writeDataToDevice:@[@(0)] command:1];
        [kBLEM writeDataToDevice:@[@(1),@(2)] command:2];
    }
 *
 *
 */

#import <Foundation/Foundation.h>
#import <CoreBluetooth/CoreBluetooth.h>
@class BLEManager;

//扫描发现设备回调block
typedef void (^BleManagerDiscoverPeripheralCallBack) (NSArray *peripherals);
typedef void (^BleManagerConnectPeripheralCallBack) (BOOL isConnected);
typedef void (^BleManagerReceiveCallBack) (CBCharacteristic *characteristic, NSError *error);
typedef void (^BleManagerSendFinishCallBack) (NSError *error);

/**
 定义代理BLEManagerDelegate
 */
@protocol BLEManagerDelegate <NSObject>
// 蓝牙状态发生改变
- (void)BLEManagerDelegate:(BLEManager *)BLEmanager centralManagerDidUpdateState:(CBCentralManager *)central;
// 发现外设
- (void)BLEManagerDelegate:(BLEManager *)BLEmanager updatePeripheralList:(NSArray *)peripherals RSSIList:(NSArray *)RSSIArr;
// 连接成功
- (void)BLEManagerDelegate:(BLEManager *)BLEmanager connectPeripheral:(CBPeripheral *)peripheral;
// 断开连接
- (void)BLEManagerDelegate:(BLEManager *)BLEmanager disconnectPeripheral:(CBPeripheral *)peripheral isAutoDisconnect:(BOOL)isAutoDisconnect;
// 连接设备失败
- (void)BLEManagerDelegate:(BLEManager *)BLEmanager didFailToConnectPeripheral:(CBPeripheral *)peripheral error:(NSError *)error;
// 收到数据
//- (void)BLEManagerDelegate:(BLEManager *)BLEmanager didReceiveDataFromPrinter:(CBCharacteristic *)characteristic;
// 发送数据成功
- (void)BLEManagerDelegate:(BLEManager *)BLEmanager didWriteValueForCharacteristic:(CBCharacteristic *)character error:(NSError *)error;
@end


@interface BLEManager : NSObject <CBCentralManagerDelegate, CBPeripheralDelegate> {
    CBCharacteristic *write_characteristic;
    CBCharacteristic *read_characteristic;
    int commandSendMode; //命令发送模式 0:立即发送 1：批量发送
}

#pragma mark -

@property (nonatomic,weak) id<BLEManagerDelegate> delegate;

#pragma mark 基本属性

@property (strong, nonatomic) CBCentralManager *manager;        //BLE 管理中心

@property (strong, nonatomic) CBPeripheral     *peripheral;     //外设-蓝牙硬件

@property (nonatomic,assign ) BOOL             isConnected;   //连接成功= yes，失败=no

@property (nonatomic,assign ) BOOL             isAutoDisconnect;     //是否自动连接，是=yes，不=no

@property (atomic,assign    ) BOOL           connectStatu;// 蓝牙连接状态

@property (strong, nonatomic  ) NSMutableArray        *peripherals;// 发现的所有 硬件设备

@property (strong, nonatomic) NSMutableArray *connectedPeripherals;//连接过的Peripherals

@property (strong, nonatomic) NSMutableArray *RSSIArray;// 蓝牙信号数组

@property (assign, readonly) BOOL isScaning; //是否正在扫描 是=yes，没有=no

// 发送数据到指定的外设
@property (nonatomic,strong) CBPeripheral *writePeripheral;
/**
 * Completion block for peripheral scanning
 */
@property (copy, nonatomic) BleManagerDiscoverPeripheralCallBack scanBlock;

@property (nonatomic,strong) NSMutableArray *dataArray;
@property (nonatomic,strong) NSMutableArray *commandBuffer;
/*
 *连接蓝牙回调
 */
@property (copy, nonatomic) BleManagerConnectPeripheralCallBack connectBlock;

/// 设置分包大小
+(void)setMTU:(NSInteger)MTU;

#pragma mark -
#pragma mark 基本方法
/**
 *  单例方法
 *
 *  @return self
 */
+ (instancetype)sharedBLEManager;

/*
 *  获取手机蓝牙状态
 */
- (BOOL)isLECapableHardware;

/**
 *  开启蓝牙扫描
 */
- (void)startScan;

/*
 *  开始扫描并在scanInterval秒后停止
 */
- (void)startScanWithInterval:(NSInteger)scanInterval completion:(BleManagerDiscoverPeripheralCallBack)callBack;

/**
 *  停止扫描
 */
- (void)stopScan;

/**
 *  连接到指定设备
 */
- (void)connectPeripheral:(CBPeripheral *)peripheral;

/*
 *  连接蓝牙设备
 */
- (void)connectPeripheral:(CBPeripheral *)peripheral completion:(BleManagerConnectPeripheralCallBack)callBack;

/*
 *  尝试重新连接
 */
- (void)reConnectPeripheral:(CBPeripheral *)peripheral;

/**
 *  断开连接
 */
- (void)disconnectPeripheral:(CBPeripheral *)peripheral;


#pragma mark -
#pragma mark 自定义其他属性
/**
 *  向设备写入数据
 *
 *  @param dataArray 需要写入的数据
 *  @param command   命令值，1=消息提醒， 2=跑步目标， 3=跑步完成目标时的灯光提醒， 4=设置低电量灯光提醒， 5=设置灯光常开颜色， 6=灯光常开时间， 7=灯光常开模式， 8=设置设备时间
 */
//- (void)writeDataToDevice:(NSArray *)dataArray command:(int)command;

/**
 发送数据给设备，发送的数据是NSString类型的，并且要指定编码类型
 */
-(void)sendDataWithPeripheral:(CBPeripheral *)peripheral withString:(NSString *)dataString coding:(NSStringEncoding)EncodingType;

/**
 发送指令给打印机
 */
-(void)writeCommadnToPrinterWthitData:(NSData *_Nonnull)data;

/**
 发送指令给打印机
 */
-(void)writeCommadnToPrinterWthitData:(NSData *_Nonnull)data sendCallback:(BleManagerSendFinishCallBack _Nullable)block;

-(void)writeCommadnToPrinter:(CBPeripheral *_Nonnull)peripheral withData:(NSData *_Nonnull)data sendCallback:(BleManagerSendFinishCallBack _Nullable)sendCallback;

/**
 发送指令给打印机,带回调方法
 */
-(void)writeCommadnToPrinterWthitData:(NSData  *_Nonnull)data withResponse:(BleManagerReceiveCallBack _Nullable)block;

/**
 发送指令给打印机,带回调方法
 */
-(void)writeCommadnToPrinter:(CBPeripheral *_Nonnull)peripheral
                   wthitData:(NSData *_Nonnull)data
                withResponse:(BleManagerReceiveCallBack _Nullable )block;


-(void)reScan;  /**断开现有设备的重新扫描*/

-(void)disconnectRootPeripheral;  //断开现连设备
/**
 * 32.返回待发送缓冲区内容
 */
-(NSArray *__nullable)GetBuffer;
/**
 * 33.清空缓冲区内容
 */
-(void)ClearBuffer;
/**
 * 34.发送缓冲区命令
 */
-(void)SendCommandBuffer;
/**
 * 34.发送单条命令
 */
-(void)sendCommand:(NSData *)data;

- (void)XYSetCommandMode:(int)Mode;
@end


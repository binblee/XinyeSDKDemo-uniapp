//
//  XYReadDataUtils.h
//  XYSDK
//
//  Created by vida on 2022/3/22.
//

#import <Foundation/Foundation.h>
#import "XYEnum.h"

NS_ASSUME_NONNULL_BEGIN

@interface XYReadDataUtils : NSObject

/// 解析10 04 N返回的数据
+ (XYReturnPrinterRealTimeStatus)statusForType:(XYGetPrinterRealTimeStatusType)type NSData:(NSData *)returnData;

@end

NS_ASSUME_NONNULL_END

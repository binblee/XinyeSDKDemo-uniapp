#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>


@interface ImageTranster : NSObject

typedef enum {
    Dithering=0,//图片单色处理的方式：二值法
    Threshold//抖动算法
} BmpType;

typedef enum {
    RasterNolmorWH=0,//打印光栅位图的模式：正常大小
    RasterDoubleWidth,//倍宽
    RasterDoubleHeight,//倍高
    RasterDoubleWH//倍宽高
} PrintRasterType;



+(NSData *)Imagedata:(UIImage *) mImage andType:(BmpType) bmptype andPaperHeight:(int)paperheight;

+(NSData *)rasterImagedata:(UIImage *) mIamge andType:(BmpType) bmptype andPrintRasterType:(PrintRasterType) type andPaperHeight:(int)paperheight;

+(NSData *)rasterImagedata:(UIImage *)mIamge
                   andType:(BmpType)bmptype
        andPrintRasterType:(PrintRasterType) type andPaperHeight:(int)paperheight
               useCompress:(BOOL)useCompress;

@end


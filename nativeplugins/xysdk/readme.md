### 说明
安卓支持连接方式: 网络, usb, 蓝牙
ios支持连接方式: 网络, 蓝牙

#### 目录说明

##### js目录
这个目录下中的XYSDK文件夹是JS部分的代码, 具体使用看demo中的util/demo_utils/
* XYSDK.js
  * 封装了调用原生模块的方法
* command_utils/pos_58_command_utils.js 
  * 封装了58系列机器的指令
* command_utils/pos_80_command_utils.js
  * 封装了80系列机器的指令
* command_utils/tsc_command_utils.js
  * 封装了TSC指令
* command_utils/printUtil-GBK.js
  * 用于字符串转成GBK编码
* command_utils/command_public_utils.js
  * 一些工具类, 比如字符编码,合并字节,base64的转换

##### android目录
* xysdk
 * SDK Module

##### ios目录

* XYSDKUniPlugin.framework
  * 这个类是uniapp的插件
* XYSDK.xcframework, 
  * 静态库SDK

#### 集成说明

* Android 离线打包原生插件另见文档 https://nativesupport.dcloud.net.cn/NativePlugin/offline_package/android
* iOS 离线打包原生插件另见文档 https://nativesupport.dcloud.net.cn/NativePlugin/offline_package/ios

#### 安卓
1. 添加xysdk Module
2. AndroidManifest注册服务  
  <service android:name="net.posprinter.service.PosprinterService" />
3. 启动页面或者application 初始化
   PrinterUtil.getInstance().init(this);

#### ios
1. 把XYSDK.xcframework 和XYSDKUniPlugin.framework 添加到ios的项目中
2. 添加系统库:
  * SystemConfiguration.framework
  * CFNetwork.framework
  * CoreBluetooth.framework

3. 在info.plist中添加蓝牙权限说明: NSBluetoothAlwaysUsageDescription
4. 在info.plist添加插件信息
```
        <dict>
            <key>hooksClass</key>
            <string></string>
            <key>plugins</key>
            <array>
                <dict>
                    <key>class</key>
                    <string>XYSDKModule</string>
                    <key>name</key>
                    <string>xysdk</string>
                    <key>type</key>
                    <string>module</string>
                </dict>
            </array>
        </dict> 
```

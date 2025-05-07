<template>
	<view class="container">

		<view class="top_view">
			<picker @change="connectTypePickerChange" :value="connectType" :range="connectTypeList">
				<button class="top_connect_type_btn"> {{ connectTypeList[connectType] }} </button>
			</picker>
			<view class="top_input_content_view">
				<input v-if="connectType == 0" v-model="ip" class="top_ip_input" placeholder="192.168.2.56" />
				<view v-if="connectType == 1" class="bluetooth_info" @click="bluetoothInfoClick">{{selectedBluetooth ?
				selectedBluetooth.name : "请选择设备"}}</view>
				<view v-if="connectType == 2" class="usb_info" @click="usbInfoClick">
					{{selectedUSB ? selectedUSB : "请选择设备"}}
				</view>
			</view>
		</view>
		<view class="connect_action_view">
			<button class="action_btn" hover-class="action_btn_hover" @click="connect">
				连接
			</button>
			<button class="action_btn" hover-class="action_btn_hover" style="margin-left: 15rpx" @click="disconnect">
				断开
			</button>
		</view>
		<view class="print_content_view">
			<p class="print_action_title">票据打印机</p>
			<view class="print_action_view">
				<button class="action_btn" hover-class="action_btn_hover" @click="goPrint('58')">
					58
				</button>
				<button class="action_btn" hover-class="action_btn_hover" style="margin-left: 15rpx"
					@click="goPrint('80')">
					80
				</button>
			</view>
		</view>
		<view class="print_content_view">
			<p class="print_action_title">标签打印机</p>
			<view class="print_action_view">
				<button class="action_btn" hover-class="action_btn_hover" @click="goPrint('Label')">两寸三寸条码机</button>
			</view>
		</view>
		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="bluetoothPopup" background-color="#fff">
				<bluetooth-selected-view :deviceList="buletoothDeviceList" @deviceSelected="bluetoothDeviceSelected"
					@search="bluetoothSearch" />
			</uni-popup>
		</view>
		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="usbPopup" background-color="#fff">
				<usb-selected-view :deviceList="usbDeviceList" @deviceSelected="usbDeviceSelected" />
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import {
		XYSDK
	} from '../../utils/XYSDK/XYSDK'
	export default {
		data() {
			return {
				connectTypeList: [
					"网络",
					"蓝牙",
					"USB",
				],
				// 连接类型
				connectType: 0,
				// 选择的蓝牙设备
				selectedBluetooth: undefined,
				// 选择的usb设备
				selectedUSB: undefined,
				// ip地址
				ip: '',
				// 蓝牙列表
				buletoothDeviceList: [],
				// usb列表
				usbDeviceList: [],
				// 是否已连接
				isConnected: false
			};
		},
		methods: {
			// 点击链接，连接设备
			connect: function() {
				console.log(this.connectType);
				if (this.isConnected) {
					this.isConnected = false
					XYSDK.disconnect(this.connectType)
				}
				const callback = (isSuccess) => {
					this.isConnected = isSuccess
					uni.showToast({
						title: isSuccess ? '连接成功' : '连接失败',
						icon: 'none'
					})
				}
				switch (this.connectType) {
					case 0: {
						if (this.ip) {
							XYSDK.connectWifi(this.ip, callback)
						} else {
							uni.showToast({
								title: "请输入ip地址",
								icon: "none"
							})
						}
						break
					}
					case 1: {
						if (this.selectedBluetooth) {
							uni.showLoading({
								title: "正在连接"
							})
							console.log("开始蓝牙连接");
							XYSDK.connectBluetooth(this.selectedBluetooth.id, callback)
						} else {
							uni.showToast({
								title: "请选择蓝牙设备",
								icon: "none"
							})
						}

						break
					}
					case 2: {
						if (this.selectedUSB) {
							XYSDK.connectUSB(this.selectedUSB, callback)
						} else {
							uni.showToast({
								title: "请选择USB设备",
								icon: "none"
							})
						}
						break
					}
				}
			},
			// 断开连接
			disconnect: function() {

				if (this.isConnected) {
					this.isConnected = false
					XYSDK.disconnect(this.connectType)
				}
				console.log("断开连接");
			},
			// 调整打印页面
			goPrint: function(type) {
				if (!this.isConnected) {
					uni.showToast({
						title: "请连接设备",
						icon: 'none'
					})
					return
				}
				const url = `/pages/print-view/print-view?type=${type}&connectType=${this.connectType}`
				uni.navigateTo({
					url: url
				})
			},
			// 连接类型点击，弹起选择框
			connectTypeClick: function() {
				this.$refs.bindPickerRef.$el.click()
			},
			// 连接类型选择
			connectTypePickerChange: function(e) {
				if (this.isConnected) {
					XYSDK.disconnect(this.connectType)
					this.isConnected = false
				}
				this.connectType = e.detail.value
			},
			// 蓝牙信息点击
			bluetoothInfoClick: function() {
				XYSDK.addFindBluetoothDeviceCallback((result) => {
					console.log('addFindBluetoothDeviceCallback')
					console.log(result)
					this.buletoothDeviceList = result
				})
				XYSDK.startScanBluetooth()
				this.$refs.bluetoothPopup.open('center')
			},
			// usb信息点击
			usbInfoClick: function() {
				XYSDK.getUSBList((result) => {
					if (result) {
						this.usbDeviceList = result
					} else {
						this.usbDeviceList = []
					}
					this.$refs.usbPopup.open('center')
				})
			},
			// 蓝牙搜索
			bluetoothSearch: function() {
				XYSDK.startScanBluetooth()
				console.log("bluetoothSearch")
			},
			// 蓝牙设备选择回调
			bluetoothDeviceSelected: function(item) {
				XYSDK.stopScanBluetooth()
				this.selectedBluetooth = item
				this.$refs.bluetoothPopup.close('center')
				console.log("bluetoothDeviceSelected")
				console.log(JSON.stringify(item))
			},
			// USB设置选择回调，安卓特有
			usbDeviceSelected: function(item) {
				console.log("usbDeviceSelected")
				this.selectedUSB = item
				this.$refs.usbPopup.close('center')
			},

		},
		onLoad: function() {
			XYSDK.init()
			XYSDK.addCallback((res) => {
				if (res && res.actionCode) {
					switch (res.actionCode) {
						case 'CONN_STATE_DISCONN': {
							this.isConnected = false
							uni.hideLoading()
							uni.showToast({
								title: `断开连接 ${res.info.type}`,
								icon: 'error'
							})
							break
						}
					}
				}
			})
			XYSDK.openBLE((isSuccess) => {
				uni.showToast({
					title: isSuccess ? "获取蓝牙权限成功" : "获取蓝牙权限失败",
					icon: 'none'
				})
			})
			if (uni.getSystemInfoSync().platform === 'ios') {
				this.connectTypeList = [
					"网络",
					"蓝牙",
				]
			} else {
				this.connectTypeList = [
					"网络",
					"蓝牙",
					"USB",
				]
			}
		},
		onUnload: function() {
			XYSDK.addCallback(null)
			XYSDK.addFindBluetoothDeviceCallback(null)
		}
	};
</script>

<style>
	.top_view {
		display: flex;
		flex-direction: row;
		margin-top: 15rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
		border: 1px solid rgb(82, 139, 188);
		border-radius: 10rpx;
		height: 100rpx;
		padding: 5rpx;
	}

	.top_connect_type_btn {
		font-size: 1.01rem;
		width: 130rpx;
		height: 100%;
	}

	.top_input_content_view {
		height: 100%;
		flex: 1;
		display: flex;
		margin-left: 5rpx;
	}

	.top_ip_input {
		height: 90%;
		margin-left: 15rpx;
		flex: 1;
		background-color: white;
		border-bottom: 2px solid #ddd;
		font-size: 1.2rem;
	}

	.bluetooth_info {
		height: 100%;
		margin-left: 15rpx;
		flex: 1;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.usb_info {
		height: 100%;
		margin-left: 15rpx;
		flex: 1;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.connect_action_view {
		display: flex;
		margin-top: 15rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
		flex-direction: row;
		justify-content: space-between;
	}

	.action_btn {
		background: rgb(69, 147, 228);
		color: white;
		border: none;
		flex: 1;
	}

	.action_btn_hover {
		background: rgb(69, 147, 228);
		color: white;
		border: none;
		flex: 1;
		opacity: 0.7;
	}

	.print_content_view {
		margin-top: 20rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
	}

	.print_action_view {
		margin-top: 5rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.print_action_title {
		color: gray;
	}

	.popup-content {
		align-items: center;
		justify-content: center;
		padding: 15px;
		height: 900rpx;
		background-color: #fff;
	}
</style>
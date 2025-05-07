<template>
	<view>
		<view>
			<button class="action_btn" hover-class="action_btn_hover" v-for="(item) in actionList" :key="item.name"
				@click="actionClick(item.actionType)">
				{{ item.name }}
			</button>
		</view>
		<div>{{ filePath }}</div>
	</view>
</template>

<script>
import { CommentType_58, CommentType_80, CommentType_Lable } from '../../utils/demo_utils/print_type'
import { Pos58_PrintAction } from '../../utils/demo_utils/pos_58_print_demo_utils'
import { Pos80_PrintAction } from '../../utils/demo_utils/pos_80_print_demo_utils'
import { TSCPrintAction } from '../../utils/demo_utils/tsc_print_demo_utils'
import { pathToBase64 } from '../../js_sdk/mmmm-image-tools/index.js'
import { XYSDK } from '../../utils/XYSDK/XYSDK'
import { byteArrayToBase64 } from '../../utils/XYSDK/command_utils/command_public_utils.js'


export default {
	data() {
		return {
			filePath: '',
			printUtils: undefined,
			printType: '',
			connectType: -1,
			actionList: [
				{
					name: "样张",
					actionType: "simple"
				},
				{
					name: "打印文本",
					actionType: "text"
				},
				{
					name: "一维条码",
					actionType: "barcode"
				},
				{
					name: "二维条码",
					actionType: "qrcode"
				},
				{
					name: "光栅位图",
					actionType: "bitmap"
				},
			]
		}
	},
	methods: {
		actionClick: function (actionType) {
			console.log(actionType)
			if (!this.printUtils) {
				return
			}
			let printData;
			switch (actionType) {
				case 'simple': {
					printData = this.printUtils.printSimpleData()
					break;
				}
				case 'text': {
					printData = this.printUtils.printTextData()
					break;
				}
				case 'barcode': {
					printData = this.printUtils.printBarcodeData()
					break;
				}
				case 'qrcode': {
					printData = this.printUtils.printQRData()
					break;
				}
				case 'bitmap': {
					if (this.printType === CommentType_58 ) {
						uni.showLoading({
							title:"发送打印"
						})
						this.printUtils.printbitmapData(0, 1, (printData) => {
							const base64Str = byteArrayToBase64(printData)
							XYSDK.sendData(base64Str, this.connectType, (isSuccess) => {
								console.log("发送结果: ", isSuccess)
								uni.hideLoading()
								uni.showToast({ title: isSuccess ? '发送成功' : '发送失败', icon: 'none' })
							});
						})
					} else if (this.printType === CommentType_80 ) {
						uni.showLoading({
							title:"发送打印"
						})
						this.printUtils.printbitmapData(0, 0, (printData) => {
							const base64Str = byteArrayToBase64(printData)
							XYSDK.sendData(base64Str, this.connectType, (isSuccess) => {
								console.log("发送结果: ", isSuccess)
								uni.hideLoading()
								uni.showToast({ title: isSuccess ? '发送成功' : '发送失败', icon: 'none' })
							});
						})
					} else if (this.printType === CommentType_Lable) {
						uni.showLoading({
							title:"发送打印"
						})
						this.printUtils.printbitmapData(10, 10, 0, 1, (printData) => {
							const base64Str = byteArrayToBase64(printData)
							XYSDK.sendData(base64Str, this.connectType, (isSuccess) => {
								console.log("发送结果: ", isSuccess)
								uni.hideLoading()
								uni.showToast({ title: isSuccess ? '发送成功' : '发送失败', icon: 'none' })
							});
						})
					}
					break;
				}
			}

			if (actionType !== 'bitmap') {
				console.log('printData: ' + printData);
				if (this.connectType >= 0 && printData) {
					const base64Str = byteArrayToBase64(printData)
					console.log(base64Str);
					XYSDK.sendData(base64Str, this.connectType, (isSuccess) => {
						console.log("发送结果: ", isSuccess)
						uni.showToast({ title: isSuccess ? '发送成功' : '发送失败', icon: 'none' })
					});
				}
			}
		}
	},
	onLoad: function (option) {
		this.printType = option.type
		this.connectType = parseInt(option.connectType)
		switch (option.type) {
			case CommentType_58: {
				this.printUtils = new Pos58_PrintAction()
				break;
			}
			case CommentType_80: {
				this.printUtils = new Pos80_PrintAction()
				break;
			}
			case CommentType_Lable: {
				this.printUtils = new TSCPrintAction()
				break;
			}
		}
	}
}
</script>

<style>
.action_btn {
	background: rgb(69, 147, 228);
	color: white;
	border: none;
	flex: 1;
	margin-top: 40rpx;
	margin-left: 20rpx;
	margin-right: 20rpx;
	font-size: 0.9rem;
}

.action_btn_hover {
	background: rgb(69, 147, 228);
	color: white;
	border: none;
	flex: 1;
	opacity: 0.7;
}
</style>

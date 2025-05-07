<template>
    <view class="container">
        <div class="title">连接的USB: {{ deviceList.length }}</div>
		
        <scroll-view class="scrollView" v-if="deviceList.length > 0" scroll-y="true">
            <uni-list class="list">
                <uni-list-item v-for="(item, i) in deviceList" :title="item" :key="i" @click.native="itemClick(item)"
                    clickable />
            </uni-list>
        </scroll-view>
		<div v-else class="tips_message">未检测到有USB连接的设备</div>
    </view>

</template>

<script>

export default {
    props: ['deviceList'],
    data() {
        return {}
    },
    methods: {
        itemClick: function (item) {
            this.$emit('deviceSelected', item)
        },
    },
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    width: 635rpx;
    padding: 15rpx;
    border-radius: 10rpx;
}

.title {
    font-weight: 700;
    margin-left: 20rpx;
    margin-bottom: 15rpx;
}

.search_btn {
    margin-top: 30rpx;
    background: rgb(69, 147, 228);
    color: white;
    border: none;
    font-size: 1rem;
    width: 100%;
}

.search_btn_hover {
    background: rgb(69, 147, 228);
    color: white;
    border: none;
    opacity: 0.7;
}

.scrollView {
    height: 500rpx;
    border: 1px solid rgb(69, 147, 228);
    border-radius: 10rpx;
    padding: 1px;
    box-sizing: border-box;
}
.tips_message {
	color: gray;
	margin-top: 10px;
	margin-left: 20rpx;
	margin-bottom: 15rpx;
}
.list {
    flex: 1;
}
</style>
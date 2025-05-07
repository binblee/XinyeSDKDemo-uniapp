<template>
    <view class="container">
        <div class="title">BLE</div>
        <scroll-view class="scrollView" scroll-y="true">
            <uni-list class="list">
                <uni-list-item v-for="(item, i) in deviceList" :title="item.name" :note="item.id" :key="item.id"
                    @click.native="itemClick(item)" clickable />
            </uni-list>
        </scroll-view>
        <button class="search_btn" class-hover="search_btn_hover" @click="search">搜索</button>
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
        search: function () {
            this.$emit('search')
        }
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
    margin-bottom: 30rpx;
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
    height: 780rpx;
    border: 1px solid rgb(69, 147, 228);
    border-radius: 10rpx;
    padding: 1px;
    box-sizing: border-box;
}

.list {
    flex: 1;
}
</style>
<template>
    <div id="index">
        <!-- tabs -->
        <div class="index-tabs">
            <!--对于导航可以直接写入一个数组中，遍历即可。对于点击变色添加样式绑定点击事件@click="activeIndex = index"即可-->
            <div class="tabs-item" v-for="(item, index) in tabsOption" :key="index" :class="[activeIndex === index? 'active': '']" @click="activeIndex = index">{{item}}</div>
        </div>
        <div class="index-tips" :animation  ="AniData" @transitionend="AniData = ''">已为你拉取最新内容</div>
        <!-- swiper -->
        <!--左右滑切页。current属性表示当前页位置-->
        <swiper class="index-swiper" :current="activeIndex" @change="pageChange">
            <!-- 最新消息 -->
            <swiper-item class="swiper-item">
              <!--enable-back-to-top回到顶部-->
                <scroll-view scroll-y :enable-back-to-top="true" @scrolltolower="getBeforeArticle" :style="{'height': winHeight + 'px'}">
                    <article-list :id="'articleList-' + index" v-for="(item, index) in articles" :key="index" :json="item.stories" :date="item.formatDate"></article-list>
                </scroll-view>
            </swiper-item>
            <!-- 栏目专题 -->
            <swiper-item class="swiper-item">
                <scroll-view scroll-y :enable-back-to-top="true" :style="{'height': winHeight + 'px'}">
                    <theme-list :json="sections" :bottomLoading="sectionsBottomLoading"></theme-list>
                </scroll-view>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import { getLatestArticle, getBeforeArticle, getThemes } from '../../api/index'
import { formatDate } from '../../utils/index'
export default {
    data() {
        return {
            winHeight: 0,
            tabsOption: ['日报', '栏目'],
            activeIndex: 0,
            articles: [],
            sections: [],
            articleBottomLoading: true,
            sectionsBottomLoading: 'loading',
            AniData: ''
        }
    },
    mounted() {
        wx.showLoading({ title: '加载中', mask: true })
        this.getSystemInfo()
        this.getLatestArticle()
    },
    methods: {
        // 最新消息
        getLatestArticle() {
            getLatestArticle().then(res => {
                wx.hideLoading()
                if (res) {
                    res.formatDate = formatDate(res.date)
                    this.articles = []
                    this.articles.push(res)
                }
            }).catch(() => {
                wx.showToast({ title: '请求失败，请检查网络', icon: 'none', duration: 3000 })
            })
        },
        // 过往消息
        getBeforeArticle() {
            if (this.articleBottomLoading !== 'nothing' && this.articleBottomLoading !== 'error') {
                this.articleBottomLoading = 'loading'
                let lastDate = this.articles[this.articles.length - 1].date
                getBeforeArticle(lastDate).then(res => {
                    if (res) {
                        // console.log(res)
                        this.articleBottomLoading = true
                        res.formatDate = formatDate(res.date)
                        // console.log(res)
                        // console.log(this.articles)
                        this.articles.push(res)
                    } else {
                        this.articleBottomLoading = 'nothing'
                    }
                }).catch(() => {
                    this.articleBottomLoading = 'error'
                })
            }
        },
        // 栏目列表
        getThemes() {
            this.sectionsBottomLoading = 'loading'
            getThemes().then(res => {
                if (res) {
                    console.log(res.data)
                    this.sections = res.data
                }
                this.sectionsBottomLoading = 'nothing'
            }).catch(() => {
                this.sectionsBottomLoading = 'error'
            })
        },
        // 页面change
        pageChange(e) {
          // console.log(e)
            // 改变当前显示的页位置
            this.activeIndex = e.target.current
            if (this.activeIndex === 0 && this.articles.length === 0) {
                this.getLatestArticle()
            } else if (this.activeIndex === 1 && this.sections.length === 0) {
                this.getThemes()
            }
        },
        // 获取系统信息 => 设置滚动页面高度
        getSystemInfo() {
            wx.getSystemInfo({
                success: (res) => {
                    this.winHeight = res.windowHeight - 50
                }
            })
        }
    },
    // 下拉刷新
    async onPullDownRefresh() {
        if (this.activeIndex === 0) {
            await this.getLatestArticle()
        } else {
            await this.getThemes()
        }
        wx.stopPullDownRefresh()

        let animation = wx.createAnimation({
            duration: 400,
            timingFunction: 'ease'
        })
        // delay:延迟2秒
        animation.translateY(50).step().translateY(-50).step({ delay: 2000 })
        this.AniData = animation.export()
    },
    // 分享
    onShareAppMessage() {
        return {
            'path': `/pages/index/main`
        }
    }
}
</script>

<style lang="stylus">
$tabsHeight = 50px;
#index {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: #e8e8e8;
    .index-tabs {
        flex-center();
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        width: 100%;
        height: $tabsHeight;
        border-bottom: 1px solid #dcdfe6;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
        background-color: #fff;
        .tabs-item {
            position: relative;
            color: $mainText;
            font-size: $titleSize;
            font-weight: 500;
            padding: 8px 0;
            margin: 0 30px 8px;
            &.active {
                color: $appColor;
                &:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    border-radius: 5px;
                    background-color: $appColor;
                }
            }
        }
    }
    .index-tips {
        flex-center();
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
        width: 100%;
        height: 40px;
        color: $appColor;
        font-size: 14px;
        padding: 8px 0;
        background: #fff;
    }
    .index-swiper {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding-top: $tabsHeight;
        background-color: #fff;
        .swiper-item {
            overflow: auto;
        }
    }
}
</style>

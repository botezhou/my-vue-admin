<template>
    <div class="circleMenu p20">
        <code><a href="https://github.com/OYsun/VueCircleMenu" class="link-type">VueCircleMenu</a>圆环菜单</code>
        <div class="phoneBox">
            <div class="img">
                <img src="../../../assets/image/qiaoba.jpg" alt="">
                <div class="title">萌萌的乔巴</div>
            </div>
            <div class="phoneBottom">
                <div class="bottomItem heart">
                    <i class="fa fa-heart fa-lg"></i>
                </div>
                <div class="bottomItem">
                    <circle-menu></circle-menu>
                </div>
                <div class="bottomItem twitter">
                    <i class="fa fa-twitter fa-lg"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CircleMenu from '@/components/circle-menu'
export default {
    components: {
        CircleMenu
    }
}
</script>
<style lang="less" scoped>
    .circleMenu{
        .phoneBox{
            width:320px;
            height:560px;
            background:#f1f1f1;
            margin: 0 auto;
            border-radius: 3px;
            position: relative;
            box-shadow: 1px 1px 5px 5px #888888;
            .img{
                position: absolute;
                left:50%;
                top:50%;
                transform: translate(-50%, -50%);
                width:300px;
                background:#fff;
                padding:40px 0;
                .title{
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;
                }
                img{
                    width:300px;
                }
            }
        }
        .phoneBottom{
            width:100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            bottom:0;
            background: #fff;
            padding:5px;
            .bottomItem{
                text-align: center;
                cursor: pointer;
            }
            .heart{
                font-size:30px;
                color:#FF7256;
                margin-left: 20px;
            }
            .twitter{
                font-size: 30px;
                color:#20B2AA;
                margin-right:20px;
            }
        }
    }
</style>



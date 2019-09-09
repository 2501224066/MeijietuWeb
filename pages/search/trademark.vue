<template>
    <div>
        <headert></headert>
        <div class="topbanner"><img src="/cooperation/banner001.jpg"></div>
        <div class="banxin">
            <div class="t_header">
                <div :class="one==1?'select_one':''" @click="selectOne(1)">国内服务器</div>
                <div :class="one==2?'select_one':''" @click="selectOne(2)">香港服务器</div>
                <div :class="one==3?'select_one':''" @click="selectOne(3)">BGP服务器</div>
                <div :class="one==4?'select_one':''" @click="selectOne(4)">国外服务器</div>
            </div>
            <div class="content_one" v-if="one==1">
                <div class="content_one_t">
                    <div :class="two==1?'select_two':''" @click="selectTwo(1)">佛山高防</div>
                    <div :class="two==2?'select_two':''" @click="selectTwo(2)">浙江高防</div>
                    <div :class="two==3?'select_two':''" @click="selectTwo(3)">福建高防</div>
                    <div :class="two==4?'select_two':''" @click="selectTwo(4)">山东高防</div>
                    <div :class="two==5?'select_two':''" @click="selectTwo(5)">云主机</div>
                </div>
                <div class="content_two" v-if="two==1">
                    <div class="title">
                        <div>线路机房</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>防御</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="content_tabel">
                        <div>电信高防</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>Q9300</div>
                                <div>4G</div>
                                <div>500G</div>
                                <div>10M</div>
                                <div>30G</div>
                                <div>￥900.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>20M</div>
                                <div>60G</div>
                                <div>￥1500.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>L5520*2</div>
                                <div>16G</div>
                                <div>500G</div>
                                <div>50M</div>
                                <div>100G</div>
                                <div>￥2400.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5430*2</div>
                                <div>16G</div>
                                <div>1T</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥3200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>X5650*2</div>
                                <div>32G</div>
                                <div>1T</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥3600.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5-2670*2</div>
                                <div>32G</div>
                                <div>1T</div>
                                <div>100M</div>
                                <div>320G</div>
                                <div>￥4200.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                    <div class="content_tabel">
                        <div>双线高防</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>Q9300</div>
                                <div>4G</div>
                                <div>500G</div>
                                <div>10M</div>
                                <div>30G</div>
                                <div>￥1500.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>20M</div>
                                <div>60G</div>
                                <div>￥2100.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>L5520*2</div>
                                <div>16G</div>
                                <div>500G</div>
                                <div>50M</div>
                                <div>100G</div>
                                <div>￥3000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5430*2</div>
                                <div>16G</div>
                                <div>1T</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥3800.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>X5650*2</div>
                                <div>32G</div>
                                <div>1T</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥4200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5-2670*2</div>
                                <div>32G</div>
                                <div>1T</div>
                                <div>100M</div>
                                <div>320G</div>
                                <div>￥5000.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                    <div class="content_tabel">
                        <div>三线高防</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>Q9300</div>
                                <div>4G</div>
                                <div>500G</div>
                                <div>10M</div>
                                <div>30G</div>
                                <div>￥1800.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>20M</div>
                                <div>60G</div>
                                <div>￥2400.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>L5520*2</div>
                                <div>16G</div>
                                <div>500G</div>
                                <div>50M</div>
                                <div>100G</div>
                                <div>￥3300.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5430*2</div>
                                <div>16G</div>
                                <div>1T</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥4200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>X5650*2</div>
                                <div>32G</div>
                                <div>1T</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥4800.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5-2670*2</div>
                                <div>32G</div>
                                <div>1T</div>
                                <div>100M</div>
                                <div>320G</div>
                                <div>￥5600.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_two" v-if="two==2">
                    <div class="title">
                        <div>线路机房</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>防御</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="content_tabel">
                        <div>电信高防</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>10M</div>
                                <div>30G</div>
                                <div>￥1000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>20M</div>
                                <div>60G</div>
                                <div>￥1500.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>50M</div>
                                <div>100G</div>
                                <div>￥2400.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I7</div>
                                <div>16G</div>
                                <div>500G</div>
                                <div>100M</div>
                                <div>160G</div>
                                <div>￥3200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>600G</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥3900.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>120G SSD</div>
                                <div>100M</div>
                                <div>320G</div>
                                <div>￥5400.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                    <div class="content_tabel">
                        <div>移动高防</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>30M</div>
                                <div>60G</div>
                                <div>￥1300.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>50M</div>
                                <div>120G</div>
                                <div>￥1800.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>50M</div>
                                <div>160G</div>
                                <div>￥2400.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>600G</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥3000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>600G</div>
                                <div>100M</div>
                                <div>300G</div>
                                <div>￥5400.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>120G SSD</div>
                                <div>100M</div>
                                <div>400G</div>
                                <div>￥7000.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                    <div class="content_tabel">
                        <div>双线高防</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>10M</div>
                                <div>30G</div>
                                <div>￥1200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>20M</div>
                                <div>60G</div>
                                <div>￥1800.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>50M</div>
                                <div>100G</div>
                                <div>￥2700.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I7</div>
                                <div>16G</div>
                                <div>500G</div>
                                <div>100M</div>
                                <div>160G</div>
                                <div>￥3500.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>600G</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥4200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>120G SSD</div>
                                <div>100M</div>
                                <div>320G</div>
                                <div>￥6000.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                    <div class="content_tabel">
                        <div>三线高防</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>10M</div>
                                <div>30G</div>
                                <div>￥1400.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>20M</div>
                                <div>60G</div>
                                <div>￥2000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>50M</div>
                                <div>100G</div>
                                <div>￥3000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I7</div>
                                <div>16G</div>
                                <div>500G</div>
                                <div>100M</div>
                                <div>160G</div>
                                <div>￥3800.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>600G</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥4500.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>120G SSD</div>
                                <div>100M</div>
                                <div>320G</div>
                                <div>￥6400.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_two" v-if="two==3">
                    <div class="title">
                        <div>线路机房</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>防御</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="content_tabel">
                        <div style="height:400px;line-height:400px">电信高防</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>20M</div>
                                <div>60G</div>
                                <div>￥1100.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>30M</div>
                                <div>100G</div>
                                <div>￥2100.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>500G</div>
                                <div>50M</div>
                                <div>160G</div>
                                <div>￥2400.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>120G SSD</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥3200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>100M</div>
                                <div>260G</div>
                                <div>￥4200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>100M</div>
                                <div>320G</div>
                                <div>￥5400.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>100M</div>
                                <div>400G</div>
                                <div>￥12000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>100M</div>
                                <div>500G</div>
                                <div>￥15000.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                    <div class="content_tabel">
                        <div>双线高防</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>20M</div>
                                <div>60G</div>
                                <div>￥1200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>500G</div>
                                <div>50M</div>
                                <div>100G</div>
                                <div>￥2300.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>500G</div>
                                <div>50M</div>
                                <div>160G</div>
                                <div>￥2700.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>16G</div>
                                <div>120G SSD</div>
                                <div>100M</div>
                                <div>200G</div>
                                <div>￥3800.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>100M</div>
                                <div>260G</div>
                                <div>￥4800.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>100M</div>
                                <div>320G</div>
                                <div>￥6000.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                    <div class="content_tabel">
                        <div>无限高防</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>400M</div>
                                <div>700G</div>
                                <div>￥50000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>500M</div>
                                <div>800G</div>
                                <div>￥80000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>1G</div>
                                <div>900G</div>
                                <div>￥150000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>1G</div>
                                <div>1000G</div>
                                <div>￥240000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>1G</div>
                                <div>1100G</div>
                                <div>￥320000.00</div>
                                <div>立即购买</div>
                            </div>
                             <div class="tabel_ritem">
                                <div>E5620*2</div>
                                <div>32G</div>
                                <div>240G SSD</div>
                                <div>1G</div>
                                <div>1200G</div>
                                <div>￥400000.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_two" v-if="two==4">
                    <div class="title">
                        <div>线路机房</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>防御</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="content_tabel">
                        <div>双线高防</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>30G</div>
                                <div>￥850.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>X5650</div>
                                <div>8G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>30G</div>
                                <div>￥1000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>X5650*2</div>
                                <div>8G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>30G</div>
                                <div>￥1200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>I5</div>
                                <div>8G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>100G</div>
                                <div>￥1300.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>X5650</div>
                                <div>8G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>100G</div>
                                <div>￥2000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>X5650*2</div>
                                <div>8G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>100G</div>
                                <div>￥2200.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_two" v-if="two==5">
                    <div class="title">
                        <div>线路机房</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>IP</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="content_tabel">
                        <div style="height:400px;line-height:400px">佛山高防云</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>2核</div>
                                <div>1G</div>
                                <div>40G</div>
                                <div>5M</div>
                                <div>1个</div>
                                <div>￥200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>2核</div>
                                <div>2G</div>
                                <div>50G</div>
                                <div>5M</div>
                                <div>1个</div>
                                <div>￥260.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>4核</div>
                                <div>3G</div>
                                <div>80G</div>
                                <div>10M</div>
                                <div>1个</div>
                                <div>￥360.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>4核</div>
                                <div>4G</div>
                                <div>120G</div>
                                <div>10M</div>
                                <div>1个</div>
                                <div>￥460.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>8核</div>
                                <div>6G</div>
                                <div>180G</div>
                                <div>10M</div>
                                <div>1个</div>
                                <div>￥640.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>8核</div>
                                <div>8G</div>
                                <div>240G</div>
                                <div>20M</div>
                                <div>1个</div>
                                <div>￥800.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>8核</div>
                                <div>16G</div>
                                <div>300G</div>
                                <div>20M</div>
                                <div>1个</div>
                                <div>￥1200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>8核</div>
                                <div>24G</div>
                                <div>350G</div>
                                <div>20M</div>
                                <div>1个</div>
                                <div>￥1400.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                    <div class="content_tabel">
                        <div style="height:150px;line-height:150px">北京电信</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>1核 2Ghz</div>
                                <div>1G</div>
                                <div>40G</div>
                                <div>8M</div>
                                <div>独立IP</div>
                                <div>￥130.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>2核 3Ghz</div>
                                <div>2G</div>
                                <div>80G</div>
                                <div>10M</div>
                                <div>独立IP</div>
                                <div>￥220.00</div>
                                <div>立即购买</div>
                            </div>
                             <div class="tabel_ritem">
                                <div>4核 4Ghz</div>
                                <div>4G</div>
                                <div>120G</div>
                                <div>15M</div>
                                <div>独立IP</div>
                                <div>￥500.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                    <div class="content_tabel">
                        <div>北京BGP双线</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>1核 2Ghz</div>
                                <div>1G</div>
                                <div>40G</div>
                                <div>3M</div>
                                <div>独立IP</div>
                                <div>￥110.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>1核 2Ghz</div>
                                <div>1G</div>
                                <div>40G</div>
                                <div>6M</div>
                                <div>独立IP</div>
                                <div>￥140.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>2核 3Ghz</div>
                                <div>2G</div>
                                <div>70G</div>
                                <div>5M</div>
                                <div>独立IP</div>
                                <div>￥210.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>2核 3Ghz</div>
                                <div>2G</div>
                                <div>100G</div>
                                <div>5M</div>
                                <div>独立IP</div>
                                <div>￥260.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>4核 3Ghz</div>
                                <div>4G</div>
                                <div>120G</div>
                                <div>6M</div>
                                <div>独立IP</div>
                                <div>￥350.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>4核 4Ghz</div>
                                <div>4G</div>
                                <div>220G</div>
                                <div>6M</div>
                                <div>独立IP</div>
                                <div>￥420.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content_one" v-if="one==2">
                <div style="padding-left:345px" class="content_one_t">
                    <div style="margin-right:102px" :class="two==1?'select_two':''" @click="selectTwo(1)">香港云主机</div>
                    <div :class="two==2?'select_two':''" @click="selectTwo(2)">香港站群服务器</div>
                </div>
                <div class="content_two" v-if="two==1">
                    <div class="title">
                        <div>Name</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>IP</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云A型</div>
                        <div>1core</div>
                        <div>1G</div>
                        <div>30G</div>
                        <div>2Mbps</div>
                        <div>1个</div>
                        <div>￥150.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云B型(Hot)</div>
                        <div>2core</div>
                        <div>2G</div>
                        <div>60G</div>
                        <div>3Mbps</div>
                        <div>1个</div>
                        <div>￥340.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云C型</div>
                        <div>4core</div>
                        <div>4G</div>
                        <div>100G</div>
                        <div>5Mbps</div>
                        <div>1个</div>
                        <div>￥630.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云D型</div>
                        <div>4core</div>
                        <div>8G</div>
                        <div>200G</div>
                        <div>5Mbps</div>
                        <div>1个</div>
                        <div>￥820.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云E型(Hot)</div>
                        <div>8core</div>
                        <div>8G</div>
                        <div>300G</div>
                        <div>5Mbps</div>
                        <div>1个</div>
                        <div>￥1100.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云F型</div>
                        <div>8core</div>
                        <div>16G</div>
                        <div>500G</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥1690.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云G型</div>
                        <div>16core</div>
                        <div>16G</div>
                        <div>500G</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥2170.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云H型</div>
                        <div>16core</div>
                        <div>32G</div>
                        <div>1000G</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥2980.00</div>
                        <div>立即购买</div>
                    </div>
                </div>
                <div class="content_two" v-if="two==2">
                    <div class="title">
                        <div>Name</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>IP</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="tabel_ritem percentage">
                        <div>E3-1230</div>
                        <div>4core</div>
                        <div>8G</div>
                        <div>1TB</div>
                        <div>10Mbps</div>
                        <div>128个(1个C段)</div>
                        <div>￥1700.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem percentage">
                        <div>E3-1230</div>
                        <div>4core</div>
                        <div>8G</div>
                        <div>1TB</div>
                        <div>10Mbps</div>
                        <div>254个(1个C段)</div>
                        <div>￥2100.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem percentage">
                        <div>E3-1230</div>
                        <div>4core</div>
                        <div>8G</div>
                        <div>1TB</div>
                        <div>10Mbps</div>
                        <div>244个(4个C段)</div>
                        <div>￥2100.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem percentage">
                        <div>E3-1230</div>
                        <div>4core</div>
                        <div>8G</div>
                        <div>1TB</div>
                        <div>10Mbps</div>
                        <div>232个(8个C段)</div>
                        <div>￥2300.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem percentage">
                        <div>E3-2450</div>
                        <div>8core</div>
                        <div>16G</div>
                        <div>1TB</div>
                        <div>10Mbps</div>
                        <div>125个(1个C段)</div>
                        <div>￥1900.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem percentage">
                        <div>E3-2450</div>
                        <div>8core</div>
                        <div>16G</div>
                        <div>1TB</div>
                        <div>10Mbps</div>
                        <div>254个(1个C段)</div>
                        <div>￥2300.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem percentage">
                        <div>E3-2450</div>
                        <div>8core</div>
                        <div>16G</div>
                        <div>1TB</div>
                        <div>10Mbps</div>
                        <div>244个(4个C段)</div>
                        <div>￥2300.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem percentage">
                        <div>E3-2450</div>
                        <div>8core</div>
                        <div>16G</div>
                        <div>1TB</div>
                        <div>10Mbps</div>
                        <div>232个(4个C段)</div>
                        <div>￥2700.00</div>
                        <div>立即购买</div>
                    </div>
                </div>
            </div>
            <div class="content_one" v-if="one==3">
                <div style="padding-left:345px" class="content_one_t">
                    <div style="margin-right:102px" :class="two==1?'select_two':''" @click="selectTwo(1)">佛山BGP</div>
                    <div :class="two==2?'select_two':''" @click="selectTwo(2)">江浙BGP</div>
                </div>
                <div class="content_two" v-if="two==1">
                    <div class="title">
                        <div>线路机房</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>防御</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="content_tabel">
                        <div>佛山BGP</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>E3-1231</div>
                                <div>8G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>120G</div>
                                <div>￥4500.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5-2665</div>
                                <div>16G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>120G</div>
                                <div>￥5000.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5-2665*2</div>
                                <div>32G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>120G</div>
                                <div>￥5500.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E3-1231</div>
                                <div>8G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>240G</div>
                                <div>￥6200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5-2665</div>
                                <div>16G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>240G</div>
                                <div>￥6700.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>E5-2665*2</div>
                                <div>32G</div>
                                <div>1T</div>
                                <div>20M</div>
                                <div>240G</div>
                                <div>￥7200.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_two" v-if="two==2">
                    <div class="title">
                        <div>线路机房</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>防御</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="content_tabel">
                        <div style="height:200px;line-height:200px">江浙BGP</div>
                        <div class="tabel_r">
                            <div class="tabel_ritem">
                                <div>L5630*2</div>
                                <div>16G</div>
                                <div>120G SSD</div>
                                <div>30M</div>
                                <div>60G</div>
                                <div>￥2400.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>L5630*2</div>
                                <div>16G</div>
                                <div>120G SSD</div>
                                <div>50M</div>
                                <div>160G</div>
                                <div>￥3200.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>L5630*2</div>
                                <div>16G</div>
                                <div>120G SSD</div>
                                <div>100M</div>
                                <div>240G</div>
                                <div>￥4800.00</div>
                                <div>立即购买</div>
                            </div>
                            <div class="tabel_ritem">
                                <div>L5630*2</div>
                                <div>16G</div>
                                <div>120G SSD</div>
                                <div>100M</div>
                                <div>320G</div>
                                <div>￥6800.00</div>
                                <div>立即购买</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content_one" v-if="one==4">
                <div class="content_one_t">
                    <div :class="two==1?'select_two':''" @click="selectTwo(1)">韩国云主机</div>
                    <div :class="two==2?'select_two':''" @click="selectTwo(2)">韩国站群服务器</div>
                    <div :class="two==3?'select_two':''" @click="selectTwo(3)">新加坡云主机</div>
                    <div :class="two==4?'select_two':''" @click="selectTwo(4)">美国云主机</div>
                    <div :class="two==5?'select_two':''" @click="selectTwo(5)">美国站群服务器</div>
                </div>
                <div class="content_two" v-if="two==1">
                    <div class="title">
                        <div>Name</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>IP</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云A型</div>
                        <div>1core</div>
                        <div>1G</div>
                        <div>30G</div>
                        <div>2Mbps</div>
                        <div>1个</div>
                        <div>￥195.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云B型(Hot)</div>
                        <div>2core</div>
                        <div>2G</div>
                        <div>60G</div>
                        <div>3Mbps</div>
                        <div>1个</div>
                        <div>￥350.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云C型</div>
                        <div>4core</div>
                        <div>4G</div>
                        <div>100G</div>
                        <div>5Mbps</div>
                        <div>1个</div>
                        <div>￥650.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云D型</div>
                        <div>4core</div>
                        <div>8G</div>
                        <div>200G</div>
                        <div>5Mbps</div>
                        <div>1个</div>
                        <div>￥900.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云E型(Hot)</div>
                        <div>8core</div>
                        <div>8G</div>
                        <div>300G</div>
                        <div>5Mbps</div>
                        <div>1个</div>
                        <div>￥1150.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云F型</div>
                        <div>8core</div>
                        <div>16G</div>
                        <div>500G</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥1850.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云G型</div>
                        <div>16core</div>
                        <div>16G</div>
                        <div>500G</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥2250.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云H型</div>
                        <div>16core</div>
                        <div>32G</div>
                        <div>1000G</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥3300.00</div>
                        <div>立即购买</div>
                    </div>
                </div>
                <div class="content_two" v-if="two==2">
                    <div class="title">
                        <div>Name</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>IP</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>E3-1230v3</div>
                        <div>4core</div>
                        <div>8G</div>
                        <div>1T</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥800.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>E3-1230v3</div>
                        <div>4core</div>
                        <div>8G</div>
                        <div>240G SSD</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥1000.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>E3-1230v3</div>
                        <div>4core</div>
                        <div>16G</div>
                        <div>240G SSD</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥1200.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>E5-2450L*2</div>
                        <div>16core</div>
                        <div>8G</div>
                        <div>1T</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥1300.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>E5-2450L*2</div>
                        <div>16core</div>
                        <div>16G</div>
                        <div>1T</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥1500.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>E5-2450L*2</div>
                        <div>16core</div>
                        <div>32G</div>
                        <div>500G SSD</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥2100.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>E5-2450L*2</div>
                        <div>16core</div>
                        <div>64G</div>
                        <div>4*500G SSD</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥3900.00</div>
                        <div>立即购买</div>
                    </div>
                </div>
                <div class="content_two" v-if="two==3">
                    <div class="title">
                        <div>Name</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>IP</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云A型</div>
                        <div>1core</div>
                        <div>1G</div>
                        <div>25G SSD</div>
                        <div>3Mbps</div>
                        <div>1个</div>
                        <div>￥100.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云B型(Hot)</div>
                        <div>1core</div>
                        <div>2G</div>
                        <div>40G SSD</div>
                        <div>5Mbps</div>
                        <div>1个</div>
                        <div>￥170.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云C型</div>
                        <div>4core</div>
                        <div>4G</div>
                        <div>60G SSD</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥350.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云D型</div>
                        <div>4core</div>
                        <div>8G</div>
                        <div>100G SSD</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥650.00</div>
                        <div>立即购买</div>
                    </div>
                </div>
                <div class="content_two" v-if="two==4">
                    <div class="title">
                        <div>Name</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>IP</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云A型</div>
                        <div>1core</div>
                        <div>1G</div>
                        <div>30G</div>
                        <div>2Mbps</div>
                        <div>1个</div>
                        <div>￥135.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云B型(Hot)</div>
                        <div>2core</div>
                        <div>2G</div>
                        <div>60G</div>
                        <div>3Mbps</div>
                        <div>1个</div>
                        <div>￥280.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云C型</div>
                        <div>4core</div>
                        <div>4G</div>
                        <div>100G</div>
                        <div>5Mbps</div>
                        <div>1个</div>
                        <div>￥520.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云D型</div>
                        <div>4core</div>
                        <div>8G</div>
                        <div>200G</div>
                        <div>5Mbps</div>
                        <div>1个</div>
                        <div>￥730.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云E型(Hot)</div>
                        <div>8core</div>
                        <div>8G</div>
                        <div>300G</div>
                        <div>5Mbps</div>
                        <div>1个</div>
                        <div>￥940.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云F型</div>
                        <div>8core</div>
                        <div>16G</div>
                        <div>500G</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥1510.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云G型</div>
                        <div>16core</div>
                        <div>16G</div>
                        <div>500G</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥1830.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>影云H型</div>
                        <div>16core</div>
                        <div>32G</div>
                        <div>1000G</div>
                        <div>10Mbps</div>
                        <div>1个</div>
                        <div>￥2720.00</div>
                        <div>立即购买</div>
                    </div>
                </div>
                <div class="content_two" v-if="two==3">
                    <div class="title">
                        <div>Name</div>
                        <div>CPU</div>
                        <div>内存</div>
                        <div>硬盘</div>
                        <div>宽带</div>
                        <div>IP</div>
                        <div>价格/月</div>
                        <div>购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>i3</div>
                        <div>2core</div>
                        <div>8G</div>
                        <div>1T</div>
                        <div>10Mbps</div>
                        <div>244个(4个C段)</div>
                        <div>￥999.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>E3-1230</div>
                        <div>4core</div>
                        <div>8G</div>
                        <div>1T</div>
                        <div>10Mbps</div>
                        <div>254个(1个C段)</div>
                        <div>￥1299.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>E3-1230</div>
                        <div>4core</div>
                        <div>16G</div>
                        <div>1T</div>
                        <div>10Mbps</div>
                        <div>244个(4个C段)</div>
                        <div>￥1399.00</div>
                        <div>立即购买</div>
                    </div>
                    <div class="tabel_ritem">
                        <div>E3-1230</div>
                        <div>4core</div>
                        <div>16G</div>
                        <div>1T</div>
                        <div>10Mbps</div>
                        <div>208个168个C段)</div>
                        <div>￥1999.00</div>
                        <div>立即购买</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headert from '@@/components/nobanner.vue';
export default {
    layout: 'header',
    data() {
        return {
            one: 1,
            two: 1,
        }
    },
    methods: {
        selectOne(a){
            this.one = a
            this.two = 1
        },
        selectTwo(a){
            this.two = a
        }
    },
    components:{
        headert
    },
}
</script>
<style scoped>
.banxin{
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 35px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow:0px 0px 15px 3px rgba(59,81,233,0.07);
}
.topbanner{
    width: 100%;
    overflow: hidden;
}
.topbanner img{
    position: relative;
    left: 50%;
    margin-left: -960px;
}
.t_header{
    width: 100%;
    height: 93px;
    line-height: 93px;
    border-bottom: 1px solid #D2D2D2;
    padding-left: 184px;
    text-align: center;
    color: #242424;
}
.t_header > div{
    float: left;
    width: 20%;
    font-size: 24px;
    cursor: pointer;
    color: #888;
}
.content_one{
    padding: 30px 40px;
    text-align: center;
    color: #242424;
}
.content_two{
    border: 1px solid #d2d2d2;
}
.content_one_t{
    overflow: hidden;
    padding-left: 150px;
    margin-bottom: 36px;
}
.content_one_t > div{
    width: 150px;
    float: left;
    height: 36px;
    line-height: 36px;
    margin-right: 30px;
    border: 1px solid #d2d2d2;
    text-align: center;
    cursor: pointer;
}
.title{
    background-color: #F8F7FF;
    overflow: hidden;
    border-bottom: 1px solid #d2d2d2;
}
.title > div{
    float: left;
    width: 12.5%;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.content_tabel{
    overflow: hidden;
}
.content_tabel > div {
    float: left;
}
.content_tabel > div:nth-child(1){
    width: 145px;
    height: 300px;
    line-height: 300px;
    border-right: 1px solid #d2d2d2;
    border-bottom: 1px solid #d2d2d2;
}
.tabel_r{
   float: left;
}
.tabel_ritem{
    overflow: hidden;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #d2d2d2;
}
.tabel_ritem:hover{
    box-shadow:0px 0px 2px 1px rgba(41,65,234,0.25);
}
.tabel_ritem div:last-child{
    cursor: pointer;
}
.tabel_ritem:hover div:last-child{
    background-color: #5141ED;
    color: #fff;
}
.tabel_ritem > div{
    float: left;
    width: 139px;
}
.tabel_ritem > div:nth-last-child(2){
    color: #DE0D0D;
}
.content_one_t > div.select_two{
    background-color: #5141ED;
    color: #fff;
    position: relative;
}
/* .content_one_t > div.select_two::before {
    content: '',
} */
.t_header div.select_one{
    color: #242424;
}
</style>
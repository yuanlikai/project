<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }

</style>
<template>
  <div class="content">
    <Modal
      v-model="modal6"
      title="地区选择"
      @on-ok="asyncOK">
      <div style="max-height: 450px;overflow: hidden;overflow-y: auto">
        <Row v-for="(item,index) in citylist" :key="index"
             style="border-bottom: 1px solid #eeeeee;padding: 20px 0 10px 0">
          <Col span="3" style="font-size: 14px">{{item.p}}</Col>
          <Col span="21" style="font-size: 14px">
          <span v-for="(items,indexs) in item.c" :key="indexs" >

          <Button @click="getN(items.n)" type="dashed" class="site-btn" size="small">{{items.n}}</Button>
          </span>
          </Col>
        </Row>
      </div>
    </Modal>
    <div class="content-map">
      <div id="container"></div>
    </div>
    <div class="content-search">
      <Dropdown  trigger="click" @on-click="Dropcli">
        <div>
          <Button size="large">
            {{model1}}
            <Icon type="ios-arrow-down"></Icon>
          </Button>
        </div>
        <DropdownMenu slot="list">
          <DropdownItem @click.stop disabled>最近选择</DropdownItem>
          <DropdownItem :name="item" v-for="(item,index) in cityListb" :key="index" @click="">{{item}}</DropdownItem>
          <DropdownItem name="s" divided @click.stop="modal6=true"style="color: #5cadff;font-size: 12px">切换城市<Icon type="ios-shuffle" /></DropdownItem>
        </DropdownMenu>
      </Dropdown>


      <Button type="primary" size="large" icon="ios-search" style="float: right;font-size: 15px;"></Button>
      <div class="map-srarch">
        <div id="l-map"></div>
        <div id="r-result">
          <input @mouseover="inpR" type="text" id="suggestId" size="20"/>
        </div>
        <div id="searchResultPanel" style="width:150px;height:auto; display:none;border:1px solid #C0C0C0;"></div>
      </div>
    </div>

    <div :class="{
            'search-tj':true,
            'search-tj-add':!stacData
        }" v-if="hotMapStatus">
      <Button ghost @click="stacData=false">商家热力图
        <Icon type="ios-cog-outline" size="16"/>
      </Button>
      <Row style="margin-top: 10px;" v-if="stacData">
        <Col span="8" style="color: #5cadff;margin-top: 12px">平台：{{terrace}}</Col>
        <Col span="8" style="color: #5cadff;margin-top: 12px">半径：{{radius}}km</Col>
        <Col span="8" style="color: #5cadff;margin-top: 12px">品类：{{class1}}</Col>
      </Row>
      <div class="box" v-if="!stacData">
        <!--<Row style="margin-top: 20px;">-->
        <!--<Col span="7" style="color: #5cadff;margin-top: 8px;padding-left: 8px">热力图选择</Col>-->
        <!--<Col span="17" style="color: #ffffff;margin-top: 8px">-->
        <!--<RadioGroup v-model="hotMap">-->
        <!--<Row>-->
        <!--<Col span="14" style="margin-bottom: 10px">-->
        <!--<Radio label="月销量热力图">-->
        <!--<span style="font-size: 15px">月销量热力图</span>-->
        <!--</Radio>-->
        <!--</Col>-->
        <!--<Col span="10" style="margin-bottom: 10px">-->
        <!--<Radio label="商户热力图">-->
        <!--<span style="font-size: 15px">商户热力图</span>-->
        <!--</Radio>-->
        <!--</Col>-->
        <!--<Col span="12" style="">-->
        <!--<Radio label="平均热销量热力图">-->
        <!--<span style="font-size: 15px">平均热销量热力图</span>-->
        <!--</Radio>-->
        <!--</Col>-->
        <!--</Row>-->
        <!--</RadioGroup>-->
        <!--</Col>-->
        <!--</Row>-->
        <Row style="margin-top: 20px;">
          <Col span="7" style="color: #5cadff;margin-top: 8px;padding-left: 8px">平台选择</Col>
          <Col span="17" style="color: #ffffff;margin-top: 8px">
            <RadioGroup v-model="terrace" style="width: 100%;">
              <Row>
                <Col span="8" style="">
                  <Radio label="全部">
                    <span style="font-size: 15px">全部</span>
                  </Radio>
                </Col>
                <Col span="8" style="margin-bottom: 12px">
                  <Radio label="饿了么">
                    <span style="font-size: 15px">饿了么</span>
                  </Radio>
                </Col>
                <Col span="8" style="margin-bottom: 12px">
                  <Radio label="美团">
                    <span style="font-size: 15px">美团</span>
                  </Radio>
                </Col>
              </Row>
            </RadioGroup>
          </Col>
        </Row>
        <Row>
          <Col span="7" style="color: #5cadff;margin-top: 14px;padding-left: 10px">热力半径/km</Col>
          <Col span="17" style="color: #ffffff;margin-top: 14px">
            <RadioGroup v-model="radius" style="width: 100%;">
              <Row>
                <Col span="8" style="margin-bottom: 12px">
                  <Radio label="2.0">
                    <span style="font-size: 15px">2.0</span>
                  </Radio>
                </Col>
                <Col span="8" style="margin-bottom: 12px">
                  <Radio label="3.0">
                    <span style="font-size: 15px">3.0</span>
                  </Radio>
                </Col>
              </Row>
            </RadioGroup>
          </Col>
        </Row>
        <!--<Row>-->
        <!--<Col span="7" style="color: #5cadff;margin-top: 20px;padding-left: 10px">全城热力图</Col>-->
        <!--<Col span="17" style="color: #ffffff;margin-top: 20px">-->
        <!--<i-switch v-model="switch1"></i-switch>-->
        <!--</Col>-->
        <!--</Row>-->
        <Row>
          <Col span="7" style="color: #5cadff;margin-top: 14px;padding-left: 10px">热力值调节</Col>
          <Col span="17" style="color: #ffffff;margin-top: 14px">
            <RadioGroup v-model="class1" style="width: 100%;">
              <Row>
                <Col span="12" style="margin-bottom: 12px">
                  <Radio label="快餐便当">
                    <span style="font-size: 15px">快餐便当</span>
                  </Radio>
                </Col>
                <Col span="12" style="margin-bottom: 12px">
                  <Radio label="甜品">
                    <span style="font-size: 15px">甜品</span>
                  </Radio>
                </Col>
              </Row>
            </RadioGroup>
          </Col>
        </Row>
        <Row>
          <Col span="7" style="color: #5cadff;margin-top: 24px;padding-left: 10px"></Col>
          <Col span="17" style="color: #ffffff;margin-top: 24px">
            <!--<InputNumber :max="1000" :min="0" :step="10" v-model="value2" :editable="false"-->
            <!--style="font-size: 14px"></InputNumber>-->
            <Button @click="setSeach()" size="small" type="primary" ghost
                    style="font-size: 15px">
              <Icon type="md-refresh" size="22" style="margin-top: -4px"/>
              确定
            </Button>
          </Col>
        </Row>
      </div>

    </div>
    <Row v-if="sta1" id="content-data" class="content-data">
      <Col span="24">
        <Row>
          <Col span="12">
            <li class="build-item-li left build-item ani-time pointer">
              <img src="https://system.chachadian.cn/web/201812271745/assets/images/build2-s.png" alt=""
                   class="build2">
              <div class="build-desc">
                <p class="building-type text-middle">写字楼</p>
                <p class="building-count color text-middle">
                  <span>760+</span>
                  座
                </p>
              </div>
            </li>
          </Col>
          <Col span="12" >
            <li style="float: right" class="build-item-li left build-item ani-time pointer">
              <img src="https://system.chachadian.cn/web/201812271745/assets/images/build3-s.png" alt=""
                   class="build2">
              <div class="build-desc">
                <p class="building-type text-middle">大学</p>
                <p class="building-count color text-middle">
                  <span>760+</span>
                  所
                </p>
              </div>
            </li>
          </Col>
          <Col span="12">
            <li class="build-item-li left build-item ani-time pointer">
              <img src="https://system.chachadian.cn/web/201812271745/assets/images/build1-s.png" alt=""
                   class="build2">
              <div class="build-desc">
                <p class="building-type text-middle">居民小区</p>
                <p class="building-count color text-middle">
                  <span>760+</span>
                  个
                </p>
              </div>
            </li>
          </Col>
          <Col span="12">
            <li style="float: right" class="build-item-li left build-item ani-time pointer">
              <img src="https://system.chachadian.cn/web/201812271745/assets/images/build4-s.png" alt=""
                   class="build2">
              <div class="build-desc">
                <p class="building-type text-middle">医院</p>
                <p class="building-count color text-middle">
                  <span>760+</span>
                  个
                </p>
              </div>
            </li>
          </Col>
        </Row>
      </Col>
      <p style="float: left;font-size: 18px;margin-top: 4px">月销量热力图</p>
      <Col span="24">
        <Row>
          <Col span="24" style="margin-top: 8px">
            <Row>

              <Col class="data-list-text" span="24" style="margin-bottom: 8px">全城月销量总数：<span
                style="font-weight: 700;">7504.50万单</span></Col>
              <Col class="data-list-text" span="24" style="margin-bottom: 8px">区域商铺总数：<span
                style="font-weight: 700;">12321家</span></Col>
              <Col class="data-list-text" span="24" style="margin-bottom: 8px">区域月销量总数：<span style="font-weight: 700;">2504.50万单</span></Col>
              <Col class="data-list-text" span="24" style="margin-bottom: 8px">平均单店月销量：<span style="font-weight: 700;">452单</span></Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
    <Button @click="sta1=!sta1" class="detailBtn" type="primary">{{sta1===true?'隐藏详情':'显示详情'}} <Icon  v-if="!sta1" type="md-arrow-dropdown" /><Icon v-if="sta1" type="md-arrow-dropup" /></Button>



    <!--<div class="center xuanf" style="bottom: 460px;">-->
      <!--<div class="center-left">-->
        <!--<Button icon="ios-disc-outline" id="ios-disc-outline" size="small" type="primary" style="background: rgba(0,0,0,.9)"></Button>-->
      <!--</div>-->
    <!--</div>-->
    <ButtonGroup vertical class="xuanf" style="opacity: .95">
      <Button icon="md-add" id="md-add" type="primary"  style="background: rgba(0,0,0,.9)" size="small"></Button>
      <Button icon="md-remove" id="md-remove"  type="primary" style="background: rgba(0,0,0,.9)" size="small"></Button>
    </ButtonGroup>
    <div @mouseenter="sta1=false" class="center xuanf" style="bottom: 265px;">
      <div class="center-left">
        <Poptip  trigger="hover"title="关注公众号，了解更多资讯" content="content" placement="left">
          <Button icon="logo-snapchat" size="small" type="primary" style="background: rgba(0,0,0,.9)"></Button>
          <div class="api" slot="content">
            <img style="width: 200px;" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1547803661&di=725bd0778edf709325c21215eae45667&src=http://i2.sinaimg.cn/dy/c/2014-07-18/1405623657_VbFlfN.jpg" alt="">
          </div>
        </Poptip>
      </div>
    </div>
    <div @mouseenter="sta1=false" class="center xuanf" style="bottom: 230px;">
      <div class="center-left">
        <Poptip  trigger="hover" title="客服热线" content="3006-522-555" placement="left">
          <Button icon="ios-chatbubbles" size="small" type="primary" style="background: rgba(0,0,0,.9)"></Button>
        </Poptip>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import cityData from './cityJson'
  export default {
    name: 'home',
    data() {
      return {
        sta1:false,
        modal6: false,
        city:'上海市',
        hotMap: '月销量热力图',
        class1:'快餐便当',
        terrace: '全部',
        radius: '2.0',
        switch1: false,
        stacData: true,
        hotMapStatus: true,
        value2: 3000,
        data1: [],
        citylist: cityData,
        cityListb: [
          '上海市',
        ],
        model1: '上海市1'
      }
    },
    methods: {
      Menux(e){
        console.log(e)
      },
      Dropcli(e){
        console.log(e)
        e==='s'?this.modal6=true:this.model1=e
      },
      abcd(){
        console.log(1)
      },
      asyncOK() {

      },
      setSeach() {
        let _this = this;
        _this.stacData = true
      },
      inpR() {
        document.getElementsByClassName('tangram-suggestion-main')[0].style.display = 'block'
      },
      getN(e){
        console.log(e)
        // if()
        if (this.cityListb.indexOf(e+'市')===-1){
          this.cityListb.push(e+'市')
        }
        this.model1=e+'市';
        console.log()
        this.modal6=false;
        // this.cityListb.push({
        //   value:e+'市',
        //   label:e+'市'
        // });

      }
    },
    mounted() {
      let _this = this;


      var map = new BMap.Map("container");          // 创建地图实例
      var point = new BMap.Point(121.47, 31.23);
      map.centerAndZoom(point, 14);             // 初始化地图，设置中心点坐标和地图级
      function G(id) {
        return document.getElementById(id);
      }
      var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {
          "input": "suggestId"
          , "location": map
        });

      ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件

        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
          value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
          _value = e.toitem.value;
          value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
      });

      var myValue;
      ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
        setPlace();
      });

      function setPlace() {
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun() {
          if (local.getResults().getPoi(0)) {
          } else {
            _this.$Message.error('搜索无结果，请确认信息')
          }
          var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
          mapS(pp.lng, pp.lat)
        }

        var local = new BMap.LocalSearch(map, { //智能搜索
          onSearchComplete: myFun
        });
        local.search('上海市' + myValue);
        _this.hotMapStatus = true
      }

      // document.getElementById('ios-disc-outline').onclick = function(e){
      //   mapS(121.481348,31.235087);
      // }
      mapS(121.481348,31.235087);

      function mapS(j, w) {
        var map = new BMap.Map("container");          // 创建地图实例
        var point = new BMap.Point(j, w);
        map.centerAndZoom(point, 14);             // 初始化地图，设置中心点坐标和地图级别



        // 定义一个控件类,即function
        function ZoomControl(){
          // 默认停靠位置和偏移量
          this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
          this.defaultOffset = new BMap.Size(10, 10);
        }

        // 通过JavaScript的prototype属性继承于BMap.Control
        ZoomControl.prototype = new BMap.Control();

        // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
        // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
        ZoomControl.prototype.initialize = function(map){
          // 创建一个DOM元素
          // 添加文字说明
          // 设置样式
          // 绑定事件,点击一次放大两级
          document.getElementById('md-add').onclick = function(e){
            map.setZoom(map.getZoom() + 1);
          }
          document.getElementById('md-remove').onclick = function(e){
            map.setZoom(map.getZoom() - 1);
          }
          // 添加DOM元素到地图
        }
        // 创建控件
        var myZoomCtrl = new ZoomControl();
        // 添加到地图当中
        map.addControl(myZoomCtrl);





        map.enableScrollWheelZoom(); // 允许滚轮缩放

        var myIcon = new BMap.Icon("https://smh-map.oss-cn-beijing.aliyuncs.com/sj.png", new BMap.Size(60, 60));
        var marker = new BMap.Marker(point, {icon: myIcon}); // 创建点
        map.addOverlay(marker);              // 将标注添加到地图中

        //中心点可拖拽 start
        map.addOverlay(marker);
        marker.enableDragging();
        //中心点可拖拽 end

        //中心店拖拽事件 start
        marker.addEventListener("dragend", function (e) {
          mapS(e.point.lng, e.point.lat)
        });
        //中心店拖拽事件 end

        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

        var circle = new BMap.Circle(point, 3000, {
          strokeColor: "blue",
          strokeWeight: 2,
          strokeOpacity: 0.5,
          fillColor: 'rgba(81, 90, 110, .1)'
        }); //创建圆
        //添加覆盖物
        function add_overlay() {
          map.addOverlay(marker);            //增加点
          map.addOverlay(circle);            //增加圆
        }

        add_overlay();
        var points = [
          {"lng": 121.471, "lat": 31.24, "count": 100},
          {"lng": 121.472, "lat": 31.22, "count": 100},
          {"lng": 121.473, "lat": 31.21, "count": 100},
          {"lng": 121.474, "lat": 31.20, "count": 100},
          {"lng": 121.475, "lat": 31.24, "count": 100},
          {"lng": 121.476, "lat": 31.223, "count": 100},
          {"lng": 121.477, "lat": 31.221, "count": 100},
          {"lng": 121.478, "lat": 31.221, "count": 100},];
        if (!isSupportCanvas()) {
          alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
        }
        var heatmapOverlay = new BMapLib.HeatmapOverlay({"radius": 20});
        map.addOverlay(heatmapOverlay);
        heatmapOverlay.setDataSet({data: points, max: 100});

        //是否显示热力图
        function openHeatmap() {
          heatmapOverlay.show();
        }

        function closeHeatmap() {
          heatmapOverlay.hide();
        }

        closeHeatmap();

        function setGradient() {
          var gradient = {};
          var colors = document.querySelectorAll("input[type='color']");
          colors = [].slice.call(colors, 0);
          colors.forEach(function (ele) {
            gradient[ele.getAttribute("data-key")] = ele.value;
          });
          heatmapOverlay.setOptions({"gradient": gradient});
        }

        //判断浏览区是否支持canvas
        function isSupportCanvas() {
          var elem = document.createElement('canvas');
          return !!(elem.getContext && elem.getContext('2d'));
        }

        openHeatmap()
      }
    }
  }
</script>
<style lang="less" scoped>
  /*.search-tj{*/
  /*height: 120px;*/
  /*}*/
  /*.search-tj-add{*/
  /*height: 230px;*/
  /*}*/

  .xuanf {
    position: fixed;
    right: 20px;
    bottom: 300px;
  }
</style>

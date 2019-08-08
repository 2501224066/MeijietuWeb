<template>
    <div>
        <div class="w">
            <div class="layoutlogintop">
                <div class="loginleft">
                    <nuxt-link to="/" class="meijietu cr" tag="div"></nuxt-link>
                </div>
                <div v-if="$route.path !== '/login'&&$route.path !== '/kefu'">已有账号? <nuxt-link to="/login" style="color:red">请登录</nuxt-link> </div>
                <div v-if="$route.path === '/login'||$route.path === '/kefu'">欢迎登陆</div>
            </div>
        </div>
        <nuxt/>
        <div class="layoutfooter">
      <div class="layoutfooterContent">
        <div>
          <img style="margin:37px 0" src="/indexicon/footerlogo.png">
          <ul class="layoutful">
            <li><nuxt-link to="/problem">关于我们</nuxt-link> </li>
            <li><nuxt-link to="/problem">常见问题</nuxt-link> </li>
            <li><nuxt-link to="/problem/advertisers">广告主</nuxt-link> </li>
            <li><nuxt-link to="/problem/mediaOwner">媒体主</nuxt-link> </li>
            <li><nuxt-link to="/problem/financialSecurity">资金安全</nuxt-link> </li>
            <li><nuxt-link to="/problem">业务咨询</nuxt-link> </li>
            <li><nuxt-link to="cooperation">商务合作</nuxt-link> </li>
            <li><nuxt-link to="/problem/agreement">用户协议</nuxt-link> </li>
          </ul>
          <div class="erweima">
            <div>
              <!-- <img src="/hezuo/meijieerweima.png"> -->
            </div>
            <p class="tac">媒介兔公众号</p>
          </div>
        </div> 
        <div class="lfctwo">
            <div>鄂ICP备19013711号-1</div>
            <div>网站常驻法律顾问：常朋辉</div>
            <div class="fr">客服热线：027-87229100</div>
        </div>
        <div class="lfctwo" style="border:none">
          <div>媒介兔(www.meijietu.cn)</div>
          <div class="gongsi">版本所有权：武汉中帜云媒网络科技有限公司</div>
          <div >客服邮箱 kf@meijietu.cn</div>
          <div class="fr">QQ客服：28458999</div>
        </div>
      </div>
    </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
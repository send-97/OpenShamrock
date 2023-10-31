import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as d,a as e,d as a,b as r,w as s,e as i}from"./app-095e9d21.js";const l={},p=i('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>Shamrock 的更新会围绕一个稳定的版本，如果盲目升级，可能导致 Shamrock 不可用。<br> Shamrock 仍然处于快速开发阶段，可能会有大量API在未来版本中被删除或修改。<br> 请不要过度依赖实验室中的功能，以免造成不必要的损失。</p></div><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>目前推荐您下载 开发版本 的 Shamrock</p></div><h3 id="稳定版本" tabindex="-1"><a class="header-anchor" href="#稳定版本" aria-hidden="true">#</a> 稳定版本</h3>',4),u={href:"https://github.com/whitechi73/OpenShamrock/releases",target:"_blank",rel:"noopener noreferrer"},_=e("h3",{id:"开发版本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开发版本","aria-hidden":"true"},"#"),a(" 开发版本")],-1),k={href:"https://github.com/whitechi73/OpenShamrock/actions/workflows/build-apk.yml",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),a(" 部署")],-1),S={class:"hint-container warning"},b=e("p",{class:"hint-container-title"},"注意",-1),Q=e("br",null,null,-1),f=e("br",null,null,-1),x=e("br",null,null,-1),v=i('<h3 id="模拟器上部署" tabindex="-1"><a class="header-anchor" href="#模拟器上部署" aria-hidden="true">#</a> 模拟器上部署</h3><p>在Mumu模拟器、逍遥模拟器......各种模拟器，其中对Shamrock兼容较好的是<strong>Mumu模拟器</strong>，其它模拟器在测试情况下都出现高版本QQ闪退的问题。</p><p>检查您是否拥有Root权限，尝试安装安卓Xposed框架，注意的是 Shamrock必须是<code>ALL版本</code>才能在模拟器正常使用</p><p>推荐的是Xposed的Lsposed框架，而不是EdXposed，在测试情况下，EdXP出现了无法注入的问题。</p><p>如果您没有办法安装Xposed框架，请尝试使用Lspatch（需要安卓9.0+）。请不要下载其他人Patch的版本（其它人修改的QQ），请前往github下载正确的Lspatch的jar或者apk，手动patch你想要的版本（需要Shamrock支持该版本）。Patch之后，即使您使用的是便携模式，您依旧需要将QQ和Shamrock安装在同一个环境。</p><h3 id="在linux类服务器上部署-使用docker" tabindex="-1"><a class="header-anchor" href="#在linux类服务器上部署-使用docker" aria-hidden="true">#</a> 在Linux类服务器上部署（使用docker）</h3><p>这个选择过于多元化，你可以使用redroid、docker-android，需要注意的是部分框架要求开起虚拟化才能使用哦！目前依旧是采用Lspatch+Shamrock方案在docker部署，因为安装magisk类需要修补镜像，难以实现。</p><h3 id="在pve上使用windows部署" tabindex="-1"><a class="header-anchor" href="#在pve上使用windows部署" aria-hidden="true">#</a> 在PVE上使用Windows部署</h3>',8),g={href:"https://zhuanlan.zhihu.com/p/354034712?utm_psn=1695915211926863872",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"在pve上直接部署blissos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在pve上直接部署blissos","aria-hidden":"true"},"#"),a(" 在PVE上直接部署BlissOS")],-1),L={href:"https://www.bilibili.com/video/BV1Mj411e7V9",target:"_blank",rel:"noopener noreferrer"},P=e("br",null,null,-1),E=e("h3",{id:"在那linux-kvm部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在那linux-kvm部署","aria-hidden":"true"},"#"),a(" 在那Linux KVM部署")],-1),V={href:"https://cloud.tencent.com/developer/article/1484145",target:"_blank",rel:"noopener noreferrer"},A=i('<h3 id="在wsa上部署" tabindex="-1"><a class="header-anchor" href="#在wsa上部署" aria-hidden="true">#</a> ~在WSA上部署~</h3><p>WSA拥有自带Magisk的版本，但是QQ在WSA在第二次启动时会闪退，怀疑为热更新问题。</p><h3 id="有-xp-环境" tabindex="-1"><a class="header-anchor" href="#有-xp-环境" aria-hidden="true">#</a> 有 XP 环境</h3><ul><li>打开 QQ 客户端，登录你的 QQ 账号</li><li>安装 Shamrock 并在 Xposed 启用 Shamrock 模块，如果使用 LSPosed 则需要勾选模块作用域(默认QQ)</li><li>启动 Shamrock 并<code>重新启动 QQ 客户端</code>，如果环境为 Xposed 则需要重启手机</li><li>此时 Shamrock 会显示已激活(需要成功登陆，才会显示已激活)</li></ul><h3 id="无-root-环境" tabindex="-1"><a class="header-anchor" href="#无-root-环境" aria-hidden="true">#</a> 无 Root 环境</h3><h4 id="使用-lspatch" tabindex="-1"><a class="header-anchor" href="#使用-lspatch" aria-hidden="true">#</a> 使用 LSPatch</h4><ul><li>打开 LSPatch 并在<code>管理</code>页面选择 <code>+</code> 新建修补，可以选择从存储目录选择QQAPK或者直接使用已经安装过的QQ</li><li>修补模式默认且应该优先选择<code>本地模式</code>，这样方便直接更新 Shamrock 模块而不用重新修补，缺点是需要 LSPatch 保持后台运行</li><li>其他配置保持默认，然后点击<code>开始修补</code>，修补完成后会提示安装(如果已经安装会提示卸载)</li><li>安装 Shamrock 模块后在<code>管理</code>页面点击修补好的 QQ 选择<code>模块作用域</code> 勾选上 Shamrock 模块然后保存</li><li>启动 Shamrock 并<code>重新启动 QQ 客户端</code></li><li>此时 Shamrock 会显示已激活</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用<code>本地模式</code>修补后需要保持LSPatch在后台运行，优点是模块更新无需重新修补QQ 使用<code>集成模式</code>修补后无需保持LSPatch在后台运行，缺点是模块更新后需要重新修补QQ</p></div><h4 id="使用-virtualxposed" tabindex="-1"><a class="header-anchor" href="#使用-virtualxposed" aria-hidden="true">#</a> 使用 VirtualXposed</h4><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在 Android 12 以上的系统中，使用 VirtualXposed 会导致闪退。</p></div><h4 id="使用-太极" tabindex="-1"><a class="header-anchor" href="#使用-太极" aria-hidden="true">#</a> 使用 太极</h4><div class="hint-container warning"><p class="hint-container-title">注意</p><p>暂不支持太极使用，正在申请。</p></div>',12);function X(M,B){const o=t("ExternalLinkIcon"),n=t("RouterLink");return c(),d("div",null,[p,e("ul",null,[e("li",null,[a("要下载 Shamrock 的稳定版本，请访问 "),e("a",u,[a("GitHub Releases"),r(o)])])]),_,e("ul",null,[e("li",null,[a("要下载 Shamrock 的开发版本(推荐)，请访问 "),e("a",k,[a("GitHub Actions"),r(o)])])]),m,e("div",S,[b,e("p",null,[a("请使用Shamrock兼容的QQ客户端部署，见 "),r(n,{to:"/guide/faq.html#%E6%94%AF%E6%8C%81%E7%9A%84qq%E7%89%88%E6%9C%AC"},{default:s(()=>[a("支持的QQ版本")]),_:1}),a(" 如果您使用了 QRSpeed/ShamrockNative 有关的插件，请确保 Shamrock 存活。"),Q,a(" 无论什么情况都请确保 QQ 客户端 存活。"),f,a(" 禁止对 QQ 客户端 隐藏 Shamrock，这将导致无法运行。"),x,a(" 首次启动，必须打开 Shamrock，否则无法推送配置文件导致失败。")])]),v,e("p",null,[a("使用PVE安装任意Windows系统之后，阅读文章 "),e("a",g,[a("虚拟化透传(镶套虚拟化)"),r(o)]),a(" 之后可在系统内使用安卓模拟器部署。")]),w,e("p",null,[a("操作视频参考"),e("a",L,[a("PVE下安装BlissOS及Magisk,LSP"),r(o)]),P,a(" 之后可以直接使用OpenShamrock")]),E,e("p",null,[a("参考文章："),e("a",V,[a("KVM上部署Android"),r(o)]),a(" 该文章使用的安卓版本可能较低，请使用安卓9+系统")]),A])}const N=h(l,[["render",X],["__file","getting-started.html.vue"]]);export{N as default};

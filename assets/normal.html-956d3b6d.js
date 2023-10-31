import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as i,c as r,a,d as n,b as o,e}from"./app-095e9d21.js";const c={},l=e(`<h2 id="at-某人" tabindex="-1"><a class="header-anchor" href="#at-某人" aria-hidden="true">#</a> AT 某人</h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当 <code>qq</code> 字段为 <code>all</code> 时, 表示 AT 全体成员。</p></div><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>qq</td><td>int</td><td>✓</td><td>✓</td><td>否</td><td>QQ 号</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>将在未来实现 <code>qq</code> 字段为 <code>online</code> 和 <code>admin</code> 时的功能。</p></div><h3 id="cq-码" tabindex="-1"><a class="header-anchor" href="#cq-码" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:at,qq=123456]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段" tabindex="-1"><a class="header-anchor" href="#消息段" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;at&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;qq&quot;</span><span class="token operator">:</span> <span class="token number">123456</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表情" tabindex="-1"><a class="header-anchor" href="#表情" aria-hidden="true">#</a> 表情</h2><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>✓</td><td>✓</td><td>是</td><td>表情 ID</td></tr></tbody></table>`,12),p={class:"hint-container tip"},h=a("p",{class:"hint-container-title"},"提示",-1),u={href:"https://github.com/richardchien/coolq-http-api/wiki/%E8%A1%A8%E6%83%85-CQ-%E7%A0%81-ID-%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},v=e(`<h3 id="cq-码-1" tabindex="-1"><a class="header-anchor" href="#cq-码-1" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:face,id=1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段-1" tabindex="-1"><a class="header-anchor" href="#消息段-1" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;face&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回复" tabindex="-1"><a class="header-anchor" href="#回复" aria-hidden="true">#</a> 回复</h2><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>✓</td><td>✓</td><td>是</td><td>消息 ID</td></tr></tbody></table><h3 id="cq-码-2" tabindex="-1"><a class="header-anchor" href="#cq-码-2" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:reply,id=1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段-2" tabindex="-1"><a class="header-anchor" href="#消息段-2" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reply&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function b(m,k){const t=d("ExternalLinkIcon");return i(),r("div",null,[l,a("div",p,[h,a("p",null,[n("表情 ID 可以在 "),a("a",u,[n("这里"),o(t)]),n(" 查看。")])]),v])}const g=s(c,[["render",b],["__file","normal.html.vue"]]);export{g as default};

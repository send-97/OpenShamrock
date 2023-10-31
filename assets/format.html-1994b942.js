import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,e as s}from"./app-095e9d21.js";const t={},o=s(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>在后续的文档中，我们将提供 CQ 码和消息段两种格式的消息示例，以便于您更好地理解。</p></div><h2 id="cq-码" tabindex="-1"><a class="header-anchor" href="#cq-码" aria-hidden="true">#</a> CQ 码</h2><p>CQ 码是一种特殊的文本格式，用于在消息中插入表情、图片、音乐、语音、视频、网页等内容。</p><h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h3><p>这是一个 CQ 码的基本格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:action,param1=value1,param2=value2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CQ 码中内容含义如下：</p><ul><li><code>action</code>：动作，指示要进行的操作，如发送图片、音乐等。</li><li><code>param</code>：对应动作需要的参数，如 <code>qq</code>、<code>file</code> 等。</li><li><code>value</code>：参数所对应的值，如 AT 的 QQ 号。</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>例如，要 AT 一个 QQ 号为 <code>123456</code> 的用户，可以这样写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:at,qq=123456] Hello!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>他会被解析为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@小明 Hello!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="转义" tabindex="-1"><a class="header-anchor" href="#转义" aria-hidden="true">#</a> 转义</h3><p>CQ 码由 <code>[</code> 和 <code>]</code> 并以 <code>,</code> 分隔的多个部分组成，因此如果要在 CQ 码中使用这些字符，需要进行转义。</p><table><thead><tr><th>原字符</th><th>转义字符</th></tr></thead><tbody><tr><td><code>&amp;</code></td><td><code>&amp;amp;</code></td></tr><tr><td><code>[</code></td><td><code>&amp;#91;</code></td></tr><tr><td><code>]</code></td><td><code>&amp;#93;</code></td></tr><tr><td><code>,</code></td><td><code>&amp;#44;</code></td></tr></tbody></table><h2 id="消息段" tabindex="-1"><a class="header-anchor" href="#消息段" aria-hidden="true">#</a> 消息段</h2><p>消息段是新一代的消息格式，采用 JSON 格式。</p><h3 id="格式-1" tabindex="-1"><a class="header-anchor" href="#格式-1" aria-hidden="true">#</a> 格式</h3><p>消息段是一个 JSON 对象，以下是一个消息段的基本格式：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 消息段类型</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 消息段数据/参数</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello!&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><p>例如，要 AT 一个 QQ 号为 <code>123456</code> 的用户，可以这样写：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;at&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;qq&quot;</span><span class="token operator">:</span> <span class="token number">123456</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>他会被解析为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@小明
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="组合" tabindex="-1"><a class="header-anchor" href="#组合" aria-hidden="true">#</a> 组合</h3><p>消息段可以组合在一起，形成一个消息。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;at&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;qq&quot;</span><span class="token operator">:</span> <span class="token number">123456</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot; Hello!&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上消息段会被解析为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@小明 Hello!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31),d=[o];function i(p,c){return n(),e("div",null,d)}const u=a(t,[["render",i],["__file","format.html.vue"]]);export{u as default};

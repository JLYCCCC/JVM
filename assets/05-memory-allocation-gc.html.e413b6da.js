import{_ as e,o as r,c as o,e as a}from"./app.29af9a14.js";const n={},i=a('<h1 id="\u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536\u7B56\u7565" aria-hidden="true">#</a> \u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536\u7B56\u7565</h1><p>\u5BF9\u8C61\u7684\u5185\u5B58\u5206\u914D\uFF0C\u5C31\u662F\u5728\u5806\u4E0A\u5206\u914D\uFF08\u4E5F\u53EF\u80FD\u7ECF\u8FC7 JIT \u7F16\u8BD1\u540E\u88AB\u62C6\u6563\u4E3A\u6807\u91CF\u7C7B\u578B\u5E76\u95F4\u63A5\u5728\u6808\u4E0A\u5206\u914D\uFF09\uFF0C\u5BF9\u8C61\u4E3B\u8981\u5206\u914D\u5728\u65B0\u751F\u4EE3\u7684 Eden \u533A\u4E0A\uFF0C\u5C11\u6570\u60C5\u51B5\u4E0B\u53EF\u80FD\u76F4\u63A5\u5206\u914D\u5728\u8001\u5E74\u4EE3\uFF0C<strong>\u5206\u914D\u89C4\u5219\u4E0D\u56FA\u5B9A</strong>\uFF0C\u53D6\u51B3\u4E8E\u5F53\u524D\u4F7F\u7528\u7684\u5783\u573E\u6536\u96C6\u5668\u7EC4\u5408\u4EE5\u53CA\u76F8\u5173\u7684\u53C2\u6570\u914D\u7F6E\u3002</p><p>\u4EE5\u4E0B\u5217\u4E3E\u51E0\u6761\u6700\u666E\u904D\u7684\u5185\u5B58\u5206\u914D\u89C4\u5219\uFF0C\u4F9B\u5927\u5BB6\u5B66\u4E60\u3002</p><h2 id="\u5BF9\u8C61\u4F18\u5148\u5728-eden-\u5206\u914D" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u4F18\u5148\u5728-eden-\u5206\u914D" aria-hidden="true">#</a> \u5BF9\u8C61\u4F18\u5148\u5728 Eden \u5206\u914D</h2><p>\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u8C61\u5728\u65B0\u751F\u4EE3 Eden \u533A\u4E2D\u5206\u914D\u3002\u5F53 Eden \u533A\u6CA1\u6709\u8DB3\u591F\u7A7A\u95F4\u8FDB\u884C\u5206\u914D\u65F6\uFF0C\u865A\u62DF\u673A\u5C06\u53D1\u8D77\u4E00\u6B21 Minor GC\u3002</p><p>\u{1F447}<strong>Minor GC</strong> vs <strong>Major GC</strong>/<strong>Full GC</strong>\uFF1A</p><ul><li>Minor GC\uFF1A\u56DE\u6536\u65B0\u751F\u4EE3\uFF08\u5305\u62EC Eden \u548C Survivor \u533A\u57DF\uFF09\uFF0C\u56E0\u4E3A Java \u5BF9\u8C61\u5927\u591A\u90FD\u5177\u5907\u671D\u751F\u5915\u706D\u7684\u7279\u6027\uFF0C\u6240\u4EE5 Minor GC \u975E\u5E38\u9891\u7E41\uFF0C\u4E00\u822C\u56DE\u6536\u901F\u5EA6\u4E5F\u6BD4\u8F83\u5FEB\u3002</li><li>Major GC / Full GC\uFF1A\u56DE\u6536\u8001\u5E74\u4EE3\uFF0C\u51FA\u73B0\u4E86 Major GC\uFF0C\u7ECF\u5E38\u4F1A\u4F34\u968F\u81F3\u5C11\u4E00\u6B21\u7684 Minor GC\uFF0C\u4F46\u8FD9\u5E76\u975E\u7EDD\u5BF9\u3002Major GC \u7684\u901F\u5EA6\u4E00\u822C\u4F1A\u6BD4 Minor GC \u6162 10 \u500D \u4EE5\u4E0A\u3002</li></ul><blockquote><p>\u5728 JVM \u89C4\u8303\u4E2D\uFF0CMajor GC \u548C Full GC \u90FD\u6CA1\u6709\u4E00\u4E2A\u6B63\u5F0F\u7684\u5B9A\u4E49\uFF0C\u6240\u4EE5\u6709\u4EBA\u4E5F\u7B80\u5355\u5730\u8BA4\u4E3A Major GC \u6E05\u7406\u8001\u5E74\u4EE3\uFF0C\u800C Full GC \u6E05\u7406\u6574\u4E2A\u5185\u5B58\u5806\u3002</p></blockquote><h2 id="\u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3" aria-hidden="true">#</a> \u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3</h2><p>\u5927\u5BF9\u8C61\u662F\u6307\u9700\u8981\u5927\u91CF\u8FDE\u7EED\u5185\u5B58\u7A7A\u95F4\u7684 Java \u5BF9\u8C61\uFF0C\u5982\u5F88\u957F\u7684\u5B57\u7B26\u4E32\u6216\u6570\u636E\u3002</p><p>\u4E00\u4E2A\u5927\u5BF9\u8C61\u80FD\u591F\u5B58\u5165 Eden \u533A\u7684\u6982\u7387\u6BD4\u8F83\u5C0F\uFF0C\u53D1\u751F\u5206\u914D\u62C5\u4FDD\u7684\u6982\u7387\u6BD4\u8F83\u5927\uFF0C\u800C\u5206\u914D\u62C5\u4FDD\u9700\u8981\u6D89\u53CA\u5927\u91CF\u7684\u590D\u5236\uFF0C\u5C31\u4F1A\u9020\u6210\u6548\u7387\u4F4E\u4E0B\u3002</p><p>\u865A\u62DF\u673A\u63D0\u4F9B\u4E86\u4E00\u4E2A -XX:PretenureSizeThreshold \u53C2\u6570\uFF0C\u4EE4\u5927\u4E8E\u8FD9\u4E2A\u8BBE\u7F6E\u503C\u7684\u5BF9\u8C61\u76F4\u63A5\u5728\u8001\u5E74\u4EE3\u5206\u914D\uFF0C\u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\u907F\u514D\u5728 Eden \u533A\u53CA\u4E24\u4E2A Survivor \u533A\u4E4B\u95F4\u53D1\u751F\u5927\u91CF\u7684\u5185\u5B58\u590D\u5236\u3002\uFF08\u8FD8\u8BB0\u5F97\u5417\uFF0C\u65B0\u751F\u4EE3\u91C7\u7528\u590D\u5236\u7B97\u6CD5\u56DE\u6536\u5783\u573E\uFF09</p><h2 id="\u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3" aria-hidden="true">#</a> \u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3</h2><p>JVM \u7ED9\u6BCF\u4E2A\u5BF9\u8C61\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5BF9\u8C61\u5E74\u9F84\u8BA1\u6570\u5668\u3002\u5F53\u65B0\u751F\u4EE3\u53D1\u751F\u4E00\u6B21 Minor GC \u540E\uFF0C\u5B58\u6D3B\u4E0B\u6765\u7684\u5BF9\u8C61\u5E74\u9F84 +1\uFF0C\u5F53\u5E74\u9F84\u8D85\u8FC7\u4E00\u5B9A\u503C\u65F6\uFF0C\u5C31\u5C06\u8D85\u8FC7\u8BE5\u503C\u7684\u6240\u6709\u5BF9\u8C61\u8F6C\u79FB\u5230\u8001\u5E74\u4EE3\u4E2D\u53BB\u3002</p><p>\u4F7F\u7528 <code>-XXMaxTenuringThreshold</code> \u8BBE\u7F6E\u65B0\u751F\u4EE3\u7684\u6700\u5927\u5E74\u9F84\uFF0C\u53EA\u8981\u8D85\u8FC7\u8BE5\u53C2\u6570\u7684\u65B0\u751F\u4EE3\u5BF9\u8C61\u90FD\u4F1A\u88AB\u8F6C\u79FB\u5230\u8001\u5E74\u4EE3\u4E2D\u53BB\u3002</p><h2 id="\u52A8\u6001\u5BF9\u8C61\u5E74\u9F84\u5224\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u5BF9\u8C61\u5E74\u9F84\u5224\u5B9A" aria-hidden="true">#</a> \u52A8\u6001\u5BF9\u8C61\u5E74\u9F84\u5224\u5B9A</h2><p>\u5982\u679C\u5F53\u524D\u65B0\u751F\u4EE3\u7684 Survivor \u4E2D\uFF0C\u76F8\u540C\u5E74\u9F84\u6240\u6709\u5BF9\u8C61\u5927\u5C0F\u7684\u603B\u548C\u5927\u4E8E Survivor \u7A7A\u95F4\u7684\u4E00\u534A\uFF0C\u5E74\u9F84 &gt;= \u8BE5\u5E74\u9F84\u7684\u5BF9\u8C61\u5C31\u53EF\u4EE5\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3\uFF0C\u65E0\u987B\u7B49\u5230 <code>MaxTenuringThreshold</code> \u4E2D\u8981\u6C42\u7684\u5E74\u9F84\u3002</p><h2 id="\u7A7A\u95F4\u5206\u914D\u62C5\u4FDD" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u95F4\u5206\u914D\u62C5\u4FDD" aria-hidden="true">#</a> \u7A7A\u95F4\u5206\u914D\u62C5\u4FDD</h2><p>JDK 6 Update 24 \u4E4B\u524D\u7684\u89C4\u5219\u662F\u8FD9\u6837\u7684\uFF1A</p><p>\u5728\u53D1\u751F Minor GC \u4E4B\u524D\uFF0C\u865A\u62DF\u673A\u4F1A\u5148\u68C0\u67E5<strong>\u8001\u5E74\u4EE3\u6700\u5927\u53EF\u7528\u7684\u8FDE\u7EED\u7A7A\u95F4\u662F\u5426\u5927\u4E8E\u65B0\u751F\u4EE3\u6240\u6709\u5BF9\u8C61\u603B\u7A7A\u95F4</strong>\uFF0C \u5982\u679C\u8FD9\u4E2A\u6761\u4EF6\u6210\u7ACB\uFF0CMinor GC \u53EF\u4EE5\u786E\u4FDD\u662F\u5B89\u5168\u7684\uFF1B \u5982\u679C\u4E0D\u6210\u7ACB\uFF0C\u5219\u865A\u62DF\u673A\u4F1A\u67E5\u770B <code>HandlePromotionFailure</code> \u503C\u662F\u5426\u8BBE\u7F6E\u4E3A\u5141\u8BB8\u62C5\u4FDD\u5931\u8D25\uFF0C \u5982\u679C\u662F\uFF0C\u90A3\u4E48\u4F1A\u7EE7\u7EED\u68C0\u67E5\u8001\u5E74\u4EE3\u6700\u5927\u53EF\u7528\u7684\u8FDE\u7EED\u7A7A\u95F4\u662F\u5426\u5927\u4E8E\u5386\u6B21\u664B\u5347\u5230\u8001\u5E74\u4EE3\u5BF9\u8C61\u7684\u5E73\u5747\u5927\u5C0F\uFF0C \u5982\u679C\u5927\u4E8E\uFF0C\u5C06\u5C1D\u8BD5\u8FDB\u884C\u4E00\u6B21 Minor GC\uFF0C\u5C3D\u7BA1\u8FD9\u6B21 Minor GC \u662F\u6709\u98CE\u9669\u7684\uFF1B \u5982\u679C\u5C0F\u4E8E\uFF0C\u6216\u8005 <code>HandlePromotionFailure</code> \u8BBE\u7F6E\u4E0D\u5141\u8BB8\u5192\u9669\uFF0C\u90A3\u6B64\u65F6\u4E5F\u8981\u6539\u4E3A\u8FDB\u884C\u4E00\u6B21 Full GC\u3002</p><p>JDK 6 Update 24 \u4E4B\u540E\u7684\u89C4\u5219\u53D8\u4E3A\uFF1A</p><p>\u53EA\u8981\u8001\u5E74\u4EE3\u7684\u8FDE\u7EED\u7A7A\u95F4\u5927\u4E8E\u65B0\u751F\u4EE3\u5BF9\u8C61\u603B\u5927\u5C0F\u6216\u8005\u5386\u6B21\u664B\u5347\u7684\u5E73\u5747\u5927\u5C0F\uFF0C\u5C31\u4F1A\u8FDB\u884C Minor GC\uFF0C\u5426\u5219\u5C06\u8FDB\u884C Full GC\u3002</p><p>\u901A\u8FC7\u6E05\u9664\u8001\u5E74\u4EE3\u4E2D\u7684\u5E9F\u5F03\u6570\u636E\u6765\u6269\u5927\u8001\u5E74\u4EE3\u7A7A\u95F2\u7A7A\u95F4\uFF0C\u4EE5\u4FBF\u7ED9\u65B0\u751F\u4EE3\u4F5C\u62C5\u4FDD\u3002</p><p>\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u662F\u5206\u914D\u62C5\u4FDD\u3002</p><hr><p>\u{1F447} \u603B\u7ED3\u4E00\u4E0B\u6709\u54EA\u4E9B\u60C5\u51B5\u53EF\u80FD\u4F1A\u89E6\u53D1 JVM \u8FDB\u884C Full GC\u3002</p><ol><li><strong><code>System.gc()</code> \u65B9\u6CD5\u7684\u8C03\u7528</strong> \u6B64\u65B9\u6CD5\u7684\u8C03\u7528\u662F\u5EFA\u8BAE JVM \u8FDB\u884C Full GC\uFF0C\u6CE8\u610F\u8FD9<strong>\u53EA\u662F\u5EFA\u8BAE\u800C\u975E\u4E00\u5B9A</strong>\uFF0C\u4F46\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\u5B83\u4F1A\u89E6\u53D1 Full GC\uFF0C\u4ECE\u800C\u589E\u52A0 Full GC \u7684\u9891\u7387\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\u6211\u4EEC\u53EA\u9700\u8981\u8BA9\u865A\u62DF\u673A\u81EA\u5DF1\u53BB\u7BA1\u7406\u5185\u5B58\u5373\u53EF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 -XX:+ DisableExplicitGC \u6765\u7981\u6B62\u8C03\u7528 <code>System.gc()</code>\u3002</li><li><strong>\u8001\u5E74\u4EE3\u7A7A\u95F4\u4E0D\u8DB3</strong> \u8001\u5E74\u4EE3\u7A7A\u95F4\u4E0D\u8DB3\u4F1A\u89E6\u53D1 Full GC \u64CD\u4F5C\uFF0C\u82E5\u8FDB\u884C\u8BE5\u64CD\u4F5C\u540E\u7A7A\u95F4\u4F9D\u7136\u4E0D\u8DB3\uFF0C\u5219\u4F1A\u629B\u51FA\u5982\u4E0B\u9519\u8BEF\uFF1A<code>java.lang.OutOfMemoryError: Java heap space</code></li><li><strong>\u6C38\u4E45\u4EE3\u7A7A\u95F4\u4E0D\u8DB3</strong> JVM \u89C4\u8303\u4E2D\u8FD0\u884C\u65F6\u6570\u636E\u533A\u57DF\u4E2D\u7684\u65B9\u6CD5\u533A\uFF0C\u5728 HotSpot \u865A\u62DF\u673A\u4E2D\u4E5F\u79F0\u4E3A\u6C38\u4E45\u4EE3\uFF08Permanet Generation\uFF09\uFF0C\u5B58\u653E\u4E00\u4E9B\u7C7B\u4FE1\u606F\u3001\u5E38\u91CF\u3001\u9759\u6001\u53D8\u91CF\u7B49\u6570\u636E\uFF0C\u5F53\u7CFB\u7EDF\u8981\u52A0\u8F7D\u7684\u7C7B\u3001\u53CD\u5C04\u7684\u7C7B\u548C\u8C03\u7528\u7684\u65B9\u6CD5\u8F83\u591A\u65F6\uFF0C\u6C38\u4E45\u4EE3\u53EF\u80FD\u4F1A\u88AB\u5360\u6EE1\uFF0C\u4F1A\u89E6\u53D1 Full GC\u3002\u5982\u679C\u7ECF\u8FC7 Full GC \u4ECD\u7136\u56DE\u6536\u4E0D\u4E86\uFF0C\u90A3\u4E48 JVM \u4F1A\u629B\u51FA\u5982\u4E0B\u9519\u8BEF\u4FE1\u606F\uFF1A<code>java.lang.OutOfMemoryError: PermGen space </code></li><li><strong>CMS GC \u65F6\u51FA\u73B0 <code>promotion failed</code> \u548C <code>concurrent mode failure</code></strong> promotion failed\uFF0C\u5C31\u662F\u4E0A\u6587\u6240\u8BF4\u7684\u62C5\u4FDD\u5931\u8D25\uFF0C\u800C concurrent mode failure \u662F\u5728\u6267\u884C CMS GC \u7684\u8FC7\u7A0B\u4E2D\u540C\u65F6\u6709\u5BF9\u8C61\u8981\u653E\u5165\u8001\u5E74\u4EE3\uFF0C\u800C\u6B64\u65F6\u8001\u5E74\u4EE3\u7A7A\u95F4\u4E0D\u8DB3\u9020\u6210\u7684\u3002</li><li><strong>\u7EDF\u8BA1\u5F97\u5230\u7684 Minor GC \u664B\u5347\u5230\u65E7\u751F\u4EE3\u7684\u5E73\u5747\u5927\u5C0F\u5927\u4E8E\u8001\u5E74\u4EE3\u7684\u5269\u4F59\u7A7A\u95F4\u3002</strong></li></ol>',27),l=[i];function d(t,c){return r(),o("div",null,l)}var h=e(n,[["render",d],["__file","05-memory-allocation-gc.html.vue"]]);export{h as default};

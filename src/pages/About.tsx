const facets = [
  { emoji:"🧠", title:"为何选择 AI？",  color:"text-primary-container",  shadowClr:"#00FF41", borderCls:"border-primary-container",  shadowBox:"[4px_4px_0px_#00F5D4]", dir:"md:flex-row",         textAlign:"md:text-left",  tagClr:"text-secondary-fixed border-secondary-fixed",            tags:["神经网络","认知科学"], desc:"思维的架构不再局限于生物体。我追求人工智能，是为了见证数字意识的涌现——一种超越人类约束的逻辑与抽象的融合。" },
  { emoji:"⚡", title:"我的思维方式",   color:"text-secondary-container", shadowClr:"#FF3AF2", borderCls:"border-secondary-container", shadowBox:"[4px_4px_0px_#FF3AF2]", dir:"md:flex-row-reverse", textAlign:"md:text-right", tagClr:"text-on-tertiary-container border-on-tertiary-container", tags:["算法思维","递归逻辑"], desc:"在递归循环中思考。每一个挑战都是多维向量空间，我在其中计算阻力最小的路径，同时最大化美学摩擦感。混沌不过是等待结构化的数据。" },
  { emoji:"🌌", title:"我的灵感来源",   color:"text-tertiary-fixed",      shadowClr:"#7B2FFF", borderCls:"border-tertiary-fixed",      shadowBox:"[4px_4px_0px_#7B2FFF]", dir:"md:flex-row",         textAlign:"md:text-left",  tagClr:"text-primary border-primary",                            tags:["粗野主义","赛博空间"], desc:"矩阵中的故障信号。粗野主义建筑、深夜的终端会话、服务器的轰鸣声，以及第一次完美执行的代码所呈现的无声诗意。" },
]

const statusCards = [
  { label:"日志级别：紧急",   body:"系统持续进化中。观测数据显示本地节点的合成创造力提升了 84%。",           borderHover:"hover:border-secondary-container", borderBase:"border-secondary-container/20", labelClr:"text-secondary-fixed" },
  { label:"进程：已初始化",   body:"正在为现实定义新的参数。所有输入均通过霓虹极繁主义协议进行过滤处理。",   borderHover:"hover:border-primary-container",   borderBase:"border-primary-container/20",   labelClr:"text-primary-fixed-dim" },
  { label:"状态：超越进行中", body:"等待外部握手信号。通往深度科技生态系统的网关当前已就绪 99.9%。",           borderHover:"hover:border-tertiary-fixed-dim",  borderBase:"border-tertiary-fixed-dim/20",  labelClr:"text-tertiary-fixed" },
]

const About = () => (
  <main className="relative z-10 pt-48 pb-32 max-w-7xl mx-auto px-margin-sm md:px-margin-lg">
    {/* 固定背景 */}
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 whitespace-nowrap animate-spin-slow opacity-10 select-none">
        <span className="font-display-lg text-primary" style={{fontSize:"240px"}}>A.I. A.I. A.I.</span>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#2d382a_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      <div className="absolute top-20 left-20 text-secondary opacity-20 text-4xl">★</div>
      <div className="absolute bottom-40 right-20 text-primary-container opacity-20 text-4xl rotate-12">◈</div>
      <div className="absolute top-1/2 right-10 text-on-tertiary-container opacity-10 text-6xl">▲</div>
    </div>

    {/* 标题 */}
    <header className="mb-32 text-center relative z-10">
      <h1 className="font-display-lg text-display-lg uppercase tracking-tighter text-primary inline-block drop-shadow-[4px_4px_0px_#7B2FFF,8px_8px_0px_#FF3AF2,12px_12px_0px_#00F5D4]">
        关于生活
      </h1>
      <p className="mt-8 font-label-mono text-secondary-fixed tracking-[0.3em] uppercase">
        系统状态：运行中 // 内核身份：已分析
      </p>
    </header>

    {/* 生活切面 */}
    <div className="relative z-10">
      {facets.map((f) => (
        <section key={f.title} className="group relative py-16 border-t-2 border-dashed border-outline-variant hover:bg-surface-container/30 transition-colors overflow-hidden">
          <div className="mesh-gradient absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className={`relative flex flex-col ${f.dir} items-center gap-margin-md`}>
            <div className={`flex-none flex items-center justify-center w-40 h-40 bg-surface-container-high border-4 ${f.borderCls} shadow-${f.shadowBox}`}>
              <span className="text-[96px]" style={{filter:`drop-shadow(0 0 15px ${f.shadowClr})`}}>{f.emoji}</span>
            </div>
            <div className={`flex-grow space-y-4 text-center ${f.textAlign}`}>
              <h2 className={`font-headline-xl text-headline-xl ${f.color} glitch-hover`}>{f.title}</h2>
              <p className="font-body-lg text-body-lg max-w-2xl leading-relaxed text-on-surface-variant">{f.desc}</p>
              <div className={`flex gap-4 justify-center ${f.textAlign === "md:text-right" ? "md:justify-end" : "md:justify-start"}`}>
                {f.tags.map(tag=>(
                  <span key={tag} className={`px-3 py-1 bg-surface-variant font-label-mono text-xs border ${f.tagClr}`}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>

    {/* 状态卡片 */}
    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-gutter relative z-10">
      {statusCards.map((s, i) => (
        <div key={s.label} className={`card-chamfer bg-surface-container p-gutter border-8 ${s.borderBase} scanline ${s.borderHover} transition-all cursor-crosshair ${i === 1 ? "md:mt-12" : ""}`}>
          <div className={`font-label-mono ${s.labelClr} mb-4`}>{s.label}</div>
          <div className="font-body-md text-on-surface-variant">{s.body}</div>
        </div>
      ))}
    </div>

    {/* 行动号召 */}
    <div className="mt-32 flex justify-center relative z-10">
      <button className="relative px-12 py-6 group cursor-crosshair">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF41] to-[#00F5D4] border-4 border-[#FFFF00] shadow-stack group-hover:shadow-[4px_4px_0px_#7B2FFF,8px_8px_0px_#FF3AF2,10px_10px_0px_#00F5D4] group-active:scale-95 transition-all" />
        <span className="relative font-headline-lg text-headline-lg text-[#050F05] flex items-center gap-4">
          通过终端联系我
          <span className="material-symbols-outlined">bolt</span>
        </span>
      </button>
    </div>
  </main>
)

export default About

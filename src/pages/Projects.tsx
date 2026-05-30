const projects = [
  { num:"01", name:"神经仪表盘",   desc:"用于增强认知同步的实时生物特征监测系统。",         tags:["REACT_V18","WEBGL"],      borderCls:"border-secondary-container border-solid",     gradient:"from-secondary-container/30 to-on-tertiary-fixed/20",      textCls:"text-secondary-container", rot:"rotate-[-1deg]" },
  { num:"02", name:"核心碎片",     desc:"具备零延迟验证层的去中心化资产管理协议。",           tags:["AI引擎","PYTHON扩展"],    borderCls:"border-tertiary-container border-dashed",     gradient:"from-on-tertiary-container/20 to-primary-fixed-dim/20",    textCls:"text-tertiary-fixed-dim",  rot:"rotate-[1deg]"  },
  { num:"03", name:"幽灵外壳OS",   desc:"专为神经链路底层操作优化的自定义 Linux 内核改造。", tags:["RUST","内核"],            borderCls:"border-primary-fixed-dim border-double",      gradient:"from-on-primary-fixed-variant/30 to-secondary-fixed-dim/20",textCls:"text-primary-fixed-dim",   rot:"rotate-[2deg]"  },
  { num:"04", name:"密保原型",     desc:"端到端加密存储方案，具备生物特征熵密钥生成功能。",   tags:["RUST","WASM","AES-256"], borderCls:"border-on-secondary-fixed-variant border-solid",gradient:"from-on-secondary-fixed-variant/20 to-primary/10",         textCls:"text-secondary-fixed",     rot:"rotate-[-1deg]" },
]

const Projects = () => (
  <main className="relative z-10 pt-40 pb-20 px-margin-sm md:px-margin-lg max-w-[1440px] mx-auto">
    {/* 固定背景 */}
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-[radial-gradient(#2d382a_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-on-tertiary-container/10 blur-[150px] rounded-full" />
      <span className="material-symbols-outlined absolute top-20 left-10 text-secondary-fixed opacity-20 text-[40px] floating-icon">star</span>
      <span className="material-symbols-outlined absolute bottom-40 right-20 text-primary-fixed-dim opacity-20 text-[32px] floating-icon" style={{animationDelay:"1s"}}>diamond</span>
      <span className="material-symbols-outlined absolute top-1/2 right-10 text-tertiary-fixed-dim opacity-20 text-[48px] floating-icon" style={{animationDelay:"2s"}}>change_history</span>
    </div>

    {/* 页头 */}
    <header className="mb-20 text-center md:text-left relative z-10">
      <div className="inline-block relative">
        <h1 className="font-display-lg text-display-lg text-primary glitch-shadow uppercase leading-none">作品集</h1>
        <div className="absolute -top-4 -right-8 font-label-mono text-label-mono bg-primary-container text-on-primary-container px-2 py-1 rotate-12">V.2.04_稳定版</div>
      </div>
      <p className="font-body-lg text-on-surface-variant mt-6 max-w-2xl border-l-4 border-dashed border-secondary-fixed pl-6">
        已执行协议存档。解密高保真界面与实验性系统。
      </p>
    </header>

    {/* 项目网格 */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
      {projects.map((p, i) => {
        const spans = ["md:col-span-5 lg:col-span-4","md:col-span-7 lg:col-span-8 md:mt-24","md:col-span-12 lg:col-span-6 lg:mt-[-40px]","md:col-span-12 lg:col-span-6 md:mt-12"]
        return (
          <div key={p.num} className={`${spans[i]} ${p.rot} hover:rotate-0 transition-transform duration-300`}>
            <article className={`bg-surface-container-high/90 border-8 ${p.borderCls} card-chamfer p-6 hard-shadow-stack scanline relative h-full group`}>
              <span className={`absolute -top-6 -left-4 font-headline-xl ${p.textCls} opacity-50 select-none text-5xl`}>{p.num}</span>
              <div className={`aspect-video bg-gradient-to-br ${p.gradient} mb-6 border-2 border-outline-variant relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 scanline opacity-40" />
                <span className={`font-label-mono ${p.textCls} tracking-widest opacity-60`}>[ {p.name} ]</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(t=>(
                  <span key={t} className="bg-surface-container-lowest border border-outline px-2 py-0.5 font-label-mono text-[10px] text-outline">{t}</span>
                ))}
              </div>
              <h3 className={`font-headline-lg text-headline-lg ${p.textCls} mb-2`}>{p.name}</h3>
              <p className="font-body-md text-on-surface-variant mb-6">{p.desc}</p>
              <button className="w-full bg-gradient-to-r from-primary-container to-secondary-container border-4 border-[#FFFF00] text-[#050F05] py-3 font-callout text-callout uppercase hover:-translate-y-1 transition-all cursor-crosshair">
                查看项目
              </button>
            </article>
          </div>
        )
      })}
    </div>

    {/* 行动号召 */}
    <section className="mt-40 text-center border-4 border-dashed border-outline-variant p-12 bg-surface-container-low/50 relative overflow-hidden z-10">
      <div className="absolute inset-0 scanline opacity-10" />
      <h2 className="font-headline-xl text-headline-xl text-primary mb-6">准备好合作了吗？</h2>
      <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">系统已就绪，待命协同部署与跨职能协作。</p>
      <button className="bg-gradient-to-r from-primary-container to-secondary-container border-4 border-[#FFFF00] text-[#050F05] px-12 py-4 font-callout text-callout uppercase hard-shadow-stack hover:translate-x-[2px] hover:-translate-y-[2px] transition-all cursor-crosshair">
        建立连接
      </button>
    </section>
  </main>
)

export default Projects

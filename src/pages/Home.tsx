import { useNavigate } from "react-router-dom"
import FuzzyText from "../components/FuzzyText"

const expCards = [
  { period:"// 2022_至今",  company:"神经工作室", desc:"领导分布式神经节点和认知界面的 AI 交互设计。",         tags:["大语言模型","UI/UX"],  b:"border-primary-container",  t:"text-primary-container",  tg:"text-primary border-primary/30" },
  { period:"// 2020_2022", company:"赛博科技",   desc:"开发响应式矩阵布局与高性能数据可视化方案。",           tags:["REACT","D3_JS"],      b:"border-secondary-container", t:"text-secondary-container", tg:"text-secondary-container border-secondary-container/30" },
  { period:"// 2018_2020", company:"虚空工作室", desc:"为地下科技团体打造视觉识别体系与极简主义 Web 架构。", tags:["粗野主义","WEBGL"],    b:"border-tertiary-fixed-dim",  t:"text-tertiary-fixed-dim",  tg:"text-tertiary-fixed-dim border-tertiary-fixed-dim/30" },
  { period:"// 2015_2018", company:"核心系统",   desc:"基础设施监控工具与遗留系统界面现代化改造。",           tags:["数据面板","设计系统"], b:"border-[#FFFF00]",           t:"text-[#FFFF00]",           tg:"text-[#FFFF00] border-[#FFFF00]/30" },
]

const HomePage = () => {
  const nav = useNavigate()
  return (
    <main>
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden diagonal-stripes">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div className="absolute top-[20%] left-[10%] opacity-20 text-secondary-fixed floating-icon pointer-events-none">
          <span className="material-symbols-outlined text-6xl" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
        </div>
        <div className="absolute bottom-[30%] right-[15%] opacity-20 text-tertiary-fixed-dim rotate-12 pointer-events-none">
          <span className="material-symbols-outlined text-8xl floating-icon" style={{animationDelay:"1s"}}>change_history</span>
        </div>
        <div className="relative z-10 text-center px-margin-sm">
          <div className="mb-6 flex justify-center">
            <FuzzyText
              fontSize="clamp(3rem, 10vw, 9rem)"
              fontWeight={900}
              fontFamily="Orbitron, monospace"
              color="#00FF41"
              baseIntensity={0.15}
              hoverIntensity={0.6}
              fuzzRange={28}
              fps={60}
              direction="horizontal"
              glitchMode={true}
              glitchInterval={3000}
              glitchDuration={180}
              transitionDuration={300}
              clickEffect={true}
              gradient={['#00FF41', '#00F5D4', '#FF3AF2', '#00FF41']}
            >
              Hello World!
            </FuzzyText>
          </div>
          <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary-fixed-dim mb-12">
            AI 产品设计师 &amp; 开发者
            <span className="inline-block w-4 h-8 ml-2 bg-secondary-fixed-dim animate-blink align-middle" />
          </p>
          <div className="flex flex-col md:flex-row gap-gutter justify-center items-center">
            <button onClick={()=>nav("/portfolio")} className="px-10 py-5 bg-gradient-to-r from-primary-container to-secondary-container border-4 border-[#FFFF00] text-[#050F05] font-headline-lg uppercase tracking-widest shadow-stack hover:-translate-y-1 transition-all cursor-crosshair">
              查看作品
            </button>
            <button onClick={()=>nav("/contact")} className="px-10 py-5 border-2 border-dashed border-tertiary-fixed-dim text-tertiary-fixed-dim font-headline-lg uppercase tracking-widest hover:bg-tertiary-fixed-dim/10 transition-all cursor-crosshair">
              联系我
            </button>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none scanline" />
      </section>

      <section className="py-margin-lg bg-surface-container-lowest overflow-hidden">
        <h2 className="px-margin-lg font-headline-xl text-headline-xl text-primary mb-12 flex items-center gap-4">
          <span className="material-symbols-outlined" style={{fontVariationSettings:"'FILL' 1"}}>memory</span>
          工作经历
        </h2>
        <div className="flex overflow-x-auto gap-gutter px-margin-lg pb-12 no-scrollbar">
          {expCards.map(c=>(
            <div key={c.company} className={`flex-none w-[350px] bg-surface-variant p-6 clip-chamfer border-l-8 ${c.b} shadow-stack hover:translate-x-1 transition-transform`}>
              <p className={`font-label-mono text-label-mono ${c.t} mb-2`}>{c.period}</p>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">{c.company}</h3>
              <p className="font-body-md text-on-surface-variant mb-6">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map(tag=>(
                  <span key={tag} className={`px-2 py-1 bg-surface-container-high border font-label-mono text-label-mono ${c.tg}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-margin-lg px-margin-lg bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 space-y-8">
            <div className="inline-block px-4 py-2 bg-primary-container text-on-primary-container font-headline-lg-mobile uppercase -skew-x-12">项目档案</div>
            <h2 className="font-display-lg text-headline-xl text-primary leading-tight">解码数字复杂性</h2>
            <p className="font-body-lg text-on-surface-variant max-w-lg">
              每一个界面都是一套通信协议。我用极简主义美学与高保真交互，在复杂机器智能与人类直觉之间搭建桥梁。
            </p>
            <button onClick={()=>nav("/portfolio")} className="flex items-center gap-4 text-secondary-fixed font-headline-lg uppercase hover:gap-8 transition-all cursor-crosshair">
              探索数据库 <span className="material-symbols-outlined">trending_flat</span>
            </button>
          </div>
          <div className="md:col-span-7 relative h-[520px]">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-secondary-container/30 to-primary-container/20 border-8 border-secondary-container card-chamfer shadow-stack rotate-2 overflow-hidden flex flex-col justify-end p-6">
              <div className="absolute inset-0 scanline opacity-30" />
              <span className="font-label-mono text-secondary-container relative z-10">项目_01</span>
              <h4 className="font-headline-lg text-primary relative z-10">神经同步界面</h4>
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-br from-tertiary-fixed-dim/20 to-on-tertiary-container/20 border-8 border-tertiary-fixed-dim card-chamfer shadow-stack -rotate-3 overflow-hidden flex flex-col justify-end p-6">
              <div className="absolute inset-0 scanline opacity-30" />
              <span className="font-label-mono text-tertiary-fixed-dim relative z-10">项目_02</span>
              <h4 className="font-headline-lg text-primary relative z-10">动能流系统</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage

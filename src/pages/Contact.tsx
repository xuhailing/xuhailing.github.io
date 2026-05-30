import { useEffect, useRef } from "react"

const Contact = () => {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!glowRef.current) return
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      glowRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0,255,65,0.15), transparent 70%)`
    }
    window.addEventListener("mousemove", handler)
    return () => window.removeEventListener("mousemove", handler)
  }, [])

  return (
    <main className="flex-grow pt-40 pb-20 px-margin-lg max-w-7xl mx-auto w-full relative">
      {/* 固定背景 */}
      <div className="fixed inset-0 z-[-2] bg-[radial-gradient(#2d382a_2px,transparent_2px)] [background-size:24px_24px] opacity-40" />
      <div ref={glowRef} className="fixed inset-0 z-[-1] transition-all duration-300" />

      {/* 装饰元素 */}
      <div className="fixed top-20 right-[10%] text-secondary-fixed-dim opacity-20 text-4xl select-none animate-pulse pointer-events-none">✦</div>
      <div className="fixed bottom-40 left-[5%] text-primary opacity-10 text-6xl select-none rotate-12 pointer-events-none">◈</div>
      <div className="fixed top-1/2 left-[2%] text-on-tertiary-container opacity-20 text-5xl select-none -rotate-45 pointer-events-none">▲</div>

      {/* 页头 */}
      <header className="mb-20 text-center relative">
        <div className="inline-block">
          <h1 className="font-display-lg text-display-lg gradient-text-animate mb-2 tracking-tighter">联系我</h1>
          <div className="h-1 w-full bg-primary-container shadow-[0_0_15px_#00FF41]" />
        </div>
        <p className="font-label-mono text-label-mono text-secondary-fixed-dim mt-4 tracking-[0.5em] uppercase">
          状态：准备传输中 // 系统在线
        </p>
      </header>

      {/* 联系卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-margin-md">
        {/* GitHub 卡片 */}
        <div className="group relative bg-surface-container-highest/90 border-8 border-secondary-container rounded-3xl p-8 shadow-[4px_4px_0px_#7B2FFF,8px_8px_0px_#FF3AF2] hover:-translate-y-2 hover:shadow-[10px_10px_0px_#7B2FFF,15px_15px_0px_#FF3AF2] transition-all duration-200">
          <div className="scanline absolute inset-0 rounded-3xl pointer-events-none opacity-20" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="bg-primary-container p-4 rounded-xl animate-wiggle inline-block">
                <span className="material-symbols-outlined text-background text-5xl" style={{fontVariationSettings:"'FILL' 1"}}>code</span>
              </div>
              <div className="font-label-mono text-primary text-xs opacity-50 border border-primary/30 px-2 py-1">协议：安全外壳</div>
            </div>
            <h3 className="font-headline-xl text-headline-xl text-primary mb-2">GITHUB</h3>
            <p className="font-body-lg text-on-surface-variant mb-8 max-w-xs">探索我的代码仓库、开源贡献与终端项目。</p>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-between bg-primary-container text-background py-4 px-6 rounded-lg font-callout text-callout border-4 border-[#FFFF00] hover:scale-105 active:scale-95 transition-all cursor-crosshair">
              <span>查看仓库</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* 微信卡片 */}
        <div className="group relative bg-surface-container-highest/90 border-8 border-dashed border-tertiary-fixed-dim rounded-3xl p-8 shadow-[4px_4px_0px_#7B2FFF,8px_8px_0px_#FF3AF2] hover:-translate-y-2 hover:shadow-[10px_10px_0px_#7B2FFF,15px_15px_0px_#FF3AF2] transition-all duration-200">
          <div className="scanline absolute inset-0 rounded-3xl pointer-events-none opacity-20" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="bg-secondary-fixed p-4 rounded-xl animate-pulse-glow inline-block">
                <span className="material-symbols-outlined text-background text-5xl" style={{fontVariationSettings:"'FILL' 1"}}>chat_bubble</span>
              </div>
              <div className="font-label-mono text-secondary-fixed-dim text-xs opacity-50 border border-secondary-fixed-dim/30 px-2 py-1">ID: MATRIX_VX_09</div>
            </div>
            <h3 className="font-headline-xl text-headline-xl text-secondary-fixed mb-2">微信</h3>
            {/* 二维码占位 */}
            <div className="my-6 relative w-40 h-40 self-center md:self-start border-2 border-secondary-fixed-dim/50 p-1">
              <div className="bg-background w-full h-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(38,254,220,0.1)_5px,rgba(38,254,220,0.1)_10px)]" />
                <span className="font-label-mono text-secondary-fixed text-[10px] tracking-widest relative z-10 text-center">[ 二维码 ]</span>
              </div>
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white" />
            </div>
            <p className="font-body-md text-on-surface-variant">扫码即可联系我。</p>
          </div>
        </div>
      </div>

      {/* 联系表单 */}
      <section className="mt-24 border-2 border-dashed border-outline-variant p-8 relative">
        <div className="absolute -top-4 left-10 bg-background px-4 font-label-mono text-secondary-fixed">加密表单_V3.0</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <input
              type="email"
              placeholder="请输入您的邮箱地址"
              className="w-full bg-black border-b-2 border-primary-fixed-dim text-primary p-4 font-body-md focus:outline-none focus:border-tertiary-fixed-dim focus:ring-1 focus:ring-tertiary-fixed-dim transition-all mb-4"
            />
            <textarea
              placeholder="请输入消息内容..."
              rows={3}
              className="w-full bg-black border-b-2 border-primary-fixed-dim text-primary p-4 font-body-md focus:outline-none focus:border-tertiary-fixed-dim focus:ring-1 focus:ring-tertiary-fixed-dim transition-all"
            />
          </div>
          <div className="flex items-center">
            <button className="w-full h-full border-2 border-dashed border-tertiary-fixed-dim text-tertiary-fixed-dim font-callout hover:bg-tertiary-fixed-dim hover:text-black transition-all active:scale-95 flex flex-col items-center justify-center p-6 cursor-crosshair">
              <span className="text-xs font-label-mono mb-2">跳过等待队列</span>
              <span className="text-2xl">发送消息</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact

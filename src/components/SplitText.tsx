import React, { useRef, useEffect, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

/** 将字符串拆成单元数组（字符 / 词 / 行） */
const splitIntoUnits = (text: string, type: SplitTextProps["splitType"]) => {
  if (type === "words") return text.split(/\s+/).filter(Boolean);
  if (type === "lines") return text.split("\n").filter(Boolean);
  return Array.from(text); // chars（默认）
};

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  tag = "p",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  /* 等字体就绪再动画，避免布局跳动 */
  useEffect(() => {
    if (document.fonts.status === "loaded") {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  /* 将文本拆成 span 单元 */
  const units = useMemo(() => splitIntoUnits(text, splitType), [text, splitType]);

  /* ScrollTrigger 动画 */
  useGSAP(
    () => {
      if (!containerRef.current || !fontsLoaded) return;
      const targets = containerRef.current.querySelectorAll<HTMLElement>(".split-unit");
      if (!targets.length) return;

      /* 将 rootMargin 换算为 ScrollTrigger start 位置 */
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
      const startPct = (1 - threshold) * 100;
      const sign =
        marginValue === 0
          ? ""
          : marginValue < 0
          ? `-=${Math.abs(marginValue)}${marginUnit}`
          : `+=${marginValue}${marginUnit}`;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top ${startPct}%${sign}`,
            once: true,
          },
          onComplete: () => onLetterAnimationComplete?.(),
          force3D: true,
        }
      );
    },
    {
      dependencies: [text, delay, duration, ease, splitType, JSON.stringify(from), JSON.stringify(to), threshold, rootMargin, fontsLoaded],
      scope: containerRef,
    }
  );

  const Tag = (tag || "p") as "p";
  const isWord = splitType === "words";
  const isLine = splitType === "lines";

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLParagraphElement>}
      className={`split-parent ${className}`}
      style={{ textAlign, overflow: "hidden", display: "inline-block", wordBreak: "break-word" }}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          className="split-unit"
          style={{
            display: "inline-block",
            willChange: "transform, opacity",
            /* 词/行之间保留空格 */
            marginRight: isWord && i < units.length - 1 ? "0.25em" : undefined,
            width: isLine ? "100%" : undefined,
          }}
        >
          {unit === " " ? "\u00A0" : unit}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;

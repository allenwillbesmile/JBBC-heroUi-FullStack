// Content1.tsx
"use client";

import { useState, useEffect } from "react";
import { Image } from "@heroui/image";
import { Card } from "@heroui/card";

const Content1: React.FC = () => {
  const [phase, setPhase] = useState(0); // 建议从 0 开始

  const content1 = [
    {
      src: '/home/imagePersona.png',
      text: 'ロキ\n20歳\n建設業\n技能実習生\n横浜',
      color: '#fff',
    },
    {
      src: '/home/imagePersonb.png',
      text: 'ロキ\n20歳\n建設業\n技能実習生\n横浜',
            color: '#fff',

    },
    {
      src: '/home/imagePersonc.png',
      text: 'ロキ\n20歳\n建設业\n技能实习生\n横滨',
           color: '#fff',

    },
    {
      src: '/home/imagePersond.png',
      text: 'ロキ\n20歳\n建设业\n技能实习生\n横滨',
           color: '#fff',

    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3); // 0, 1, 2 循环
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // 统一的高度（与卡片一致）
  const cardHeight = '450px';

  return (
    <div className="container mx-auto ">
      {/* 所有 phase 使用相同高度的容器，防止跳动 */}
      <div style={{ height: cardHeight }} className="relative">
        
        {/* Phase 0: 4 Cards */}
        {phase === 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 h-full">
            {content1.map((item, index) => (
              <Card
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg h-full"
                style={{ height: '100%' }}
              >
                <Image
                  src={item.src}
                  alt={`Person ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* 文字覆盖 */}
                <div
                  className="absolute bottom-5 right-3 z-50 text-right text-sm leading-6 whitespace-pre-line font-medium"
                  style={{ color: item.color }}
                >
                  {item.text.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Phase 1: Wide Image */}
        {phase === 1 && (
          <div className="absolute inset-0 opacity-0 animate-fadeInOut h-full">
            <Image
              src="/home/indimage.png"
              alt="Wide Image 1"
              className="w-full h-full object-cover rounded-lg"
              style={{ maxHeight: cardHeight, width: '100%' }}
            />
          </div>
        )}

        {/* Phase 2: Second Wide Image */}
        {phase === 2 && (
          <div className="absolute inset-0 opacity-0 animate-fadeInOut h-full">
            <Image
              src="/home/indimage2.png"
              alt="Wide Image 2"
              className="w-full h-full object-cover rounded-lg"
              style={{ maxHeight: cardHeight, width: '100%' }}
            />
          </div>
        )}
      </div>

      {/* 动画样式 */}
      <style jsx>{`
        .animate-fadeInOut {
          animation: fadeInOut 3s ease-in-out forwards;
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Content1;
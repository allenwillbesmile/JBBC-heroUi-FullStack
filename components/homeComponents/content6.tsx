// Content6.tsx
"use client";

import { Typography, Row, Col } from "antd";
import React from "react";

const Content6: React.FC = () => {
  
  return (
    <div className="mb-8 md:mb-12 lg:mb-16 px-4 py-5 md:px-6 md:py-8 box-border">
      {/* 标题区域 */}
      <div className="relative text-center mb-6 md:mb-8">
        <h1 className="text-[clamp(2rem,8vw,6rem)] font-bold text-white font-['Roboto'] leading-[1.2] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] m-0">
          Support
        </h1>
      </div>

      {/* 图片区 */}
      <Row gutter={[16, 16]} justify="center" className="w-full">
        <Col xs={24} sm={12} md={12} lg={12} xl={12} className="w-full">
          <div className="relative overflow-hidden w-full">
            <img
              src="/home/content6Img1.png"
              alt="Team 1"
              className="w-full h-auto block rounded-2xl"
            />
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12} className="w-full">
          <div className="relative overflow-hidden w-full">
            <img
              src="/home/content6Img2.png"
              alt="Team 2"
              className="w-full h-auto block rounded-tl-none rounded-tr-none rounded-br-[60px] rounded-bl-2xl"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Content6;
// Content7.tsx
"use client";

import { Typography, List, Button, Image } from "antd";
import React, { useState } from "react";

const Content7: React.FC = () => {
  const { Text, Title } = Typography;

  const [reasons] = useState([
    {
      number: 1,
      title: '最適人材を紹介',
      description: '強固な外国人求職者ネットワーク&求人媒体を駆使した採用で円滑なご紹介が可能',
    },
    {
      number: 2,
      title: 'フォローアップ',
      description: '住居のフォローなど直接雇用でありながら、採用から雇用後も一貫してフォローアップが可能です報告書のレポート作成もお任せください',
    },
    {
      number: 3,
      title: '外国からの特定技能',
      description: '若くて優秀なベトナム籍の大学生を最長1年採用し、期間中に特定技能試験を勉強',
    },
    {
      number: 4,
      title: '留学生からの特定技能',
      description: '留学生の期間はお試しとして派遣で活用しつつ、その期間で見極めを行うことが可能',
    },
    {
      number: 5,
      title: '当社の人材は「質」が違う！',
      description: '海外からの紹介人材なら「完全オーダーメイド」の事前教育プログラムを提供。専門用語などを事前に覚えてから入国するため、現場での即活躍が期待できます。',
    },
  ]);

  return (
    <div className="max-w-7xl w-full mx-auto px-4 py-8 md:py-12 lg:py-16">
      {/* 主标题区域 */}
      <div className="text-center mb-8 md:mb-10">
        <Title level={3} className="!mb-2 md:!mb-4 !text-2xl md:!text-3xl">
          それが当社の
        </Title>
        <h2 className="text-[#1AA4DD] font-serif font-bold !text-4xl md:!text-6xl lg:!text-7xl mb-4 md:mb-6 leading-none">
          「特定技能&amp;外国人材」
        </h2>
        <Text className="block !text-xl md:!text-2xl lg:!text-3xl">
          当社の特定技能が選ばれる5つの理由とは・・・?
        </Text>
      </div>

      {/* 理由列表 */}
      <List
        className="mb-10 md:mb-14"
        itemLayout="horizontal"
        dataSource={reasons}
        split={false}
        renderItem={(item, index) => (
          <List.Item className="!px-0 !py-6 md:!py-7">
            <List.Item.Meta
              avatar={<div className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#4da2d7] text-white text-xl md:text-2xl font-bold mb-4 md:mb-0 md:mr-6">
                {item.number}
              </div>}
              title={<div className="!text-xl md:!text-2xl font-bold mb-2 text-gray-800">{item.title}</div>
              }

              description={<div className="text-left">
                <p className="!text-base md:!text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>}

            />
            
          </List.Item>
        )}
      />

      {/* 按钮 */}
      <div className="text-center mb-10 md:mb-14">
        <Button
          type="primary"
          shape="round"
          size="large"
          className="bg-[#EE6629] hover:bg-[#d95a20] border-none !px-6 !py-2 md:!px-8 md:!py-3 !text-base md:!text-lg"
        >
          営業担当に聞いてみる
        </Button>
      </div>

      {/* 人物图片 - 改为相对定位并居中 */}
      <div className="flex justify-center">
        <Image
          src="/home/personImage.png"
          alt="Person"
          preview={false}
          className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Content7;




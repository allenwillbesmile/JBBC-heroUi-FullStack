'use client';

import { useState } from 'react';
// import './globals.css'; // 确保已引入 Tailwind
import {Divider} from "@heroui/divider";
export default function Seminar() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    address: '',
    email: '',
    agree: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, agree: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('フォーム送信成功！');
  };

  const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center">
      {children}
      <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">必須</span>
    </div>
  );

  const content = (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src="/seminar/seminarCarousel.png"
        alt="セミナー画像"
        className="w-full h-auto"
      />
      {/* <div className="absolute top-1 right-2 text-right ">
        <h5 className="text-lg font-medium mb-2 w-48">
          バングラデシュIT人材採用支援セミナー
        </h5>
        <img
          src="/seminar/seminarIcon.png"
          alt="アイコン"
          className="w-24 mb-1"
        />
        <h5 className="text-lg">令和7年4月17日(木)</h5>
      </div> */}
      <div className="absolute top-1 right-2 text-right">
        <h5 className="text-base md:text-lg font-medium mb-2 w-full md:w-48">
          バングラデシュIT人材採用支援セミナー
        </h5>
        <img
          src="/seminar/seminarIcon.png"
          alt="アイコン"
          className="w-16 md:w-24 mb-1 ml-auto"
        />
        <h5 className="text-base md:text-lg">令和7年4月17日(木)</h5>
      </div>
      <div className="p-4">
        <h4 className="text-xl font-bold mt-4 mb-2 w-full">
          バングラデシュIT人材 × 日本企業：DX時代のグローバル戦略セミナー
        </h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          本セミナーは、外国人ITエンジニアの活用やオフショア開発の推進、そしてDX・AI・クラウド技術の導入を検討している企業様を対象に、バングラデシュ人材の活用可能性について具体的な情報と成功事例をご紹介する場です。
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen  ">
      {/* 标题 */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-left leading-tight">
        バングラデシュ人材セミナー（東京開催）– ノー
        <br />
        ベル平和賞受賞者 ムハマド・ユヌス教授を特別講演者に迎えて
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧内容：教授介绍 + 概要 + 登壇者 */}
        <div className="lg:col-span-2 space-y-10">
          {/* 教授介绍 */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src="/seminar/preson.png"
              alt="Professor Yunus"
              className="w-full md:w-64 h-auto rounded-lg shadow-md"
            />
            <div className="flex-1 space-y-2">
              <h4 className="text-xl font-bold">ムハマド・ユヌス教授閣下</h4>
              <p className="text-gray-700">バングラデシュ人民共和国政府 チーフアドバイザー</p>
              <p className="text-gray-700">2006年 ノーベル平和賞受賞者</p>
              <button className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
                サービス一覧をみる →
              </button>
            </div>
          </div>

          {/* 概要 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">概要</h3>
            <Divider size="large" className='divider' />
            {/* <div className="w-20 h-1 bg-black mb-6"></div> */}
            <p className="text-gray-800 leading-relaxed">
              2025年5月29日（金）、バングラデシュ人民共和国大使館主催による「バングラデシュ人材セミナー」が、**全国都市会館（東京都千代田区平河町）**にて開催されます。
              本セミナーでは、2006年ノーベル平和賞受賞者 ムハマド・ユヌス教授を特別講演者としてお迎えし、日本とバングラデシュの間における人材分野での協力強化について講演をいただきます。
              セミナーでは、バングラデシュの若くて優秀な労働力の可能性、日本における人材不足への対応、三国間労働協力の展望など、戦略的な視点から議論が行われます。政府関係者、企業担当者、人材関連の専門家の皆様のご参加をお待ちしております。
            </p>
          </div>

          {/* 登壇者 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">登壇者</h3>
            <Divider size="large" className='divider' />
            {/* <div className="w-20 h-1 bg-black mb-6"></div> */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <img
                src="/seminar/professor-yunus.png"
                alt="ムハマド・ユヌス教授"
                className="w-32 h-40 rounded-lg shadow-md"
              />
              <div className="flex-1 space-y-1">
                <p className="font-bold">ムハマド・ユヌス教授閣下</p>
                <p>バングラデシュ 暫定政権首席顧問</p>
                <p>2006年 ノーベル平和賞受賞者</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  1940年バングラデシュ・チッタゴン生まれ。ダッカ大学で経済学修士号を取得後、フルブライト奨学金で渡米し、1969年にヴァンダービルト大学にて経済学博士号を取得。帰国後はチッタゴン大学経済学部長を務め、1974年の大飢饉を機に貧困撲滅に取り組む。
                  1983年にグラミン銀行を創設し、マイクロクレジットによる経済的自立支援を実践。
                  この取り組みは国際的評価を受け、2006年にノーベル平和賞を受賞。2024年8月より暫定政権の首席顧問として国家再建に尽力している。
                </p>
              </div>
            </div>
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
              サービス一覧をみる →
            </button>
          </div>
        </div>

        {/* 右侧表单 */}
        <div className="bg-blue-50 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">お申し込みフォーム</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 姓名 */}
            <div>
              <label className="block mb-2">
                <RequiredLabel>お名前（漢字）</RequiredLabel>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="山田 太郎"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* 公司名 */}
            <div>
              <label className="block mb-2">
                <RequiredLabel>会社名</RequiredLabel>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="キャリアリンクファクトリー株式会社"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* 电话 */}
            <div>
              <label className="block mb-2">
                <RequiredLabel>電話番号</RequiredLabel>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="09012345678"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* 地址 */}
            <div>
              <label className="block mb-2">
                <RequiredLabel>住所（都道府県）</RequiredLabel>
              </label>
              <select
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                <option value="">—以下から選択してください—</option>
                <option value="tokyo">東京都</option>
                <option value="osaka">大阪府</option>
                <option value="kyoto">京都府</option>
                <option value="hokkaido">北海道</option>
              </select>
            </div>

            {/* 邮箱 */}
            <div>
              <label className="block mb-2">
                <RequiredLabel>メールアドレス</RequiredLabel>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="info@jbcc.co.jp"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* 同意条款 */}
            <div className="text-left">
              <p className="text-sm">
                個人情報の取り扱いについては
                <a href="#" className="text-blue-600 underline">こちら</a>
                をご覧ください
              </p>
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <span>個人情報の取り扱いについて同意する</span>
              </label>
            </div>

            {/* 提交按钮 */}
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition"
            >
              送信する →
            </button>
          </form>
        </div>
      </div>

      {/* アーカイブ */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">アーカイブ</h2>
        <p className="text-lg mb-8">過去のオンラインセミナーの様子を配信しています。</p>

        {/* 轮播容器（简化版，无JS轮播） */}
        <div className="relative bg-blue-50 p-6 rounded-xl mb-8">
          <div className="flex justify-end mb-4 space-x-2">
            <button className="w-10 h-10 bg-white text-black font-bold rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
              ←
            </button>
            <button className="w-10 h-10 bg-white text-black font-bold rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
              →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <div key={index}>{content}</div>
            ))}
          </div>
        </div>

        <button className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
          サービス一覧をみる →
        </button>
      </div>
    </div>
  );
}
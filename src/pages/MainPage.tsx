import React from 'react';
import donggukLogo from '../assets/dongguklogo.png'; // 로고 이미지 import

// TODO: Figma 정보를 바탕으로 인터페이스 및 컴포넌트 세부 구현 필요

const MainPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section - Figma ID: 86:29 (Group 420) */}
      <header className="py-2.5 px-5 bg-white flex justify-between items-center border-b border-gray-300">
        <div className="flex items-center">
          {/* 로고 이미지 - Figma ID: 74:22 (dongguklogo 1) */}
          <img src={donggukLogo} alt="서비스 로고" className="h-10 mr-2.5" />
          <span className="text-lg font-bold text-[#948a85]">서비스 이름</span>
        </div>
        <nav className="flex items-center">
          {/* 네비게이션 링크 - Figma ID: 74:14 (Group 407) */}
          <a href="#login" className="mr-4 text-[#e06f1d] no-underline border border-[#e06f1d] py-1 px-2.5 rounded">Login</a>
          <a href="#home" className="mr-4 text-gray-700 no-underline">Home</a>
          <span className="mr-4 text-gray-400">|</span>
          <a href="#dgu" className="mr-4 text-gray-700 no-underline">DGU</a>
          <div className="flex items-center border border-gray-400 rounded p-1">
            <input type="text" placeholder="사이트내 검색" className="border-none focus:outline-none mr-1" />
            {/* 검색 아이콘 - Figma ID: 3:58 (image 5) - 실제 아이콘으로 대체 필요 */}
            <span>🔍</span>
          </div>
        </nav>
      </header>

      {/* Main Navigation Bar - Figma ID: 87:48 (Group 423) */}
      <nav className="bg-[#f8901f] py-4 flex justify-center items-center">
        <div className="flex justify-around w-3/5 text-white font-bold">
          {/* 메뉴 아이템들 - Figma IDs: 3:63 to 3:67 */}
          <span className="cursor-pointer hover:text-gray-200">공지사항</span>
          <span className="cursor-pointer hover:text-gray-200">강의실</span>
          <span className="cursor-pointer hover:text-gray-200">열람실</span>
          <span className="cursor-pointer hover:text-gray-200">커뮤니티</span>
          <span className="cursor-pointer hover:text-gray-200">마이 페이지</span>
        </div>
        {/* 검색 버튼 - Figma ID: 3:60 (Group 1) */}
        <button className="bg-[#fa9d1c] text-white border-none p-2.5 ml-5 cursor-pointer rounded">
          {/* 검색 아이콘 - Figma ID: 3:62 (image 6) */}
           <span>🔍</span>
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="p-5 max-w-6xl mx-auto">
        {/* 공지사항 섹션 - Figma ID: 3:70 (Text), 87:82 (Group 432) */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-[#928b85] tracking-[4px]">공지 사항</h2>
            {/* 플러스 버튼 - Figma ID: 84:14 (Group 417) */}
            <button className="border border-[#938a85] bg-gray-50 text-[#938a84] py-1 px-2.5 text-xl cursor-pointer">+</button>
          </div>
          <div className="bg-[#fff5db] p-5 rounded-lg">
            {/* 공지사항 목록 - Figma Lines: 3:71 to 3:74 */}
            <p>공지사항 내용이 여기에 표시됩니다...</p>
            {/* 예시: */}
            <div className="border-b border-[#948a85] pb-2.5 mb-2.5">공지 1</div>
            <div className="border-b border-[#948a85] pb-2.5 mb-2.5">공지 2</div>
            <div>공지 3</div>
          </div>
        </section>

        {/* 현황 조회 섹션 - Figma IDs: 87:46, 87:47 */}
        <section className="flex justify-between mb-8">
          {/* 강의실 현황 - Figma ID: 87:46 (Group 421) */}
          <div className="bg-[#fff5db] p-5 rounded-[25px] w-[48%] text-center">
            {/* 이미지 - Figma ID: 74:18 (image) - 실제 이미지 경로로 대체 필요 */}
            <img src="/path-to-lecture-room-icon.png" alt="강의실 아이콘" className="w-20 h-20 mb-4 mx-auto" />
            <h3 className="text-[#948b86] text-xl">강의실 현황 조회</h3>
          </div>
          {/* 열람실 현황 - Figma ID: 87:33 (Rect), 87:34 (Text), 86:31 (image) */}
          <div className="bg-[#fff5db] p-5 rounded-[25px] w-[48%] text-center">
            {/* 이미지 - Figma ID: 86:31 (image 7) - 실제 이미지 경로로 대체 필요 */}
            <img src="/path-to-reading-room-icon.png" alt="열람실 아이콘" className="w-20 h-20 mb-4 mx-auto" />
            <h3 className="text-[#948b86] text-xl">열람실 현황 조회</h3>
          </div>
        </section>

        {/* 열람실 별 커뮤니티 섹션 - Figma ID: 87:49 (Text), 87:51 (Rect), 87:79 (Group) */}
        <section className="mb-8">
          <h2 className="text-2xl text-[#928b85] tracking-[4px] mb-4">열람실 별 커뮤니티</h2>
          <div className="bg-[#fff5db] p-5 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* 커뮤니티 버튼들 - Figma Group 87:79 */}
              {['보덕 열람실', 'IC Zone', '제2 열람실', 'IF Zone', '제3 열람실', 'IM Zone', '세스코 열람실'].map(name => (
                <button key={name} className="bg-[#f8901f] text-white border-none rounded-md py-2.5 px-5 m-1 text-base font-bold cursor-pointer">
                  {name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Q&A 섹션 - Figma ID: 87:80 (Text), 87:83 (Group) */}
        <section>
          <h2 className="text-2xl text-[#928b85] tracking-[4px] mb-4">Q&A</h2>
          <div className="bg-[#fff5db] p-5 rounded-lg">
            <h3 className="text-[#948b86] text-xl mb-2.5">자주 하는 질문</h3>
            {/* Q&A 목록 - Figma Lines: 87:86 to 87:88 */}
            <p>Q&A 내용이 여기에 표시됩니다...</p>
            {/* 예시: */}
            <div className="border-b border-[#948a85] pb-2.5 mb-2.5">질문 1</div>
            <div className="border-b border-[#948a85] pb-2.5 mb-2.5">질문 2</div>
            <div>질문 3</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;

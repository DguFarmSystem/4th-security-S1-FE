import React, { useState } from 'react';
import Switch from '../components/Switch';
import donggukLogo from '../assets/dongguklogo.png'; // 로고 이미지 import
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  // Input field states
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleAdminToggle = () => setIsAdmin(!isAdmin);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login submitted', { email, studentId, password, isAdmin });
    navigate('/main');
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    console.log('Register submitted', { email, studentId, password, isAdmin });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md">
        {isLoginView ? (
          <form onSubmit={handleLoginSubmit}>
            {/* 로고 추가 */}
            <div className="flex justify-center mb-6">
              <img src={donggukLogo} alt="Dongguk Logo" className="h-20" />
            </div>
            <div className="mb-4 flex justify-end items-center">
              <label htmlFor="isAdminToggleLogin" className="mr-2 text-gray-600">관리자</label>
              <Switch 
                id="isAdminToggleLogin"
                isOn={isAdmin}
                handleToggle={handleAdminToggle}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="loginEmail" className="block mb-1 text-gray-600">이메일</label>
              <input
                type="text"
                id="loginEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
                required
                className="w-3/4 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none" />
              <span 
                className="text-gray-500 text-sm border border-gray-300 rounded-md p-2 bg-gray-100 w-3/4 "
              >
                @dgu.ac.kr
              </span>
            </div>

            <div className="mb-4">
              <label htmlFor="loginStudentId" className="block mb-1 text-gray-600">학번</label>
              <input
                type="text"
                id="loginStudentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="학번"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none" />
            </div>
            
            <div className="mb-6">
              <label htmlFor="loginPassword" className="block mb-1 text-gray-600">비밀번호</label>
              <input
                type="password"
                id="loginPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none" />
            </div>

            <button 
              onClick={handleLoginSubmit}
              type="submit" 
              className="w-full py-3 bg-[#f8901f] text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors duration-200">
              로그인
            </button>

            <div className="mt-6 text-center text-sm">
              <span 
                onClick={() => setIsLoginView(false)} 
                className="text-gray-600 hover:text-[#f8901f] cursor-pointer transition-colors duration-150 mr-2">
                회원가입
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 hover:text-[#f8901f] cursor-pointer transition-colors duration-150 mx-2">
                아이디 찾기
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 hover:text-[#f8901f] cursor-pointer transition-colors duration-150 ml-2">
                비밀번호 찾기
              </span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit}>
            {/* 회원가입 폼에도 로고 추가 */}
            <div className="flex justify-center mb-6">
              <img src={donggukLogo} alt="Dongguk Logo" className="h-20" />
            </div>
            <div className="mb-4 flex justify-end items-center">
              <label htmlFor="isAdminToggleRegister" className="mr-2 text-gray-600">관리자</label>
              <Switch 
                id="isAdminToggleRegister"
                isOn={isAdmin}
                handleToggle={handleAdminToggle}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="registerEmail" className="block mb-1 text-gray-600">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="registerEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="학교 이메일을 입력해주세요"
                required
                className="w-3/4 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none" />
              <span 
                className="text-gray-500 text-sm border border-gray-300 rounded-md p-2 bg-gray-100 w-3/4 "
              >
                @dgu.ac.kr
              </span>
            </div>

            <div className="mb-4">
              <label htmlFor="registerStudentId" className="block mb-1 text-gray-600">
                학번 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="registerStudentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="학번을 입력해주세요"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none" />
            </div>

            <div className="mb-4">
              <label htmlFor="registerPassword" className="block mb-1 text-gray-600">
                비밀번호 <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="registerPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none" />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block mb-1 text-gray-600">
                비밀번호 재입력 <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="비밀번호를 한번 더 입력해주세요"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none" />
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 bg-[#f8901f] text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors duration-200">
              가입하기
            </button>

            <div className="mt-6 text-center text-sm">
              <span onClick={() => setIsLoginView(true)} className="text-gray-600 hover:text-[#f8901f] cursor-pointer transition-colors duration-150">
                로그인으로 돌아가기
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
 
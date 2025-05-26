import React, { useState } from 'react';
import Switch from '../components/Switch';
import donggukLogo from '../assets/dongguklogo.png'; // 로고 이미지 import
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // 알림을 위한 라이브러리
import 'react-toastify/dist/ReactToastify.css';

// 이메일 유효성 검사를 위한 정규식
const EMAIL_REGEX = /^[a-z0-9._%+-]+$/;

const AuthPage: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  // Input field states
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [studentIdError, setStudentIdError] = useState('');
  const navigate = useNavigate();

  const handleAdminToggle = () => setIsAdmin(!isAdmin);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !EMAIL_REGEX.test(value)) {
      setEmailError('올바른 이메일 형식이 아닙니다. 알파벳 소문자와 숫자만 입력 가능합니다.');
    } else {
      setEmailError('');
    }
  };

  const handleStudentIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStudentId(value);
    if (value && !/^\d{10}$/.test(value.trim())) {
      setStudentIdError('올바른 학번을 입력해주세요. 숫자 10자리를 입력해야 합니다.');
    } else {
      setStudentIdError('');
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      toast.error('올바른 이메일 형식이 아닙니다. 알파벳 소문자와 숫자만 입력 가능합니다.');
      return;
    }
    if (!/^\d{10}$/.test(studentId.trim())) {
      toast.error('올바른 학번을 입력해주세요. 숫자 10자리를 입력해야 합니다.');
      return;
    }
    // TODO: Implement login logic
    console.log('Login submitted', { email, studentId, password, isAdmin });
    navigate('/main');
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email)) {
      toast.error('올바른 이메일 형식이 아닙니다. 알파벳 소문자와 숫자만 입력 가능합니다.');
      return;
    }

    if (!/^\d{10}$/.test(studentId.trim())) {
      toast.error('올바른 학번을 입력해주세요. 숫자 10자리를 입력해야 합니다.');
      return;
    }

    // TODO: Implement registration logic
    if (password !== confirmPassword) {
      toast.error('비밀번호가 일치하지 않습니다.');
      return;
    }
    
    toast.success('회원가입이 완료되었습니다. 로그인 해주세요.');
    setIsLoginView(true); // 로그인 화면으로 전환
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
              <div className="flex items-center">
                <input
                  type="text"
                  id="loginEmail"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="이메일"
                  required
                  className="w-3/4 p-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none" />
                <span className="p-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md">@dgu.ac.kr</span>
              </div>
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="loginStudentId" className="block mb-1 text-gray-600">학번</label>
              <input
                type="text"
                id="loginStudentId"
                value={studentId}
                onChange={handleStudentIdChange}
                placeholder="학번"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none" />
              {studentIdError && <p className="text-red-500 text-sm mt-1">{studentIdError}</p>}
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
              <div className="flex items-center">
                <input
                  type="text"
                  id="registerEmail"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="학교 이메일을 입력해주세요"
                  required
                  className="w-3/4 p-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none" />
                <span className="p-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md">@dgu.ac.kr</span>
              </div>
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="registerStudentId" className="block mb-1 text-gray-600">
                학번 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="registerStudentId"
                value={studentId}
                onChange={handleStudentIdChange}
                placeholder="학번을 입력해주세요"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none" />
              {studentIdError && <p className="text-red-500 text-sm mt-1">{studentIdError}</p>}
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
 

# Farm System

농장 관리 시스템 프로젝트입니다.

## 🚀 기술 스택

- Next.js
- TypeScript
- Tailwind CSS
- Zustand (상태 관리)
- ESLint
- Prettier

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

## 📝 커밋 메시지 규칙

커밋 메시지는 다음과 같은 형식을 따릅니다:

```
<type>: <subject>

<body>

<footer>
```

### Type 종류

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가/수정
- `chore`: 빌드 업무 수정, 패키지 매니저 수정

### 예시

```
feat: 사용자 인증 기능 추가

- 로그인 기능 구현
- 회원가입 기능 구현
- JWT 토큰 인증 구현

Resolves: #123
```

## 🎨 코드 스타일

- ESLint와 Prettier를 사용하여 코드 스타일을 일관되게 유지합니다.
- TypeScript의 strict 모드를 사용합니다.
- 컴포넌트는 함수형 컴포넌트를 사용합니다.
- Tailwind CSS를 사용하여 스타일링합니다.

## 📦 상태 관리

- Zustand를 사용하여 전역 상태를 관리합니다.
- 스토어는 `src/store` 디렉토리에 위치합니다.
- 각 기능별로 독립적인 스토어를 생성합니다.

## 📁 프로젝트 구조

```
src/
├── app/          # Next.js 13+ App Router
├── components/   # 재사용 가능한 컴포넌트
├── store/        # Zustand 스토어
├── styles/       # 전역 스타일
└── types/        # TypeScript 타입 정의
```

## 🤝 기여하기

1. 이슈를 생성하거나 기존 이슈를 확인합니다.
2. 새로운 브랜치를 생성합니다 (`feature/기능명` 또는 `fix/버그명`).
3. 변경사항을 커밋합니다.
4. PR을 생성합니다.

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

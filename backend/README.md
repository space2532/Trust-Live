# Backend API

NestJS + TypeORM + PostgreSQL로 구성된 백엔드 API 서버입니다.

## 기술 스택

- **NestJS 11.0.1** - Node.js 프레임워크
- **TypeORM 0.3.27** - ORM (Object-Relational Mapping)
- **Supabase** - 백엔드 서비스 (PostgreSQL + 인증 + 실시간 기능)
- **TypeScript** - 프로그래밍 언어

## 시작하기

### 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Application Configuration
PORT=3001
NODE_ENV=development

# JWT Configuration (optional for future use)
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=7d
```

### Supabase 설정

1. [Supabase](https://supabase.com)에서 새 프로젝트를 생성합니다.
2. 프로젝트 설정에서 API 키와 URL을 확인합니다.
3. `.env` 파일에 Supabase 설정을 추가합니다.

#### 필요한 테이블 생성

Supabase 대시보드의 SQL Editor에서 다음 쿼리를 실행하세요:

```sql
-- Users 테이블 생성
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) 활성화
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- 정책 생성 (필요에 따라 수정)
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid()::text = id::text);
```

### 개발 서버 실행

```bash
# 개발 모드로 실행 (파일 변경 시 자동 재시작)
npm run start:dev

# 일반 실행
npm run start

# 디버그 모드로 실행
npm run start:debug
```

서버가 `http://localhost:3001`에서 실행됩니다.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 모드로 실행
npm run start:prod
```

### 테스트

```bash
# 단위 테스트
npm run test

# 테스트 (watch 모드)
npm run test:watch

# 커버리지 포함 테스트
npm run test:cov

# E2E 테스트
npm run test:e2e
```

## API 엔드포인트

### Users

- `GET /users` - 모든 사용자 조회
- `GET /users/:id` - 특정 사용자 조회
- `POST /users` - 새 사용자 생성
- `PATCH /users/:id` - 사용자 정보 수정
- `DELETE /users/:id` - 사용자 삭제

### 요청 예시

#### 사용자 생성
```bash
curl -X POST http://localhost:3001/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "name": "John Doe"
  }'
```

#### 인증 (Supabase Auth 사용)
```bash
# 회원가입
curl -X POST http://localhost:3001/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'

# 로그인
curl -X POST http://localhost:3001/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

## 프로젝트 구조

```
backend/
├── src/
│   ├── users/
│   │   ├── dto/
│   │   │   ├── create-user.dto.ts
│   │   │   └── update-user.dto.ts
│   │   ├── entities/
│   │   │   └── user.entity.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   └── users.module.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── package.json
└── README.md
```

## 개발 가이드

1. 새로운 모듈 생성: `npx nest generate module [name]`
2. 새로운 서비스 생성: `npx nest generate service [name]`
3. 새로운 컨트롤러 생성: `npx nest generate controller [name]`
4. 엔티티는 `entities/` 폴더에 생성
5. DTO는 `dto/` 폴더에 생성

## 주요 기능

- ✅ Supabase 통합 (PostgreSQL + 인증 + 실시간)
- ✅ 사용자 인증 (회원가입, 로그인, 로그아웃)
- ✅ 환경 변수 설정
- ✅ CORS 설정 (프론트엔드 연동)
- ✅ RESTful API 구조
- ✅ Row Level Security (RLS) 지원
- ✅ 실시간 데이터 동기화 준비
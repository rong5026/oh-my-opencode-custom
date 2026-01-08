### ✅ 추가된 에이전트

1. codebase-analyzer (코드베이스 분석가)

- 모델: openai/gpt-5.2
- 역할: 구현된 코드를 읽고 기능 트리 추출 (코드 고고학)
- 온도: 0.2 (논리적 분석)
- 분석 대상:
  - Backend: API 엔드포인트, 서비스 로직, DB 스키마
  - Frontend: 컴포넌트, 페이지, API 호출 패턴
  - Integration: PG 연동, SMS/Email, 파일 스토리지

2. spec-writer (기획서 작성자)

- 모델: google/gemini-3-pro-preview
- 역할: 기능 트리를 비즈니스 언어로 기획서 변환
- 온도: 0.3 (창의적 문서화)
- 작성 원칙:
  - 기술 용어 제거 (JWT → "로그인 상태 유지")
  - 사용자 관점 (코드가 아닌 기능 중심)
  - 한국 이커머스 관례 준수

3. spec-refiner (기획서 정제자)

- 모델: anthropic/claude-sonnet-4-5
- 역할: 기획서 검증, 누락 확인, 품질 향상
- 온도: 0.1 (정밀 검토)
- 검증 항목:

  - 완전성 (빠진 기능 확인)
  - 일관성 (용어 통일, 모순 제거)
  - 명확성 (모호한 표현 구체화)

### 🚀 사용 방법
  방법 1: 직접 호출
  @codebase-analyzer 이 프로젝트를 분석해서 기능 목록 추출해줘
  @spec-writer 이 기능 분석을 기획서로 만들어줘
  @spec-refiner 이 기획서를 검토하고 개선해줘
  방법 2: Sisyphus 자동 조율
  이 프로젝트를 분석해서 기획서를 만들어줘
  → Sisyphus가 자동으로:

1. @codebase-analyzer (background) - 코드 분석
2. @spec-writer (background) - 기획서 작성
3. @spec-refiner (background) - 기획서 정제
4. 최종 기획서 출력 (Markdown)
   방법 3: 특정 디렉토리 분석
   ./backend 폴더를 분석해서 API 기획서 만들어줘
   ./frontend 폴더를 분석해서 화면 기획서 만들어줘

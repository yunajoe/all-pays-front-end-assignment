# 올페이즈 과제 전형

## 실행방법

1. 로컬에 git clone https://github.com/yunajoe/all-pays-front-end-assignment.git

2. 프로젝트 루트에 .env.local 파일를 만들어 아래 환경 변수를 추가한다.
   NEXT_PUBLIC_BASE_URL=https://recruit.paysbypays.com/api/v1

3. npm install 명령어로 프로젝트에 필요한 패키지들을 설치한다.

4. npm run dev 명령어로 어플리케이션을 실행한다.

## 사용 기술 스택 && 라이브러리

- Node 20.18.0
- Next.js 16
- React 19
- CSS 모듈
- npm (패키지 매니저)

| 라이브러리        | 버전     | 용도                    |
| ----------------- | -------- | ----------------------- |
| `chart.js`        | ^4.5.1   | 데이터 시각화 (차트)    |
| `react-chartjs-2` | ^5.3.1   | React에서 Chart.js 사용 |
| `lucide-react`    | ^0.554.0 | 아이콘 컴포넌트         |
| `luxon`           | ^3.7.2   | 날짜/시간 처리          |
| `zod`             | ^4.1.13  | 데이터 유효성 검사      |
| `zustand`         | ^5.0.8   | 전역 상태 관리          |

## 대시보드 페이지

- chart.js 를 이용하여 거래내역, 가맹점 정보를 시각화 하였다.

## 1. KPIS

- 결제 성공률, 결제 금액, 결제 실패율을 보여준다.
- 결제 성곡률은 pie chart를 사용하여 시각화를 한다.

## 2. 결제 수단 분석

- 결제 수단 별로 성공 건수, 실패 건수, 실패 금액, 성공 률을 보여준다.
- 결제 수단별 금액은 stack bar chart로, 결제 수단별 비율은 pie chart로 시각화를 한다.

## 3. TOP 5 가맹점 분석

- 총 결제 금액 내림차순으로 TOP5 를 보여준다.
- TOP5 가맹점별 결제금액으로 stack chart로 비교하여 보여준다.

## 거래내역 페이지

- 거래내역 리스트 구현
- 상세 필터로 결제 수단과 결제 상태의 상태를 따라 선택하여 데이터를 핉터링한다.

## 가맹점 페이지

### 1. 가맹점 리스트 페이지

- 페이지 네이션으로 가맹점 리스트 구현
- 매장명으로 가맹점 리스트 필터링 구현
- 상호명, 가게 상태, 가게 업종 으로 가맹점 리스트를 정렬할 수 있다.
- 상호명은 오름차순, 가게 상태는 active, ready, inactive, closed, 가게업종은 오름차순으로 정렬이 된다.

### 2. 가맹점 상세 페이지

- 가맹점 상세 정보를 보여준다.

## 파일구조

app
┣ api
┃ ┣ common
┃ ┃ ┗ index.ts
┃ ┣ merchants
┃ ┃ ┗ index.ts
┃ ┣ payments
┃ ┃ ┗ index.ts
┃ ┗ index.ts
┣ components
┃ ┣ dropdown
┃ ┃ ┣ dropdown.module.css
┃ ┃ ┗ index.tsx
┃ ┣ footer
┃ ┃ ┣ footer.module.css
┃ ┃ ┗ index.tsx
┃ ┣ header
┃ ┃ ┣ header.module.css
┃ ┃ ┗ index.tsx
┃ ┣ modal
┃ ┃ ┣ modal-background.module.css
┃ ┃ ┗ modal-background.tsx
┃ ┗ pagination
┃ ┃ ┣ index.tsx
┃ ┃ ┗ pagination.module.css
┣ dashboard
┃ ┣ components
┃ ┃ ┣ card
┃ ┃ ┃ ┣ kpi-card.tsx
┃ ┃ ┃ ┗ payment-method-card.tsx
┃ ┃ ┣ chart
┃ ┃ ┃ ┗ stack-bar-chart.tsx
┃ ┃ ┣ kpi
┃ ┃ ┃ ┣ kpi-container.module.css
┃ ┃ ┃ ┗ kpi-container.tsx
┃ ┃ ┣ merchant
┃ ┃ ┃ ┣ merchant-container.module.css
┃ ┃ ┃ ┗ merchant-container.tsx
┃ ┃ ┣ payment
┃ ┃ ┃ ┣ payment-method-container.module.css
┃ ┃ ┃ ┗ payment-method-container.tsx
┃ ┃ ┗ table
┃ ┃ ┃ ┣ payment-method-table.module.css
┃ ┃ ┃ ┣ payment-method-table.tsx
┃ ┃ ┃ ┣ top-rank-merchants-table.module.css
┃ ┃ ┃ ┗ top-rank-merchants-table.tsx
┃ ┣ utils
┃ ┃ ┣ const.ts
┃ ┃ ┗ index.ts
┃ ┣ dashboard.module.css
┃ ┗ page.tsx
┣ hooks
┃ ┗ use-debounce.tsx
┣ merchants
┃ ┣ [id]
┃ ┃ ┣ components
┃ ┃ ┃ ┣ merchant-item.module.css
┃ ┃ ┃ ┗ merchant-item.tsx
┃ ┃ ┗ page.tsx
┃ ┣ components
┃ ┃ ┣ merchant-list.module.css
┃ ┃ ┗ merchant-list.tsx
┃ ┣ utils
┃ ┃ ┣ const.ts
┃ ┃ ┗ index.ts
┃ ┗ page.tsx
┣ payments
┃ ┣ components
┃ ┃ ┣ payment-filter.module.css
┃ ┃ ┣ payment-filter.tsx
┃ ┃ ┣ payment-list.module.css
┃ ┃ ┗ payment-list.tsx
┃ ┣ utils
┃ ┃ ┣ const.ts
┃ ┃ ┗ index.ts
┃ ┗ page.tsx
┣ store
┃ ┣ payment-filter-modal.ts
┃ ┗ payment-filter-store.ts
┣ types
┃ ┣ common.ts
┃ ┣ merchants.ts
┃ ┣ payment.ts
┃ ┗ preprocess.ts
┣ error.tsx
┣ globals.css
┣ layout.tsx
┣ not-found.tsx
┣ page.tsx
┗ reset.css

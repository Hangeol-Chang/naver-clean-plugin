# Naver Clean Plugin

네이버 메인 페이지에서 뉴스스탠드(`#newsstand`)와 피드(`#feed`)를 제거하고, 우측 컬럼을 화면 중앙으로 정렬하는 Chrome 확장 프로그램입니다.

## 설치 방법

1. 이 저장소를 클론하거나 ZIP으로 다운로드합니다.
2. Chrome에서 `chrome://extensions`로 이동합니다.
3. 우측 상단의 **개발자 모드**를 활성화합니다.
4. **압축해제된 확장 프로그램을 로드합니다**를 클릭합니다.
5. `naver-clean-plugin` 폴더를 선택합니다.

## 동작

- `#newsstand`, `#feed` 요소를 DOM에서 제거합니다.
- 비어있는 왼쪽 컬럼(`column_left`)을 숨깁니다.
- 남은 오른쪽 컬럼(`column_right`)을 화면 중앙으로 이동합니다.
- 네이버가 동적으로 요소를 삽입하는 경우에도 MutationObserver로 자동 처리합니다.

## 파일 구조

```
naver-clean-plugin/
├── manifest.json   # 확장 프로그램 설정
└── content.js      # 메인 스크립트
```

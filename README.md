# 2024 파리 올림픽 메달 추적기

이 프로젝트는 react의 간단하게 CRUD를 알아보고자, 최소한의 메달정보를 입력하여 입력한 값을 리스트로 보여주는 기본적인 웹입니다.

---

## 주요 기능

1. 리스트 추가
   - 국가명과 메달 수(금, 은, 동)를 입력하여 국가를 목록에 추가할 수 있습니다.
   - 동일한 국가를 중복해서 추가할 수 없도록 중복 확인이 가능합니다.

2. 업데이트
   - 이미 추가된 국가의 메달 수를 업데이트할 수 있습니다.
     
3. 리스트 삭제
   - 목록에서 특정 국가를 삭제할 수 있습니다.

4. 리스트 정렬
   - 국가 목록을 금메달 순이나 전체 메달 합계 순으로 정렬할 수 있습니다.

---

## 사용 기술

- React, JavaScript, CSS, LocalStorage

---

프로젝트 구조
```
.
├── App.css
├── App.jsx
├── assets
│   └── react.svg
├── components
│   ├── CountryForm.jsx
│   └── CountryList.jsx
├── index.css
└── main.jsx
```

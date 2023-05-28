# 보드게임 하자

## 소개 및 개요

* 프로젝트 기간: 5/22 ~ 6/7
* 배포 URL: 
* Test ID / PW:

### 프로젝트 설명
* "보드게임하자"는 ...

### 목차
1. [팀 소개](#1-팀-소개)
2. [기술 및 개발 환경](#2-기술-및-개발-환경)
3. [주요 기능](#3-주요-기능)
4. [프로젝트 구조](#4-프로젝트-구조)
5. [역할 분담](#5-역할-분담)
___
## 1. 팀 소개
멋쟁이사자처럼 프론트엔드 5기 7조 **🎰77l리77ㅣ리🎰**의 프로젝트입니다. 
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/yyuli"><img src="https://avatars.githubusercontent.com/u/119276010?v=4" width="100px;" alt=""/><br /><sub><b>김율이 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/vacation0706"><img src="https://avatars.githubusercontent.com/u/117337499?v=4" width="100px;" alt=""/><br /><sub><b>성재윤</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/hyeri-woo"><img src="https://avatars.githubusercontent.com/u/107099724?v=4" width="100px;" alt=""/><br /><sub><b>우혜리 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jiwon-o"><img src="https://avatars.githubusercontent.com/u/64193469?v=4" width="100px;" alt=""/><br /><sub><b>오지원</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/bringvotrevin"><img src="https://avatars.githubusercontent.com/u/81025416?v=4" width="100px;" alt=""/><br /><sub><b>임다솜</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ho-ji"><img src="https://avatars.githubusercontent.com/u/95618801?v=4" width="100px;" alt=""/><br /><sub><b>장예지</b></sub></a><br /></td>
     <tr/>
  </tbody>
</table>

____
## 2. 기술 및 개발 환경
### 데이터 사용
`boardgame.json`
- json server을 통해 `http://localhost:3001/game` 에서 사용하거나 json 파일로 바로 사용할 수 있습니다.
```
{
  "game": [
    {
    "name": "글룸헤이븐",
    "image": "https:\/\/boardlife.co.kr\/data\/boardgame_strategy\/2021\/01\/29\/1611914795-315436_N_170x170_100_5_.jpg",
    "min_player": "1",
    "max_player": "4",
    "play_time": "60-120분",
    "rate": "8.5",
    "play_age": "14세 이상",
    "difficulty": "3.89",
    "theme": "판타지",
    "ranking": 1
    },
    ...
}
```

**json server 사용법**
1. src 파일 안에 data 폴더를 위치시킵니다. 
2. 프로젝트 폴더 안에서 json-server를 설치합니다.
```
npm i -g json-server
```
3. data 폴더 안에서 json-server를 시작시킵니다. 
```
json-server --watch boardgame.json --port 3001
```
4. App.js 내 fetchData 함수를 이용해 데이터를 받으시고 사용하시면 됩니다. 



### 사용 기술

### 개발 환경

### Commit 컨벤션
```
- feat: 새로운 기능 구현
- fix: 오류 수정
- docs: 문서 수정 (예 : readme.md, json 파일 등 수정/ 문서 관련 라이브러리 설치 등)
- design: 마크업 및 style 작업
- style: 코드에 변화가 없는 수정 (예 : prettier, 세미콜론 등)
- refactor: 코드 리팩토링
- comment: 주석 추가
- chore: 빌드 부분 혹은 패키지 매니저 수정사항
- rename: 파일 혹은 폴더명 수정 or 옮기기
- remove: 파일 삭제
```

### 코드 컨벤션
___
## 3. 주요 기능
### 로그인 / 회원 가입
- 로그인
- 회원가입
### 피드
- 보드게임 상세정보
- Pagination
### 검색
- 보드게임 검색 
- 검색 필터링
### 프로필
- 로그아웃
- Like/Like 취소
___
## 4. 프로젝트 구조
```
📦 boardgame-haja🐶😺
.github
│  ├─ ISSUE_TEMPLATE
│  └─ PULL_REQUEST_TEMPLATE
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  └─ index.html
└─ src
   ├─ App.js
   ├─ assets
   │  └─ image
   ├─ components
   │  ├─ common
   │  ├─ home
   │  ├─ login
   │  │  ├─ Form.js
   │  │  ├─ Login.js
   │  │  └─ Welcome.js
   │  ├─ profile
   │  │  ├─ GridCard.js
   │  ├─ search
   │  │  ├─ Result.js
   │  │  └─ Results.js
   │  ├─ style
   │  │  ├─ Button.js
   │  │  ├─ GlobalStyle.js
   │  │  ├─ Header.js
   │  │  ├─ NavBar.js
   │  │  ├─ PageLayout.js
   │  │  ├─ form
   │  │  │  ├─ ErrorMessageP.js
   │  │  └─ profile
   │  │     ├─ FollowButton.js
   │  │     ├─ FollowCountDiv.js
   │  │     ├─ FollowCountP.js
   │  │     └─ FollowCountSpan.js
   ├─ hooks
   │  ├─ useFetch.js
   │  └─ useInput.js
   ├─ index.css
   ├─ index.js
   ├─ pages
   │  ├─ ErrorPage.js
   ├─ reportWebVitals.js
   ├─ routes
   │  └─ Router.js
   └─ utils
      ├─ api.js
      ├─ postData.js
      └─ validate.js
```
___
## 5. 역할 분담
### 공동
### 김율이
### 성재윤
### 우혜리
### 오지원
### 임다솜
### 장예지
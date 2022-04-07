---
title: 'getStaticProps란?'
date: '2022-04-06'
name: 'sua-no'
---

# getStaticProps란?

- getStaticProps함수를 export하면 js에 있는 export default로 설정된 컴포넌트의 Props로 리턴값이 전달된다
- 외부 api에서 데이터 받아올 수도 있고 쿼리 날려서 받을 수도 있다
- 서버 사이드에서만 작동함
- 일반적인 js파일에서 사용할수는 없다
- next의 pages 하위 폴더에 있는 페이지들만 getStaticProps를 사용할 수 있다

// ============================================================
// 슬라이드 내용은 이 파일에서만 수정하면 됩니다.
// - html : 참가자와 진행자 모두에게 보이는 화면 (HTML 그대로 사용 가능)
// - note : 진행자 화면에만 보이는 메모 (선택)
//
// 이미지를 쓰려면 레포지토리에 images 폴더를 만들고 파일을 올린 뒤
//   <img src="images/파일이름.png" alt="">
// 처럼 넣으세요.
//
// 주의: 레포지토리가 Public이라 이 파일은 누구나 열어볼 수 있습니다.
// 정답처럼 참가자에게 미리 보이면 안 되는 내용은 note에도 적지 마세요.
// ============================================================

const SLIDES = [
  {
    html: `
      <h1>10월 SCP SA그룹 도란도란</h1>
      <h2>그룹장杯 SA생결단</h2>
      <p>잠시 후 게임이 시작됩니다</p>
      <p>13:42 커밋</p>
    `,
    note: '입장한 참가자 수를 확인하고 시작하세요.',
  },
  {
    html: `
      <h2>1라운드<br>IT인의 기본 덕목</h2>
      <h2>게임 규칙</h2>
      <p>1. 화면에 나온 로고를 실눈 뜨고 살펴주세요.<br>2. 짐작가는 회사가 있다면 손을 들어주세요.<br>3. 진행자가 지목하면 답변을 외쳐주세요.</p>
    `,
    note: '규칙을 소리 내어 읽어주세요.',
  },
  {
    html: `<img class="px200 blur" src="images/AlibabaCloud.png" alt="">`,
    note: 'AWS',
  },
  {
    html: `<img class="px200" src="images/AlibabaCloud.png" alt="">`,
    note: 'AWS',
  },
  {
    html: `<img class="px100 blur" src="images/oracle-cloud.png" alt="">`,
    note: 'Oracle Cloud',
  },
  {
    html: `<img class="px100" src="images/oracle-cloud.png" alt="">`,
    note: 'Oracle Cloud',
  },
  {
    html: `<img class="px100 blur" src="images/low_NCP_logo_white_200x200.png" alt="">`,
    note: '네이버클라우드',
  },
  {
    html: `<img class="px100" src="images/low_NCP_logo_white_200x200.png" alt="">`,
    note: '네이버클라우드',
  },
  {
    html: `<img class="px100 blur" src="images/MsAzure.png" alt="">`,
    note: 'MS Azure',
  },
  {
    html: `<img class="px100" src="images/MsAzure.png" alt="">`,
    note: 'MS Azure',
  },
  {
    html: `<img class="px100 blur" src="images/SamsungSDS.png" alt="">`,
    note: '삼성SDS',
  },
  {
    html: `<img class="px100" src="images/SamsungSDS.png" alt="">`,
    note: '삼성SDS',
  },
  {
    html: `<img class="px100 blur" src="images/GoogleCloud.png" alt="">`,
    note: 'Google Cloud',
  },
  {
    html: `<img class="px100" src="images/GoogleCloud.png" alt="">`,
    note: 'Google Cloud',
  },
  {
    html: `<img class="px100 blur" src="images/kt_cloud_CI_01_(Positive).png" alt="">`,
    note: 'KT Cloud',
  },
  {
    html: `<img class="px100" src="images/kt_cloud_CI_01_(Positive).png" alt="">`,
    note: 'KT Cloud',
  },
  {
    html: `<img class="px100 blur" src="images/AlibabaCloud.png" alt="">`,
    note: 'Alibaba Cloud',
  },
  {
    html: `<img class="px100" src="images/AlibabaCloud.png" alt="">`,
    note: 'Alibaba Cloud',
  },
  {
    html: `<img class="px100 blur" src="images/IBM_Cloud_logo.png" alt="">`,
    note: 'IBM Cloud',
  },
  {
    html: `<img class="px100" src="images/IBM_Cloud_logo.png" alt="">`,
    note: 'IBM Cloud',
  },
  {
    html: `<img class="px100 blur" src="images/NhnCloud.png" alt="">`,
    note: 'NHN CLoud',
  },
  {
    html: `<img class="px100" src="images/NhnCloud.png" alt="">`,
    note: 'NHN CLoud',
  },
  {
    html: `
      <h2>1라운드 끝!<br>수고하셨습니다 :)</h2>
    `,
    note: '',
  },
  {
    html: `
      <h2>2라운드<br>스드스인의 기본 덕목</h2>
      <h2>게임 규칙</h2>
      <p>1. 화면에 나온 초성을 유심히 살펴주세요.<br>2. 짐작가는 단어가 있다면 손을 들어주세요.<br>3. 진행자가 지목하면 답변을 외쳐주세요.</p>
    `,
    note: '규칙을 소리 내어 읽어주세요.',
  },
  {
    html: `<h2>(연습문제) ㄷㄹㄷㄹ</h2>`,
    note: '도란도란',
  },
  {
    html: `<h2>ㅅㅅㅇㅅㄷㅇㅅ</h2>`,
    note: '삼성에스디에스',
  },
  {
    html: `<h2>ㅋㄹㅇㄷㅅㅂㅅㅅㅇㅂ</h2>`,
    note: '클라우드서비스사업부',
  },
  {
    html: `<h2>ㄴㅅ ㅍㅌ</h2>`,
    note: '녹스 포탈',
  },
  {
    html: `<h2>ㅋㅍㄹㅇㅅ</h2>`,
    note: '컨플루언스',
  },
  {
    html: `<h2>ㄹㅇ ㅆㅁ</h2>`,
    note: '리얼 써밋',
  },
  {
    html: `<h2>ㅇㅅㅅㅍ ㅇㅅㅇㅇㄱㄹ</h2>`,
    note: 'SCP SA그룹',
  },
  {
    html: `<h2>ㅈㄹㅁㅋㅌㅅ</h2>`,
    note: '전략마케팅실',
  },
  {
    html: `<h2>ㅍㅂㅅ</h2>`,
    note: '폴바셋',
  },
  {
    html: `<h2>ㅂㅇ ㅋㄷ</h2>`,
    note: '법인 콘도',
  },
  {
    html: `<h2>ㅇㄹㅅ</h2>`,
    note: '아리샘',
  },
  {
    html: `<h2>ㅈㅇㅊㅌㄱㅈ</h2>`,
    note: '자율출퇴근제',
  },
  {
    html: `<h2>ㅂㅈ ㅍㅇㅌ</h2>`,
    note: '복지 포인트',
  },
  {
    html: `<h2>ㅍㅁㄹ ㄷㅇ</h2>`,
    note: '패밀리 데이',
  },
  {
    html: `<h2>ㅈㅇ ㅈㅁㄱ</h2>`,
    note: '지역 전문가',
  },
  {
    html: `<h2>ㅇㅈㅅ ㄱㄹㅈ</h2>`,
    note: '양종성 그룹장',
  },
  {
    html: `
      <h2>2라운드 끝!<br>수고하셨습니다 :)</h2>
    `,
    note: '',
  },
  {
    html: `
      <h2>3라운드<br>SA그룹의 기본 덕목</h2>
      <h2>게임 규칙</h2>
      <p>1. 화면에 나온 그림을 유심히 살펴주세요.<br>2. 이름을 아신다면 손을 들어주세요.<br>3. 진행자가 지목하면 답변을 외쳐주세요.</p>
    `,
    note: '규칙을 소리 내어 읽어주세요.',
  },
  {
    html: `<img class="px100" src="images/VirtualServer.png" alt="">`,
    note: 'Virtual Server',
  },
  {
    html: `<img class="px100" src="images/ic_service_objStorage_44.png" alt="">`,
    note: 'Object Storage',
  },
  {
    html: `<img class="px100" src="images/ic_service_conRegistry_44.png" alt="">`,
    note: 'Container Registry',
  },
  {
    html: `<img class="px100" src="images/ic_service_Mysql_44.png" alt="">`,
    note: 'MySQL(DBaaS)',
  },
  {
    html: `<img class="px100" src="images/ic_service_parallelFS_44.png" alt="">`,
    note: 'Parallel File Storage',
  },
  {
    html: `<img class="px100" src="images/ic_service_gcdn_44.png" alt="">`,
    note: 'Global CDN',
  },
  {
    html: `<img class="px100" src="images/ic_service_directConnect_44.png" alt="">`,
    note: 'Direct Connect',
  },
  {
    html: `<img class="px100" src="images/ic_service_securedFirewall_44.png" alt="">`,
    note: 'Secured Firewall',
  },
  {
    html: `<img class="px100" src="images/ic_service_apiGateway_44.png" alt="">`,
    note: 'API Gateway',
  },
  {
    html: `<img class="px100" src="images/ic_service_logNaudit_44.png" alt="">`,
    note: 'Logging & Audit',
  },
  {
    html: `<img class="px100" src="images/ic_service_waf_44.png" alt="">`,
    note: 'WAF',
  },
  {
    html: `<img class="px100" src="images/ic_service_simpleAIinference_44.png" alt="">`,
    note: 'Simple AI Inference',
  },
  {
    html: `<img class="px100" src="images/ic_service_dedicatedCloud_44.png" alt="">`,
    note: 'Dedicated Cloud',
  },
  {
    html: `<img class="px100" src="images/ic_service_acceleratedServer_44.png" alt="">`,
    note: 'Accelerated Server (서비스명이 바뀌었습니다)',
  },
  {
    html: `<img class="px100" src="images/ic_service_vpn_44.png" alt="">`,
    note: 'VPN',
  },
  {
    html: `
      <h2>3라운드 끝!<br>수고하셨습니다 :)</h2>
    `,
    note: '',
  },
  {
    html: `
      <h2>게임 종료<br>행복한 저녁 되세요 :)</h2>
    `,
    note: '',
  },
];

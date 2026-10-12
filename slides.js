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
    `,
    note: '입장한 참가자 수를 확인하고 시작하세요.',
  },
  {
    html: `
      <h2>1라운드<br>스드스인의 기본 덕목</h2>
      <h2>게임 규칙</h2>
      <p>1. 화면에 나온 초성을 유심히 살펴주세요.<br>2. 짐작가는 단어가 있다면 손을 들어주세요.<br>3. 진행자가 지목하면 답변을 외쳐주세요.</p>
    `,
    note: '규칙을 소리 내어 읽어주세요.',
  },
  {
    html: `
      <h2>ㅅㅅㅇㅅㄷㅇㅅ</h2>
    `,
    note: '규칙을 소리 내어 읽어주세요.',
  },
  {
    html: `
      <h2>2라운드<br>SA그룹의 기본 덕목</h2>
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
    note: 'Accelerated Server',
  },
  {
    html: `<img class="px100" src="images/ic_service_vpn_44.png" alt="">`,
    note: 'VPN',
  },
  {
    html: `
      <h2>1라운드 끝!<br>수고하셨습니다 ◠ ‿ ◠</h1>
    `,
    note: '',
  },
];

## 프로젝트 설명

아두이노 기판과 통신하는 웹/앱 페이지## 스택

임베디드: 아두이노(외부업체)

서버: python, fastapi

클라이언트: javascript, react.js## 기능 요구사항

0. 일반 유저 권한(auth_user)과 관리자 권한(auth_admin) 분리

- auth_user: 기판 등록, 등록된 기판 crud 작업

- auth_admin: 전체 기판 crud 작업

1. 임베디드 시스템 전원 on/off 기능 트리거 전송

- auth_user: 등록된 기판에 한해 전원 on/off 트리거 전송. (req: {user_id: int, mech_id: int=id | str=시리얼, trigger: bool})

- auth_admin: 해당 권한 없음

2. 유저 시스템, 기판 조회 및 관리(추가, 수정, 삭제, master-slave 관계 지정[수정])

- 추가:

가정 1. 기판에 QR code 사전 등록(등록 페이지 제작, 기판 등록번호 입력 해 유저에게 등록)

가정 2. 유저 정보에서 기판 추가 페이지/기능 제공, 직접 입력하게끔 만듦 요구. 기판 정보가 이미 테이블에 등록되어 있어야 함.

진행. 등록 시점에 user-mech 관계 테이블에 추가 또는 mech에 user_id 등록

- 수정

- auth_user: mech 별칭 지정

- auth_admin: 개인화 정보 수정 가능하게?

- 삭제:

- auth_user: patch mech.user_id, 기판에서 user_id를 null 값으로 변경

- auth_admin: mech 테이블에서 기판 삭제. 미등록 기판으로 처리

3. 유저 관리 - 소셜 로그인 처리(naver, kakao, google, apple)

4. 임베디드 시스템 호출 시 클라이언트에게 메세지 전송

- 임베디드에서 이상 징후(고온, 과습, 암시야 등) 관측, 발생 시점 서버로 요청 => 서버에서 클라이언트 앱으로 알림 전송## 테이블

mech

- ID: int | str = 기본 pk 또는 씨리얼 넘버 같은 기판 코드 사용

- user_id: FK(user.id), nullable True = 등록한 유저

- name: str = 기판 이름

- alase_name: str = 유저가 정한 별칭

- power: bool = 전원 상태

- temp: str = 기판 주변 환경 온도

- isMasterSlave: FK(mech.id) = 중계 기판 등록 여부, null일 경우 최상위 기판, 값 있을 경우 하위 기판

- isEnabled: bool = 정보 사용 가능 여부(T: 가능/F: 불가능)user

- ID: int | str = 기본 PK 또는 소셜 로그인 코드

- name:  개인 정보 1

- phone_number:  개인 정보 2

- gender:  개인 정보 3 (그 외 개인 정보 추가 가능)

- FMC 토큰: stralarm

- ID: int

- sender: FK(mech.id)

- receiver: FK(user.id)

- message: str

- is_read: bool

- is_enabled: bol

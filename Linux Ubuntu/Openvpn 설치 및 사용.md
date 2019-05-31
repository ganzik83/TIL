# Ubuntu OpenVPN 설치 및 사용

설치

```bash
wget https://git.io/vpn -O openvpn-install.sh && sudo bash openvpn-install.sh
```

설정

```bash
Welcome to this OpenVPN "road warrior" installer!



I need to ask you a few questions before starting the setup.

You can leave the default options and just press enter if you are ok with them.



First, provide the IPv4 address of the network interface you want OpenVPN

listening to.
# 프라이빗 ip주소가 나타난다. 그대로 엔터
IP address:



This server is behind NAT. What is the public IPv4 address or hostname?
# NAT에 있으니 퍼블릭 IP, 및 호스트이름을 적어준다
Public IP address / hostname:



Which protocol do you want for OpenVPN connections?

   1) UDP (recommended)

   2) TCP
# 클라이언트가 리눅스라면 TCP로 해준다. 1번 선택
Protocol [1-2]: 1




What port do you want OpenVPN listening to?

Port: 1194



Which DNS do you want to use with the VPN?

   1) Current system resolvers

   2) 1.1.1.1

   3) Google

   4) OpenDNS

   5) Verisign

DNS [1-5]: 1



Finally, tell me your name for the client certificate.

Please, use one word only, no special characters.
# 클라이언트에서 접속할 이름을 적는다
Client name: vpn_ganzik



Okay, that was all I needed. We are ready to set up your OpenVPN server now.

Press any key to continue...
```

자동으로 설치 및 설정이 완료되고 /home/유저 디렉토리에
`vpn_ganzik.ovpn` 파일이 생성된다

vpn_ganzik.ovpn 파일을 클라이언트 환경에 가져온다

모바일 환경에서는 ios, android 앱스토어에서 openvpn을 받는다

vpn_ganzik.ovpn 파일을 이용해서 접속하면 정상적으로 작동한다

데스크톱 환경에서는
<https://openvpn.net>
에서 실행파일을 받는다

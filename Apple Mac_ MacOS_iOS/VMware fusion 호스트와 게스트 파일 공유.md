# VMware fution 10 호스트와 게스트 파일 공유 방법

1. VMware에서 폴더를 공유하고자 하는 virtual machine을 선택하고 설정(settings)에 들어간다

2. 시스템설정 - Sharing에 들어가서 좌측 하단에 플러스 버튼을 눌러 공유할 폴더를 선택  
   그리고 Enalbe Shared Folders를 체크하면 아래와 같이 Guest에서 에러를 팝업한다

![Unable to update run-time folder sharing status: VMware Tools are not running in the guest](./imgs/vmwaretoosartnot.png)

3. Guest에 vmware-tools 설치 (ubuntu desktop환경)

   - Guest 버추얼머신을 실행시키고 메뉴에서 Virtual Machine - Install VMware Tools를 선택

   - CDROM이 삽입되고 `/media/root/VMware Tools`에 마운트된다

   ```bash
   # /media/root/VMware Tools 디렉토리로 이동
   cd /media/root/VMware\ Tools/

   # /tmp 디렉토리에 tar묶음을 풀고 gz압축을 해제한다.
   tar xvfz VMwareTools-10.2.0-7259539.tar.gz -C /tmp

   # /tmp/vmware-tools-distrib 디렉토리로 이동한다
   cd /tmp/vmware-tools-distrib

   # 설치 파일을 실행한다
   ./vmware-install.pl

   # yes를 누르고 전부 엔터를 누른다

   # 재부팅한다
   init 6

   # /mnt/hgfs 폴더로 이동해서 리스트를 검색한다
   cd /mnt/hgfs
   ls -al
   ```

> Guest에 vmware-tools 설치 (ubuntu server환경)

- Guest 버추얼머신을 실행시키고 메뉴에서 Virtual Machine - Install VMware Tools를 선택

- Terminal을 실행시킨다

  ```bash
  # cdrom을 마운트 시킬 디렉토리를 만든다
  mkdir /mnt/cdrom

  # cdrom을 마운트 시킨다. iso9660(cd)타입으로 파일시스템(-t)으로 /dev/sr0장치를 /mnt/cdrom에 마운트
  mount -t iso9660 /dev/sr0 /mnt/cdrom

  # /mnt/cdrom 디렉토리로 이동
  cd /mnt/cdrom

  # /tmp 디렉토리에 tar묶음을 풀고 gz압축을 해제한다.
  tar xvfz VMwareTools-10.2.0-7259539.tar.gz -C /tmp

  # /tmp/vmware-tools-distrib 디렉토리로 이동한다
  cd /tmp/vmware-tools-distrib

  # 설치 파일을 실행한다
  ./vmware-install.pl

  # yes를 누르고 전부 엔터를 누른다

  # 재부팅한다
  init 6

  # /mnt/hgfs 폴더로 이동해서 리스트를 검색한다
  cd /mnt/hgfs
  ls -al
  ```

<h1> ETCD 하트비트와 선출 시간</h1>

<h3>Heart Beat</h3>
1. 하트비트는 리더가 팔로우에게 자신이 살아있음을 알리기 위한 주기적 신호이다.
2. 하트비트의 기본 시간은 100ms
3. 하트비트의 시간이 너무 빈번하면 리소스 사용량이 증가한다.
4. 하트비트 값의 설정은 (각 노드의 RTT 평균 최대 시간의 x 0.5~1.5)를 권장(ping command를 통해서 확인)


<h3>Election Timeout</h3>
1. 팔로우가 리더의 하트비트를 기다리는 시간
2. 이 시간이 지나면 팔로우는 자신이 리더가 되기위하여 리더 선거를 시작한다.
3. etcd의 선출 시간의 default 값은 1000ms
4. election timeout의 추천하는 값은 heart beat 값의 10배이다.
5. 글로벌 etcd의 클러스터링을 위해서 etcd는 최대 50000ms(50sec)을 지원한다.
6. 


**본 테스트 환경에서 설정한 선출시간과 하트비트는 etcd-run-command에 기록되어 있다**
# TCP

![tcpheader](./imgs/tcpheader.png)
TCP Header

## HTTP

- request, response
- stateless

## Request

3way handshake
Client | State | Server
---------|----------|---------
|| syn -> | |
| | <- syn / ark | |
|| ark -> |

## Response

4way handshake
Client | State | Server
---------|----------|---------
|| fin -> | |
| | <- fin / ark | |
|| <- fin |
|| fin / ark -> |

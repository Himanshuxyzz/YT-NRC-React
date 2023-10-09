##### # Live Chat

**Challenges Of Live Chat**

- To get data live (Data layer problem)
- How do you update ui in real time (Ui layer Problem)

**Note :- at the end of day data will transform into ui element or we can say in web it's html element (div) or something so on each new data keep pushing html element in page will results in page slow down due to increase in page size.**

**Live chat application should able to :-**

- To update ui in a efficient way.
- To provide better ux
- real time data

**How To Implement Live Chat**

- Web Socket (It's a two way connection established between client and server and once handshake are done or in other words connected then we can quickly send data from either sides also it's called bi-directional data , key point is on establishing a connection and it just stays there and it take some resources (can take heavy resource) but results in instant real time data flow).

- Long Polling or Api Polling (Ui requst the server and server responds data from server to ui it's one or uni-directional connection with some interval where as in socket there is no regular interval )

**Application (use case)**

- Gmail :- (not sure but long polling is used).
- Trading application (Zerodha or Kite or any real time where real time stock market data is needed) :- (That would we build using Web sockets).
- Messaging app (Whatsapp,Facebook messenger) :- (web socket).
- Cricbuzz or live commentory applications (need some delay in order to get real time updates coz every event in live game happens after a delay) :- (Api Polling).

**Why youtube chat is performant and doesn't slow down page ?**

because after certain number of messages reached then it starts deleting the messages from top we can see this action after cetain messages you will not able to find earlier messages from top 

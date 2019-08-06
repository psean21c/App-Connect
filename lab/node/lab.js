var a = 0.3;
console.log(a - 0.3);

// 44. libuv, The Event Loop, and Non-blocking
/****
 * 
     System Events         |     Custom Events
      -------------            ---------------------
   C++ Core(libuv)  ------> Javascript Core (Event Emitter)
                    
              (3) callback        (1) Request
       V8  <-----------    libuv   ------------> OS
                             | (Event Loop)   /
                             |               /
                          [Queue]           / (2) Event
                          [=====]          /
                          [Done ]    <----/
                          [     ]

Non-Blocking: Doing other things without stopping your programming from running:
This is made possible by Node's doing things asynchronously.

 */
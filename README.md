# CHAT APP IN Node.js and with the help of socket.io module
# REFERENCES - socket.io documetation
# you tube channel - @6 pack programmer
# socket.io API endpoints

# there is one io server in which there are multiple sockets in which the message can be send to everyone in real-time with low-latency, fast.

# io.on('connection',funtion(message)) - when the handshake happens, in short when a new connection is made

# socket.on('disconnect',function(message))  - this listens to when the connection closes.
# socket.on   - listens for an event
# socket.emit - emit the 'event' with a message
   #  example socket.emit('hello','world') - 'hello' is an event and 'world' is a message and there can be  multiple messages or arguments passed to the emit function
   #  example socket.emit('hello','world',4,{"name":"jay","passion":"coding",})

# socket.broadcast.emit('event','message') - message passed to all sockets except the one who is sending
# io.to('socket.id').emit('event','message') - send message to particular socket through 'socket.id'

# io.emit('event','message') - send message to all the sockets in the io server 

# you can also form rooms in socket.io in which the message can be send to some limited peoples involved in the room.
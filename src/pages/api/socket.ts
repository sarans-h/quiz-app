import { Server } from 'socket.io';

const ioHandler = (req: any, res: any) => {
  if (!res.socket.server.io) {
    console.log('🔌 New Socket.IO server...');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', socket => {
      console.log('✅ A client connected');

      socket.on('join-room', (roomId: string) => {
        console.log(`📢 Client joined room: ${roomId}`);
        socket.join(roomId);
      });

      socket.on('send-answer', (data) => {
        console.log('🎯 Received answer', data);
        io.to(data.roomId).emit('receive-answer', data);
      });

      socket.on('disconnect', () => {
        console.log('❌ Client disconnected');
      });
    });
  }
  res.end();
};

export default ioHandler;

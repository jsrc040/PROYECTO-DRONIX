import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ path: '/ws/telemetry' })
export class TelemetryGateway {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) { console.log('Client connected', client.id); }
  handleDisconnect(client: Socket) { console.log('Client disconnected', client.id); }

  @SubscribeMessage('ping')
  handlePing(client: Socket, payload: any) {
    client.emit('pong', { ok: true });
  }

  // método público usado por servicios para reenviar telemetría
  broadcast(droneId: string, payload: any) {
    this.server.to(droneId).emit('telemetry', payload);
  }
}

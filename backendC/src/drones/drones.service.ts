import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class DronesService {
  private readonly logger = new Logger(DronesService.name);

  async takeoff(droneId: string, altitude: number) {
    this.logger.log(`Takeoff requested: ${droneId} -> ${altitude}m`);
    // TODO: publicar a Redis o enviar comando al adapter
    return { status: 'accepted', droneId, altitude };
  }

  async land(droneId: string) {
    this.logger.log(`Land requested: ${droneId}`);
    return { status: 'accepted', droneId };
  }

  async returnToHome(droneId: string) {
    this.logger.log(`ReturnToHome requested: ${droneId}`);
    return { status: 'accepted', droneId };
  }
}

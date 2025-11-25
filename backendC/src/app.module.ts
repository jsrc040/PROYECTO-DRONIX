import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { DronesModule } from './drones/drones.module';
import { TelemetryModule } from './telemetry/telemetry.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'db',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER || 'drone',
      password: process.env.DB_PASS || 'dronepwd',
      database: process.env.DB_NAME || 'dronedb',
      autoLoadEntities: true,
      synchronize: true, // solo dev
    }),
    AuthModule,
    DronesModule,
    TelemetryModule,
  ],
})
export class AppModule {}

//comit
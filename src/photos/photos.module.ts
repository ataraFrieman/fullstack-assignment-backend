import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";

import { PhotosController } from "./photos.controller";
import { PhotosService } from "./photos.service";

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}

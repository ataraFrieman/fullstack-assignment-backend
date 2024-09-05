
import { Controller, Get, Param } from '@nestjs/common';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get(':count')
  async getPhotos(@Param('count') count: number) {
    return this.photosService.getRandomPhotos(count);
  }
}
            
import {
  Injectable,
  BadRequestException,
  ServiceUnavailableException,
} from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { PixabayHit } from "interfaces/pixabay.interface";

@Injectable()
export class PhotosService {
  private readonly pixabayApiKey = "45640711-3b2c9c3e0dd9ac6e6a5b798be";

  constructor(private readonly httpService: HttpService) {}

  async getRandomPhotos(count: number): Promise<string[]> {
    if (count <= 0) {
      throw new BadRequestException(
        "The number of photos must be greater than 0."
      );
    }

    try {
      const response = await this.httpService
        .get(
          `https://pixabay.com/api/?key=${this.pixabayApiKey}&per_page=${count}`
        )
        .toPromise();

      if (response && response.data && response.data.hits) {
        return response.data.hits.map((hit: PixabayHit) => hit.webformatURL);
      } else {
        return [];
      }
    } catch (error) {
      throw new ServiceUnavailableException(
        "Unable to fetch photos from Pixabay."
      );
    }
  }
}

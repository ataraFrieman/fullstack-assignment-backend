import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OrdersModule } from "./orders/orders.module";
import { PhotosModule } from "./photos/photos.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017"),
    OrdersModule,
    PhotosModule,
  ],
})
export class AppModule {}

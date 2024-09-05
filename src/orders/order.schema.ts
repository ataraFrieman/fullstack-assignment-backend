import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

import { DefaultValue } from "decorators/default-value.decorator";

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  @DefaultValue("")
  email!: string;

  @Prop({ required: true })
  @DefaultValue("")
  fullName!: string;

  @Prop({ required: true })
  @DefaultValue("")
  fullAddress!: string;

  @Prop({ required: true })
  @DefaultValue("")
  imageUrls!: string[];

  @Prop({ required: true })
  @DefaultValue("")
  frameColor!: string;

  @Prop({ required: true })
  @DefaultValue("")
  user!: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

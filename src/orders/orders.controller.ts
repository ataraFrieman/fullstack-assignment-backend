import { Controller, Get, Post, Body, Param } from "@nestjs/common";

import { OrdersService } from "./orders.service";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() createOrderDto: any) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get(":user")
  async getOrders(@Param("user") user: string) {
    return this.ordersService.getOrdersByUser(user);
  }
}

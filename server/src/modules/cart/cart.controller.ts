import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import products, { Product } from "../../products";

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}
// fill the cart with some products for testing
const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1,
  }))
});

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    // userID and ids of products for testing
    1: initialCart([1, 2, 4]),
    2: initialCart([1, 3, 5])
  };
  constructor() { }

  // Get the contents of the cart based on user.
  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }: { id: string }): Promise<Cart> {
    const cart = this.carts[req.user.userId];
    const cartItem = cart.cartItems.find(
      (cartItem) => cartItem.id === parseInt(id)
    );
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.cartItems.push({
        ...products.find((product) => product.id === parseInt(id)),
        quantity: 1
      })
    }
    return cart;
  }
  
  @Delete()
  @UseGuards(JwtAuthGuard)
  async destory(@Request() req): Promise<Cart> {
    this.carts[req.user.userId] = { cartItems: [] };
    return this.carts[req.user.userId];
  }
}

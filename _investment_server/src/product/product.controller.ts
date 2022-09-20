import { Controller, Get, Logger, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { Response } from 'express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(@Res() res: Response) {
    try{
        var today = new Date()
        return res.status(200).json(
          await this.productService.findAll(today)
        );
    }
    catch(error){
      Logger.error(error)
      return res.status(500).json(error);
    }
  }
}


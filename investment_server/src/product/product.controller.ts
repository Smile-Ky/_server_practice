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
        var date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + (today.getDay())).slice(-2)
        Logger.log(date)
        return res.status(200).json(
          await this.productService.findAll(date)
        );
    }
    catch(error){
      Logger.error(error)
      return res.status(500).json(error);
    }
  }
}

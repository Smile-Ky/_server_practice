import { Controller, Get, Query, Res, Logger, Post, Body, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { Response } from 'express';
import { createBookDto } from './create-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  
  @Get()
  async findById(@Query('flight_uuid') flight_uuid: string,
                @Query('phone') phone: string,
                @Res() res: Response) {
    try{
      if(flight_uuid === undefined)
          flight_uuid = ""
      if(phone === undefined)
          phone = ""    
      return res.status(200).json(
      await this.bookService.findById(flight_uuid, phone)
    )}
    catch(error){
      Logger.error(error)
      return res.status(500).json(error);
    }
  }

  @Post()
  async createBook(@Body() body: createBookDto,
              @Res() res: Response){
    try{
        await this.bookService.createBook(body)
        return res.status(200).json(body.flight_uuid)
    }catch(error){
      Logger.error(error)
      return res.status(500).json(error)
    }
  }

  @Delete()
  async deleteById(@Query('phone') query: string,
              @Res() res: Response){
    try{
        await this.bookService.deleteById(query)
        return res.status(200).json(
          await this.bookService.findById("","")
        )
    }catch(error){
      Logger.error(error)
      return res.status(500).json(error)
    }
  }
}

import { Body, Controller, Delete, Get, Logger, Param, Post, Query, Res} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { userInvestDto } from './DTO/userInvest.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Query('user_id') user_id: number,
                @Res() res: Response){
    try {
      return res.status(200).json(
        await this.userService.findAll(user_id)
      )
    } catch (error) {
      Logger.error(error)
      return res.status(500).json(error);
    }
  }

  @Post()
  async addInvest(@Body() userInvest: userInvestDto,
                  @Res() res: Response){
    try {
      return res.status(200).json(
        await this.userService.addInvest(userInvest)
      )
    } catch (error) {
      Logger.error(error)
      return res.status(500).json(error);
    }
  }

  @Delete('/:user_id/:product_id')
  async deleteInvest(@Param('user_id') user_id: number,
                     @Param('product_id') product_id: number,
                     @Res() res: Response ){
    try {
      await this.userService.deleteInvest(user_id, product_id)
      return res.status(200).json(
        this.userService.findAll(user_id)
      )
    } catch (error) {
      Logger.error(error)
      return res.status(500).json(error)
    }
  }
}

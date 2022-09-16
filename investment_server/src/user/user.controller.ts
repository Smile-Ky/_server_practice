import { Body, Controller, Get, Logger, Post, Query, Req, Res} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { userInvestDto } from './DTO/userInvest.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Query('user_id') user_id: string,
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
                  @Req() res: Response){
    try {
      Logger.log('controller')
      return res.status(200).json(
        await this.userService.addInvest(userInvest)
      )
    } catch (error) {
      Logger.error(error)
      return res.status(500).json(error);
    }
  }
}

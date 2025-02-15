import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async authentication(@Body() UserData: {Email: string,Password: string}) : Promise<{access_token: string}>{
    return this.authService.getAccessToken(UserData); 
  }
  @Get("profile")
  @UseGuards(AuthGuard)
  async get_profile(@Req() req: any){
    return this.authService.getAuthProfile(req.userID.userID);
  }
}

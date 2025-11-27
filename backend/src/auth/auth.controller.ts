import { Controller, Post, Body, Get, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { SignUpDto, SignInDto } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    return await this.authService.signUp(signUpDto);
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto);
  }

  @Post('signout')
  async signOut() {
    return await this.authService.signOut();
  }

  @Get('user')
  async getUser(@Headers('authorization') authorization?: string) {
    // 실제 구현에서는 JWT 토큰을 검증해야 합니다
    return await this.authService.getUser();
  }
}

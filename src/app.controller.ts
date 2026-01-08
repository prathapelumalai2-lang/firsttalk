import { Controller, Post, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('auth')
export class AppController {
  constructor(private readonly httpService: HttpService) {}

  @Post('login')
  async login(@Body() body: any) {
    const response = await firstValueFrom(
      this.httpService.post('http://localhost:3001/auth/login', body),
    );

    return response.data;
  }
}

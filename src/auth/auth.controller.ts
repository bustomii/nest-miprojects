import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor() {
        console.log('AuthController instantiated');
    }

    @Get()
    getHello(): string {
        return 'Hello from AuthController';
    }

    @Get('login')
    login(): string {
        return 'Login';
    }

    @Post('register')
    register(): string {
        return 'Register';
    }
}

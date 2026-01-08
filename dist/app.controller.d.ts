import { HttpService } from '@nestjs/axios';
export declare class AppController {
    private readonly httpService;
    constructor(httpService: HttpService);
    login(body: any): Promise<any>;
}

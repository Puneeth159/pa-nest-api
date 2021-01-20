import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Puneeth!';
  }

getAbout(): string {
  return 'Puneeth Annam, Software Developer';
}
}
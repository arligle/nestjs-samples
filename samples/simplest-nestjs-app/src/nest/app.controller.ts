import { Controller, Get } from '@nestjs/common';
import { bye } from './a';

@Controller('/app')
export class AppController {
  @Get('/byee')
  getRootRoute() {
    const b = new bye();
    b.hello();
    return 'hi there!';
  }

  @Get('/bye')
  getByeThere() {
    return 'bye there!';
  }
}

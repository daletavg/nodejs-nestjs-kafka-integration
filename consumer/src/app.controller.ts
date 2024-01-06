import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern('sum') // Our topic name
  calculateSum(@Payload() payload) {
    console.log(payload);
    const { num1, num2 } = payload;
    const sum = num1 + num2;
    // for (let i = 0; i < (100* 100* 100*100*1000 ); i++) {
    //   console.log(1);
    // }
    return `Sum 3of ${num1} and ${num2} is: ${sum}`;
  }
}

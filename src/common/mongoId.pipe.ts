import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isMongoId } from 'class-validator' ;

@Injectable()
export class MongiIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (!isMongoId(value)){
      throw new BadRequestException(`${value} not is a mongoId`);
    }
    return value;
  }
}

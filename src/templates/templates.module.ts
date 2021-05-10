import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TemplateController } from './controller/templates.controller';
import { TemplatesService } from './service/templates.service';
import { Template, TemplateSchema } from './entities/template';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Template.name,
        schema: TemplateSchema,
      },
    ]),
  ],
  controllers: [TemplateController],
  providers: [TemplatesService],
  exports: [TemplatesService],
})
export class TemplateModule {}

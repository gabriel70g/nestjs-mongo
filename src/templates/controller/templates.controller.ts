import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CreateTemplateDto, UpdateTemplateDto } from '../dtos/templates.dtos';
import { TemplatesService } from '../service/templates.service';
import { MongiIdPipe } from './../../common/mongoId.pipe';

@ApiTags('Templates')
@Controller('templates')
export class TemplateController {
  constructor(private templateService: TemplatesService) {}

  @Get()
  @ApiOperation({ summary: 'List of Templates' })
  getAll() {
    return this.templateService.findAll();
  }

  @Get(':templateId')
  getOne(@Param('templateId', MongiIdPipe) templateId: string) {
    return this.templateService.findOne(templateId);
  }

  @Post()
  create(@Body() payload: CreateTemplateDto) {
    return this.templateService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', MongiIdPipe) id: string,
    @Body() payload: UpdateTemplateDto,
  ) {
    return this.templateService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', MongiIdPipe) id: string) {
    return this.templateService.remove(id);
  }
}

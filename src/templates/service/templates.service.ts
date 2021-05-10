import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Template } from '../entities/template';
import { CreateTemplateDto, UpdateTemplateDto } from '../dtos/templates.dtos';

@Injectable()
export class TemplatesService {
  constructor(
    @InjectModel(Template.name) private templateModel: Model<Template>,
  ) {}

  findAll() {
    return this.templateModel.find().exec();
  }

  async findOne(id: string) {
    const template = await this.templateModel.findById(id).exec();

    if (!template) {
      throw new NotFoundException(`Template id #${id} not found`);
    }
    return template;
  }

  create(data: CreateTemplateDto) {
    const newTemplate = new this.templateModel(data);
    return newTemplate.save();
  }

  update(id: string, changes: UpdateTemplateDto) {
    const template = this.templateModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!template) {
      throw new NotFoundException(`Template id #${id} not found`);
    }

    return template;
  }

  remove(id: string) {
    return this.templateModel.findByIdAndDelete(id);
  }
}

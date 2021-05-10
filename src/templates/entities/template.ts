import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Template extends Document {
  @Prop({ required: true })
  html: string;

  @Prop()
  name: string;

  @Prop()
  appName: string;

  @Prop()
  available: string;

  @Prop()
  description: string;

  @Prop()
  templatePather: string;

  @Prop()
  version: string;

  @Prop()
  create: Date;

  @Prop()
  userCreated: string;

  @Prop()
  Update: string;

  @Prop()
  userUpdate: string;
}

export const TemplateSchema = SchemaFactory.createForClass(Template);

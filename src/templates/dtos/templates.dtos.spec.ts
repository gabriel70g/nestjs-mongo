import { CreateTemplateDto,  UpdateTemplateDto} from './templates.dtos';

describe('Template', () => {
  it('should be defined', () => {
    expect(new CreateTemplateDto()).toBeDefined();
  });

  it('should be defined', () => {
    expect(new UpdateTemplateDto()).toBeDefined();
  });
});

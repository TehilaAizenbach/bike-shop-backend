import { Controller, Post, Get, Body } from '@nestjs/common';
import { InfluencersService } from './influencers.service';
import { CreateInfluencerDto } from './dto/create-influencer.dto';
import { Influencer } from './influencer.entity';

@Controller('influencers')
export class InfluencersController {
  constructor(private readonly influencersService: InfluencersService) {}

  @Post()
  createInfluencer(@Body() createInfluencerDto: CreateInfluencerDto): Promise<Influencer> {
    return this.influencersService.createInfluencer(createInfluencerDto);
  }

  @Get()
  getAllInfluencers(): Promise<Influencer[]> {
    return this.influencersService.getAllInfluencers();
  }
}
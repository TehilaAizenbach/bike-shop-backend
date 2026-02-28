import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Influencer } from './influencer.entity';
import { CreateInfluencerDto } from './dto/create-influencer.dto';

@Injectable()
export class InfluencersService {
  constructor(
    @InjectRepository(Influencer)
    private readonly influencersRepository: Repository<Influencer>,
  ) {}

  async createInfluencer(createInfluencerDto: CreateInfluencerDto): Promise<Influencer> {
    const newInfluencer = this.influencersRepository.create(createInfluencerDto);
    return this.influencersRepository.save(newInfluencer);
  }

  async getAllInfluencers(): Promise<Influencer[]> {
    return this.influencersRepository.find();
  }
}
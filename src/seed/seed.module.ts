import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonService } from '../pokemon/pokemon.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from 'src/pokemon/entities/pokemon.entity';
import { PokemonModule } from '../pokemon/pokemon.module';
import { CommonModule } from '../common/common.module';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [SeedController],
  providers: [SeedService, PokemonService, ConfigService],
  imports: [PokemonModule, CommonModule],
})
export class SeedModule {}

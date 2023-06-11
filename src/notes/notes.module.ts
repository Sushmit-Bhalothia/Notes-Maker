import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { RabbitMQService } from './rabbitmq.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService, RabbitMQService],
})
export class NotesModule {}

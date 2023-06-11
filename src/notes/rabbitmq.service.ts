import { Injectable } from '@nestjs/common';
import { connect, Connection, Channel } from 'amqplib';

@Injectable()
export class RabbitMQService {
  private connection: Connection;
  private channel: Channel;

  constructor() {
    this.connectToRabbitMQ();
  }

  async connectToRabbitMQ() {
    this.connection = await connect('amqp://localhost');
    this.channel = await this.connection.createChannel();
  }

  async sendToQueue(queue: string, message: string) {
    await this.channel.assertQueue(queue);
    this.channel.sendToQueue(queue, Buffer.from(message));
  }
}

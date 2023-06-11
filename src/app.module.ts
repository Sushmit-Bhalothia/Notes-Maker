// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { NotesModule } from './notes/notes.module';
// import { NotesController } from './notes/notes.controller';
// import { AuthModule } from './auth/auth.module';

// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { JwtStrategy } from './auth/jwt.strategy';

// @Module({
//   imports: [
//     NotesModule,
//     AuthModule,
//     PassportModule,
//     JwtModule.register({
//       secret: 'your_secret_key', // Replace with your own secret key
//       signOptions: { expiresIn: '1h' }, // Set the token expiration time as desired
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService, JwtStrategy],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [UsersModule, NotesModule, AuthModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

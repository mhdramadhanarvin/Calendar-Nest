import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module'; 

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TodosModule, UsersModule, AuthModule],
  providers: [AuthService],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

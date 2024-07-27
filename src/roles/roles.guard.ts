import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/users/users.service';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(@Inject(UsersService) private usersServ: UsersService,private reflector: Reflector) { }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const roles = this.reflector.get(Roles,context.getHandler());
    const res = context.switchToHttp().getRequest();
    return await this.usersServ.MatchRoles(roles,res.userID.userID);
    
  }
}

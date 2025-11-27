import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

export interface SignUpDto {
  email: string;
  password: string;
}

export interface SignInDto {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private supabaseService: SupabaseService) {}

  async signUp(signUpDto: SignUpDto) {
    const { email, password } = signUpDto;
    return await this.supabaseService.signUp(email, password);
  }

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;
    return await this.supabaseService.signIn(email, password);
  }

  async signOut() {
    return await this.supabaseService.signOut();
  }

  async getUser() {
    return await this.supabaseService.getUser();
  }
}

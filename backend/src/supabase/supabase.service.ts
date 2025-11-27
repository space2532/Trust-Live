import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_ANON_KEY');
    
    if (!supabaseUrl || !supabaseKey) {
      console.warn('⚠️  Supabase URL and Anon Key not provided. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
      console.warn('📝 Create a .env file in the backend directory with your Supabase credentials.');
      console.warn('🔗 Get your credentials from: https://supabase.com/dashboard/project/[your-project]/settings/api');
      
      // 개발용 더미 클라이언트 (실제 사용 불가)
      this.supabase = createClient('https://dummy.supabase.co', 'dummy-key');
      return;
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }

  // 인증 관련 메서드들
  async signUp(email: string, password: string) {
    return await this.supabase.auth.signUp({ email, password });
  }

  async signIn(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({ email, password });
  }

  async signOut() {
    return await this.supabase.auth.signOut();
  }

  async getUser() {
    return await this.supabase.auth.getUser();
  }
}

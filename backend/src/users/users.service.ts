import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export interface User {
  id: string;
  email: string;
  name: string;
  created_at?: string;
  updated_at?: string;
}

@Injectable()
export class UsersService {
  constructor(private supabaseService: SupabaseService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const supabase = this.supabaseService.getClient();
    
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          email: createUserDto.email,
          name: createUserDto.name,
        }
      ])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }

    return data;
  }

  async findAll(): Promise<User[]> {
    const supabase = this.supabaseService.getClient();
    
    const { data, error } = await supabase
      .from('users')
      .select('*');

    if (error) {
      throw new Error(`Failed to fetch users: ${error.message}`);
    }

    return data || [];
  }

  async findOne(id: string): Promise<User | null> {
    const supabase = this.supabaseService.getClient();
    
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // No rows found
      }
      throw new Error(`Failed to fetch user: ${error.message}`);
    }

    return data;
  }

  async findByEmail(email: string): Promise<User | null> {
    const supabase = this.supabaseService.getClient();
    
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // No rows found
      }
      throw new Error(`Failed to fetch user by email: ${error.message}`);
    }

    return data;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    const supabase = this.supabaseService.getClient();
    
    const { data, error } = await supabase
      .from('users')
      .update(updateUserDto)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }

    return data;
  }

  async remove(id: string): Promise<void> {
    const supabase = this.supabaseService.getClient();
    
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Failed to delete user: ${error.message}`);
    }
  }
}

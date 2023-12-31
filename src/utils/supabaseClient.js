import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iibwbjdisltiujjuglkp.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbGdiY21hYmxuZmRzdGVoaXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MjEyOTYsImV4cCI6MjAxODQ5NzI5Nn0.UP9wJ9hugJMWOXJdwVYdwjaH0o5eRNTdQN2PqAoY9s8"; // Set to null to protect credentials, dev to replace with anonymous key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

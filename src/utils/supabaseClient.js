import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iibwbjdisltiujjuglkp.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY; // Set to null to protect credentials, dev to replace with anonymous key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

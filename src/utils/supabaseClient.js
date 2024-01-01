import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iibwbjdisltiujjuglkp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpYndiamRpc2x0aXVqanVnbGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyODkyNTcsImV4cCI6MjAxODg2NTI1N30.WAp_0UanMPoAz9_BxgKfdZfmicCRNu5nhQj-t0Ey4og'; // Set to null to protect credentials, dev to replace with anonymous key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

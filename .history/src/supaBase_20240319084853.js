import { createClient } from '@supabase/supaBase-js';

const supabaseUrl = 'https://nogprrsrgbfgengzjmbe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vZ3BycnNyZ2JmZ2VuZ3pqbWJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTA1MTQsImV4cCI6MjAyNjM2NjUxNH0.BS8SNfk-BTx-mBdtUpuHnjUAeVd69Az4qC5TMXiwxGU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
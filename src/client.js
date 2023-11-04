import { createClient } from '@supabase/supabase-js'

const URL = 'https://drsybvzrjnrkqqyyshdx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyc3lidnpyam5ya3FxeXlzaGR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNjQzMjksImV4cCI6MjAxNDY0MDMyOX0.iyKfa6webKc5iwPmpNMKuGs2_1n-KN1h2wdX7Dg60bs';

export const supabase = createClient(URL, API_KEY);

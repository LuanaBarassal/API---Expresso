const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://YOUR_PROJECT.supabase.co';
const supabaseKey = 'YOUR_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
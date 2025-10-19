 
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://bwwtpasxbkwmnbdrivxm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3d3RwYXN4Ymt3bW5iZHJpdnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMTcxNzIsImV4cCI6MjA3NTc5MzE3Mn0.GiE6DuMK8GW9us4lmuy33GgwBIgbGDY9yB8FvayM4bE"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://quyxyzegdrazjggkjywq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1eXh5emVnZHJhempnZ2tqeXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4MDQwMzIsImV4cCI6MjA0MjM4MDAzMn0.rRpP-Mu50lDldTW9HQenIrEZQw1aNCUNUTDvilnE2kM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

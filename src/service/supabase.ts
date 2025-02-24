// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// .env.local 파일에 환경변수를 설정해 주세요.
const supabaseUrl = "https://bacqhhsfpjjmrslrrjmu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhY3FoaHNmcGpqbXJzbHJyam11Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODQ3NDM0MiwiZXhwIjoyMDU0MDUwMzQyfQ.gvKVvVUIG4Jw4CJRPq2XMHnfk68b6x_QUrhMhrhkdUc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

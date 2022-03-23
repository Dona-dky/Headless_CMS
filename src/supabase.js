import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://slcpbpidbshzyamgvidf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsY3BicGlkYnNoenlhbWd2aWRmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0ODAyOTY5MCwiZXhwIjoxOTYzNjA1NjkwfQ.-UrxWHTh84cMzq2T0H68kxdHusbD6w8FuE-s-99FN1Y";

export const supabase = createClient(supabaseUrl,supabaseKey);

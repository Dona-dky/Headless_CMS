import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://slcpbpidbshzyamgvidf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsY3BicGlkYnNoenlhbWd2aWRmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0ODAzNzU5NywiZXhwIjoxOTYzNjEzNTk3fQ.6UEAxqcLI9AqBgZt4zcXq3Tyujz3J1KMoHuPxi66yxY";

export const supabase = createClient(supabaseUrl,supabaseKey);

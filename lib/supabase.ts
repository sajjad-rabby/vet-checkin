import { createClient, type SupabaseClient } from "@supabase/supabase-js"

import type { Database } from "@/lib/database.types"

/**
 * Create a single supabase client for server-side
 */
export const createServerSupabaseClient = (): SupabaseClient<Database> => {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  )
}

// Create a singleton client for client-side
let clientSupabase: SupabaseClient<Database> | null = null

/**
 * Create a singleton supabase client for client-side use
 */
export const createClientSupabaseClient = (): SupabaseClient<Database> => {
  if (clientSupabase) return clientSupabase

  clientSupabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return clientSupabase
}

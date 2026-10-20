/**
 * Supabase schema types.
 *
 * Generated from the schema this app uses. If your Supabase project differs,
 * regenerate with:
 *
 *   npx supabase gen types typescript \
 *     --project-id <your-project-ref> \
 *     --schema public > lib/database.types.ts
 *
 * The `Database` type is what makes `supabase.from("pets")` return a typed row
 * instead of `never`.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          id: string
          email: string
          password: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          password: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          password?: string
          created_at?: string
        }
        Relationships: []
      }
      appointments: {
        Row: {
          id: string
          pet_id: string | null
          pet_name: string
          owner_name: string
          doctor: string | null
          doctor_id: string | null
          clinic_id: string
          status: string
          appointment_date: string
          cancelled_date: string | null
          cancelled_reason: string | null
          notes: string | null
          cancelled_at: string | null
        }
        Insert: {
          id?: string
          pet_id?: string | null
          pet_name: string
          owner_name: string
          doctor?: string | null
          doctor_id?: string | null
          clinic_id: string
          status?: string
          appointment_date: string
          cancelled_date?: string | null
          cancelled_reason?: string | null
          notes?: string | null
          cancelled_at?: string | null
        }
        Update: {
          id?: string
          pet_id?: string | null
          pet_name?: string
          owner_name?: string
          doctor?: string | null
          doctor_id?: string | null
          clinic_id?: string
          status?: string
          appointment_date?: string
          cancelled_date?: string | null
          cancelled_reason?: string | null
          notes?: string | null
          cancelled_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      clinic_signup_codes: {
        Row: {
          id: string
          code: string
          clinic_name: string
          clinic_email: string
          created_by: string
          expires_at: string
          used: boolean
        }
        Insert: {
          id?: string
          code: string
          clinic_name: string
          clinic_email: string
          created_by?: string
          expires_at: string
          used?: boolean
        }
        Update: {
          id?: string
          code?: string
          clinic_name?: string
          clinic_email?: string
          created_by?: string
          expires_at?: string
          used?: boolean
        }
        Relationships: []
      }
      clinics: {
        Row: {
          id: string
          email: string
          password: string
          name: string | null
          contact_person: string | null
          address: string | null
          city: string | null
          state: string | null
          zip: string | null
          phone: string | null
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          password: string
          name?: string | null
          contact_person?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          zip?: string | null
          phone?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          password?: string
          name?: string | null
          contact_person?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          zip?: string | null
          phone?: string | null
          created_at?: string
        }
        Relationships: []
      }
      codes: {
        Row: {
          id: string
          clinic_id: string
          code: string
          created_at: string
          expires_at: string
          active: boolean
        }
        Insert: {
          id?: string
          clinic_id: string
          code: string
          created_at?: string
          expires_at: string
          active?: boolean
        }
        Update: {
          id?: string
          clinic_id?: string
          code?: string
          created_at?: string
          expires_at?: string
          active?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "codes_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      doctors: {
        Row: {
          id: string
          clinic_id: string
          name: string
          active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          clinic_id: string
          name: string
          active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          clinic_id?: string
          name?: string
          active?: boolean
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "doctors_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      password_reset_tokens: {
        Row: {
          id: string
          clinic_id: string
          token: string
          used: boolean
          expires_at: string
        }
        Insert: {
          id?: string
          clinic_id: string
          token: string
          used?: boolean
          expires_at: string
        }
        Update: {
          id?: string
          clinic_id?: string
          token?: string
          used?: boolean
          expires_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "password_reset_tokens_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      pets: {
        Row: {
          id: string
          clinic_id: string
          owner_name: string
          pet_name: string
          species: string
          is_sick: boolean
          sick_appointment: boolean
          general_info: string | null
          coughing: boolean
          sneezing: boolean
          vomiting: boolean
          diarrhea: boolean
          doctor_id: string | null
          diet_info: string | null
          prevention_type: string | null
          discuss_risks: boolean | null
          recent_vet_clinic: string | null
          recent_vet_reason: string | null
          records_permission: boolean | null
          medication_details: string | null
          supplement_details: string | null
          cancelled: boolean
          cancelled_doctor: string | null
          cancelled_at: string | null
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          clinic_id: string
          owner_name: string
          pet_name: string
          species: string
          is_sick?: boolean
          sick_appointment?: boolean
          general_info?: string | null
          coughing?: boolean
          sneezing?: boolean
          vomiting?: boolean
          diarrhea?: boolean
          doctor_id?: string | null
          diet_info?: string | null
          prevention_type?: string | null
          discuss_risks?: boolean | null
          recent_vet_clinic?: string | null
          recent_vet_reason?: string | null
          records_permission?: boolean | null
          medication_details?: string | null
          supplement_details?: string | null
          cancelled?: boolean
          cancelled_doctor?: string | null
          cancelled_at?: string | null
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          clinic_id?: string
          owner_name?: string
          pet_name?: string
          species?: string
          is_sick?: boolean
          sick_appointment?: boolean
          general_info?: string | null
          coughing?: boolean
          sneezing?: boolean
          vomiting?: boolean
          diarrhea?: boolean
          doctor_id?: string | null
          diet_info?: string | null
          prevention_type?: string | null
          discuss_risks?: boolean | null
          recent_vet_clinic?: string | null
          recent_vet_reason?: string | null
          records_permission?: boolean | null
          medication_details?: string | null
          supplement_details?: string | null
          cancelled?: boolean
          cancelled_doctor?: string | null
          cancelled_at?: string | null
          status?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pets_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pets_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: Record<string, never>
    Functions: {
      /** Deletes a clinic and every row that references it, in one transaction. */
      delete_clinic_cascade: {
        Args: {
          clinic_id_param: string
          clinic_email_param: string
        }
        Returns: undefined
      }
    }
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"]

export type TablesInsert<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"]

export type TablesUpdate<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"]

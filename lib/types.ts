/**
 * Shared application types.
 *
 * These were previously re-declared (with subtle differences) in seven
 * separate components, which produced incompatible-but-same-named types.
 * Everything now derives from the definitions in this file.
 */

/** A veterinarian attached to a clinic. */
export interface Doctor {
  id: string
  name: string
  active?: boolean
  created_at?: string
}

/** A single-use check-in code issued by a clinic. */
export interface Code {
  id: string
  code: string
  created_at: string
  expires_at: string
  active: boolean
}

/** A tenant clinic. */
export interface Clinic {
  id: string
  email: string
  name?: string | null
  contact_person?: string | null
  address?: string | null
  city?: string | null
  state?: string | null
  zip?: string | null
  phone?: string | null
  created_at?: string
}

/** A clinic as shown on the profile page. */
export interface ClinicProfile {
  id: string
  email: string
  name?: string | null
  contact_person?: string | null
  address?: string | null
  city?: string | null
  state?: string | null
  zip?: string | null
  phone?: string | null
}

/** A clinic row as consumed by the dashboard. */
export interface ClinicData {
  id: string
  email: string
  name?: string
  [key: string]: any
}

/**
 * A patient.
 *
 * Columns that are only populated by some queries (embedded `doctor`,
 * lifecycle timestamps) are optional; everything the check-in form requires
 * is always present.
 */
export interface Pet {
  id: string
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
  status?: string
  created_at?: string
  doctor_id?: string | null
  doctor?: { name: string } | null
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
}

/** Aggregate counters shown on the admin dashboard. */
export interface ClinicStats {
  totalPets: number
  activePets: number
  doctorsCount: number
  activeDoctors: number
  petsToday: number
}

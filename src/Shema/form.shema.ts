import * as z from "zod";

export const admissionSchema = z.object({
  // --- Student Information ---
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dob: z.string().min(1, "Date of birth is required"),
  mobile: z.string().optional(),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  currentAddress: z.string().min(1, "Current address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),
  class: z.string().min(1, "Please select a class"),
  gender: z.enum(["male", "female"]).optional(),

  // --- Family & Emergency Details ---
  fatherName: z.string().optional(),
  fatherMobile: z.string().optional(),
  fatherEmail: z.string().email().optional().or(z.literal("")),
  motherName: z.string().optional(),
  motherMobile: z.string().optional(),
  motherEmail: z.string().email().optional().or(z.literal("")),
  emergencyContactName: z.string().optional(),
  emergencyContactNumber: z.string().optional(),
  relationWithStudent: z.string().optional(),
  healthInfo: z.string().optional(),

  // --- Private Tutors ---
  tutor1Name: z.string().optional(),
  tutor1Mobile: z.string().optional(),
  tutor1Email: z.string().email().optional().or(z.literal("")),
  
  tutor2Name: z.string().optional(),
  tutor2Mobile: z.string().optional(),
  tutor2Email: z.string().email().optional().or(z.literal("")),
  
  tutor3Name: z.string().optional(),
  tutor3Mobile: z.string().optional(),
  tutor3Email: z.string().email().optional().or(z.literal("")),

  // --- Parents Information ---
  parentFirstName: z.string().min(1, "Parent first name is required"),
  parentLastName: z.string().min(1, "Parent last name is required"),
  parentMobile: z.string().min(1, "Parent mobile number is required"),
  parentEmail: z.string().email("Invalid parent email address"),
  verificationCode: z.string().min(6, "Verification code must be 6 digits"),
});

export type AdmissionFormValues = z.infer<typeof admissionSchema>;
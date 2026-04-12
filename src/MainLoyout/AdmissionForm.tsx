"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { admissionSchema } from "@/Shema/form.shema";

export default function AdmissionForm() {
  const form = useForm({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      gender: "male",
      class: "",
    },
  });

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          
          {/* --- STUDENT INFORMATION --- */}
          <Card className="border-t-4 border-t-[#4185F4] shadow-xl rounded-3xl overflow-hidden border-none bg-white">
            <CardHeader className="bg-slate-50/80 border-b border-slate-100">
              <CardTitle className="text-[#4185F4] font-black uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-2 h-2 bg-[#4185F4] rounded-full" />
                Student Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-8">
              
              {/* Basic Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-slate-700">First Name <span className="text-red-500">*</span></FormLabel>
                    <FormControl><Input placeholder="Enter First Name" {...field} className="rounded-xl h-12 bg-slate-50/50" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-slate-700">Last Name <span className="text-red-500">*</span></FormLabel>
                    <FormControl><Input placeholder="Enter Last Name" {...field} className="rounded-xl h-12 bg-slate-50/50" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="dob" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-slate-700">Date Of Birth <span className="text-red-500">*</span></FormLabel>
                    <FormControl><Input type="date" {...field} className="rounded-xl h-12 bg-slate-50/50" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="mobile" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-slate-700">Mobile Number</FormLabel>
                    <FormControl><Input placeholder="01XXX-XXXXXX" {...field} className="rounded-xl h-12 bg-slate-50/50" /></FormControl>
                  </FormItem>
                )} />

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-slate-700">Student Email</FormLabel>
                    <FormControl><Input placeholder="student@example.com" {...field} className="rounded-xl h-12 bg-slate-50/50" /></FormControl>
                  </FormItem>
                )} />

                <FormField control={form.control} name="class" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-slate-700">Class and Medium <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl h-12 bg-slate-50/50">
                          <SelectValue placeholder="Choose Class Medium" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="class1">Class - 1 English</SelectItem>
                        <SelectItem value="class2">Class - 2 English</SelectItem>
                        <SelectItem value="class3">Class - 3 English</SelectItem>
                        <SelectItem value="class4">Class - 4 English</SelectItem>
                        <SelectItem value="class5">Class - 5 English</SelectItem>
                        <SelectItem value="class6">Class - 6 English</SelectItem>
                        <SelectItem value="class7">Class - 7 English</SelectItem>
                        <SelectItem value="class7b">Class - 7(B) English</SelectItem>
                        <SelectItem value="class7a">Class - 7(A) English</SelectItem>
                        <SelectItem value="inactive">Inactive English</SelectItem>
                        <SelectItem value="summer">Summer English</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              {/* Addresses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="currentAddress" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-slate-700">Current Address <span className="text-red-500">*</span></FormLabel>
                    <FormControl><Textarea placeholder="Full Current Address" {...field} className="rounded-2xl bg-slate-50/50" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="permanentAddress" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-slate-700">Permanent Address <span className="text-red-500">*</span></FormLabel>
                    <FormControl><Textarea placeholder="Full Permanent Address" {...field} className="rounded-2xl bg-slate-50/50" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              {/* Gender & Photo Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <FormField control={form.control} name="gender" render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="font-bold text-slate-700">Gender <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                        <FormItem className="flex items-center space-x-2 space-y-0 bg-white px-6 py-3 rounded-xl border border-slate-100 shadow-sm">
                          <FormControl><RadioGroupItem value="male" /></FormControl>
                          <FormLabel className="font-bold">Male</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0 bg-white px-6 py-3 rounded-xl border border-slate-100 shadow-sm">
                          <FormControl><RadioGroupItem value="female" /></FormControl>
                          <FormLabel className="font-bold">Female</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )} />

                <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-6 bg-slate-50/30">
                  <Upload className="text-[#4185F4] mb-2" size={24} />
                  <p className="text-[10px] font-black text-slate-400 uppercase">Browse Student Photo</p>
                  <Input type="file" className="mt-2 text-xs" />
                </div>
                
              </div>

              {/* --- FAMILY & TUTOR DETAILS --- */}
              <div className="pt-8 border-t border-slate-100 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FormField control={form.control} name="fatherName" render={({ field }) => (
                    <FormItem><FormLabel className="font-bold text-slate-700">Father's Name</FormLabel><FormControl><Input {...field} className="rounded-xl bg-slate-50/50" /></FormControl></FormItem>
                  )} />
                  <FormField control={form.control} name="fatherMobile" render={({ field }) => (
                    <FormItem><FormLabel className="font-bold text-slate-700">Father's Mobile Number</FormLabel><FormControl><Input {...field} className="rounded-xl bg-slate-50/50" /></FormControl></FormItem>
                  )} />
                  <FormField control={form.control} name="fatherEmail" render={({ field }) => (
                    <FormItem><FormLabel className="font-bold text-slate-700">Father's Email Address</FormLabel><FormControl><Input type="email" {...field} className="rounded-xl bg-slate-50/50" /></FormControl></FormItem>
                  )} />
                  
                  <FormField control={form.control} name="motherName" render={({ field }) => (
                    <FormItem><FormLabel className="font-bold text-slate-700">Mother's Name</FormLabel><FormControl><Input {...field} className="rounded-xl bg-slate-50/50" /></FormControl></FormItem>
                  )} />
                  <FormField control={form.control} name="motherMobile" render={({ field }) => (
                    <FormItem><FormLabel className="font-bold text-slate-700">Mother's Mobile Number</FormLabel><FormControl><Input {...field} className="rounded-xl bg-slate-50/50" /></FormControl></FormItem>
                  )} />
                  <FormField control={form.control} name="motherEmail" render={({ field }) => (
                    <FormItem><FormLabel className="font-bold text-slate-700">Mother's Email Address</FormLabel><FormControl><Input type="email" {...field} className="rounded-xl bg-slate-50/50" /></FormControl></FormItem>
                  )} />

                  <FormField control={form.control} name="emergencyContactName" render={({ field }) => (
                    <FormItem><FormLabel className="font-bold text-slate-700">Emergency Contact Name</FormLabel><FormControl><Input {...field} className="rounded-xl bg-slate-50/50" /></FormControl></FormItem>
                  )} />
                  <FormField control={form.control} name="emergencyContactNumber" render={({ field }) => (
                    <FormItem><FormLabel className="font-bold text-slate-700">Emergency Contact Number</FormLabel><FormControl><Input {...field} className="rounded-xl bg-slate-50/50" /></FormControl></FormItem>
                  )} />
                  <FormField control={form.control} name="relationWithStudent" render={({ field }) => (
                    <FormItem><FormLabel className="font-bold text-slate-700">Relation with Student</FormLabel><FormControl><Input {...field} className="rounded-xl bg-slate-50/50" /></FormControl></FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="healthInfo" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-slate-700">Allergy / Health Information</FormLabel>
                    <FormControl><Textarea placeholder="Any specific health details..." {...field} className="rounded-xl bg-slate-50/50 min-h-[80px]" /></FormControl>
                  </FormItem>
                )} />

                {/* Tutors Row */}
                <div className="space-y-4">
                   <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Tutor Information</p>
                   {[1, 2, 3].map((num) => (
                    <div key={num} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-50/30 rounded-2xl border border-slate-100">
                      <FormField control={form.control} name={`tutor${num}Name` as any} render={({ field }) => (
                        <FormItem><FormLabel className="text-xs font-bold">Tutor {num} Name</FormLabel><FormControl><Input {...field} className="bg-white h-10" /></FormControl></FormItem>
                      )} />
                      <FormField control={form.control} name={`tutor${num}Mobile` as any} render={({ field }) => (
                        <FormItem><FormLabel className="text-xs font-bold">Tutor {num} Mobile</FormLabel><FormControl><Input {...field} className="bg-white h-10" /></FormControl></FormItem>
                      )} />
                      <FormField control={form.control} name={`tutor${num}Email` as any} render={({ field }) => (
                        <FormItem><FormLabel className="text-xs font-bold">Tutor {num} Email</FormLabel><FormControl><Input type="email" {...field} className="bg-white h-10" /></FormControl></FormItem>
                      )} />
                    </div>
                   ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* --- PARENTS INFORMATION SECTION --- */}
          <Card className="border-t-4 border-t-slate-900 shadow-xl rounded-3xl overflow-hidden border-none bg-white">
            <CardHeader className="bg-slate-50/80 border-b border-slate-100">
              <CardTitle className="text-slate-900 font-black uppercase tracking-widest text-xs">
                Parents Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormField control={form.control} name="parentFirstName" render={({ field }) => (
                <FormItem><FormLabel className="font-bold text-slate-700">First Name <span className="text-red-500">*</span></FormLabel>
                <FormControl><Input placeholder="Parent's First Name" {...field} className="rounded-xl h-12 bg-slate-50/50" /></FormControl></FormItem>
              )} />
              <FormField control={form.control} name="parentLastName" render={({ field }) => (
                <FormItem><FormLabel className="font-bold text-slate-700">Last Name <span className="text-red-500">*</span></FormLabel>
                <FormControl><Input placeholder="Parent's Last Name" {...field} className="rounded-xl h-12 bg-slate-50/50" /></FormControl></FormItem>
              )} />
              <FormField control={form.control} name="parentMobile" render={({ field }) => (
                <FormItem><FormLabel className="font-bold text-slate-700">Mobile Number <span className="text-red-500">*</span></FormLabel>
                <FormControl><Input placeholder="Mobile Number" {...field} className="rounded-xl h-12 bg-slate-50/50" /></FormControl></FormItem>
              )} />
              <FormField control={form.control} name="parentEmail" render={({ field }) => (
                <FormItem><FormLabel className="font-bold text-slate-700">Email <span className="text-red-500">*</span></FormLabel>
                <FormControl><Input type="email" placeholder="Email" {...field} className="rounded-xl h-12 bg-slate-50/50" /></FormControl></FormItem>
              )} />

              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <FormItem className="md:col-span-1">
                  <FormLabel className="font-bold text-slate-700">Email Verification Code <span className="text-red-500">*</span></FormLabel>
                  <FormControl><Input placeholder="Code" className="rounded-xl h-12 bg-slate-50/50" /></FormControl>
                </FormItem>
                <Button type="button" className="h-12 bg-slate-800 rounded-xl font-bold">Send Code</Button>
                <Button type="button" className="h-12 bg-[#4185F4] rounded-xl font-bold">Verify</Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4 pt-6">
            <Button type="button" variant="outline" className="h-14 px-8 rounded-2xl font-bold" onClick={() => form.reset()}>Reset Form</Button>
            <Button type="submit" className="h-14 px-12 rounded-2xl font-black bg-[#4185F4] hover:bg-blue-600 shadow-lg shadow-[#4185F4]/20">Submit Application</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
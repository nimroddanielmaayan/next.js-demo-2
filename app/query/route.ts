// This route isn't working, I'm not sure if Supabase is connected correctly to the project
// Maybe get back to this later. This is in chapter 6 of the tutorial

// import { createClient } from "@supabase/supabase-js";
// import { NextResponse } from "next/server";

// // Initialize Supabase client
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error("Missing Supabase environment variables");
// }

// const supabase = createClient(supabaseUrl, supabaseKey);

// export async function GET() {
//   try {
//     const data = await listInvoices();
//     return NextResponse.json({ data });
//   } catch (error) {
//     console.error("Database Error:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch invoice data" },
//       { status: 500 }
//     );
//   }
// }

// async function listInvoices() {
//   const { data, error } = await supabase
//     .from("invoices")
//     .select("amount, customers(name)")
//     .eq("amount", 666)
//     .join("customers", "invoices.customer_id", "customers.id");

//   if (error) throw error;
//   return data;
// }

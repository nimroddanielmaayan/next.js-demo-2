// This route isn't working, I'm not sure if Supabase is connected correctly to the project
// Maybe get back to this later. This is in chapter 6 of the tutorial

// import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";

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
//   const data = await sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

//   return data.rows;
// }

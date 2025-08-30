// An example query from the database

import { db } from "@vercel/postgres";

const client = await db.connect();

export async function GET() {
  try {
    const result = await client.sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;

    return Response.json({
      message: "Query executed successfully",
      data: result.rows,
      count: result.rowCount
    });
  } catch (error) {
    console.error("Database query error:", error);
    return Response.json(
      {
        error: "Failed to execute query",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

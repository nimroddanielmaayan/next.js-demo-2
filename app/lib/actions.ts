// In this file, we'll concentrate all of the "server actions" of the application
// Reminder: "Server Actions" are functions that are executed on the server. They create a "POST" API endpoint behinf the scenes, and use it to send data to the server

"use server";

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status")
  };
  // Test it out:
  console.log(rawFormData);
}

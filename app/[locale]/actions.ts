'use server';

import { appendFile } from 'fs/promises';
import { join } from 'path';

export async function submitScientificReport(prevState: any, formData: FormData) {
  // TODO: Validate and handle file upload
  const reportFile = formData.get('reportFile');
  const authorName = formData.get('authorName');

  console.log('Submitting report for:', authorName);
  console.log('File:', reportFile);

  // Simulate a delay
  await new Promise(res => setTimeout(res, 1000));

  // In a real app, you would upload the file to a storage service
  // and save the metadata to a database.

  return { success: true, message: 'Report submitted successfully!' };
}

export async function registerForAttendance(prevState: any, formData: FormData) {
  // TODO: Validate form data
  const name = formData.get('name');
  const email = formData.get('email');

  console.log('Registering attendance for:', name, email);
  
  // In a real app, you would save this to a database.
  // For this example, we'll append to a CSV file.
  try {
    const csvLine = `${new Date().toISOString()},${name},${email}\n`;
    // Using process.cwd() to get the root of the project
    await appendFile(join(process.cwd(), 'registrations.csv'), csvLine);
  } catch (error) {
    console.error('Failed to save registration:', error);
    return { success: false, message: 'Failed to save registration.' };
  }
  return { success: true, message: 'Registered for attendance successfully! You will now be redirected.' };
}
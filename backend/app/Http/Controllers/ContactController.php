<?php

namespace App\Http\Controllers;

use App\Mail\ContactSubmittedAdmin;
use App\Mail\ContactSubmittedClient;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email',
                'phone' => 'nullable|string|max:20',
                'message' => 'required|string|max:5000',
            ]);

            // Save to database
            $contact = Contact::create($validated);

            // Send email to client
            Mail::to($contact->email)->send(new ContactSubmittedClient($contact));

            // Send email to admin (use your admin email from env)
            $adminEmail = config('mail.admin_email', 'admin@yourcompany.com');
            Mail::to($adminEmail)->send(new ContactSubmittedAdmin($contact));

            return response()->json([
                'success' => true,
                'message' => 'Contact form submitted successfully! We\'ll be in touch soon.',
                'data' => [
                    'reference_id' => str_pad($contact->id, 6, '0', STR_PAD_LEFT),
                    'submitted_at' => $contact->created_at->toDateTimeString(),
                ]
            ], 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            Log::error('Contact form submission failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while processing your request. Please try again later.'
            ], 500);
        }
    }

    // Optional: Get all contacts (for admin panel)
    public function index()
    {
        $contacts = Contact::latest()->paginate(20);
        return response()->json($contacts);
    }

    // Optional: Get single contact
    public function show(Contact $contact)
    {
        return response()->json($contact);
    }

    // Optional: Update contact status
    public function updateStatus(Request $request, Contact $contact)
    {
        $validated = $request->validate([
            'status' => 'required|in:new,read,replied,closed'
        ]);

        $contact->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Contact status updated successfully',
            'data' => $contact
        ]);
    }
}

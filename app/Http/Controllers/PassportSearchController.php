<?php

namespace App\Http\Controllers;

use App\Models\PDFToSQLite;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PassportSearchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {


        return Inertia::render('Passport/Index');

        // return Inertia::render('Profile/Edit', [
        //     'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
        //     'status' => session('status'),
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {

        $query = PDFToSQLite::query(); // Start with a base query

        $requestNumber = $request->input('requestNumber');
        $firstName = $request->input('firstName');
        $middleName = $request->input('middleName');
        $lastName = $request->input('lastName');

        // Dynamically add conditions based on the presence of input values
        if (!empty($requestNumber)) {
            $query->where('requestNumber', 'LIKE', '%'. $requestNumber. '%');
        }
        if (!empty($firstName)) {
            $query->orWhere('firstName', 'LIKE', '%'. $firstName. '%');
        }
        if (!empty($middleName)) {
            $query->orWhere('middleName', 'LIKE', '%'. $middleName. '%');
        }
        if (!empty($lastName)) {
            $query->orWhere('lastName', 'LIKE', '%'. $lastName. '%');
        }

        $passports = $query->get(); // Execute the query

            // dd($passports);

        return Inertia::render(
            'Passport/Show',
            [
                'passports' => $passports,
                'search' => $request->all(), // Pass all search parameters back to the view
            ]
        );


        // $search = $request->input('applicationNumber');
        // $passports = PDFToSQLite::where('applicationNumber', 'LIKE', '%' . $search . '%')->get();




        // return Inertia::render(
        //     'Passport/Show',
        //     [
        //         'passports' => $passports,
        //         'search' => $search,
        //     ]
        // );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
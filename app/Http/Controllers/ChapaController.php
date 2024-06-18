<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Chapa\Chapa\Facades\Chapa as Chapa;
use Illuminate\Http\Request;

class ChapaController extends Controller
{
    /**
     * Initialize Rave payment process
     * @return void
     */
    protected $reference;

    public function __construct()
    {
        $this->reference = Chapa::generateReference();
    }
    public function initialize(Request $request)
    {
        //This generates a payment reference
        $reference = $this->reference;


        $request->validate([
            'amount' => 'required|numeric|min:10',
            'firstName' => 'required|alpha:ascii|max:255|min:3',
            'lastName' => 'required|alpha:ascii|max:255|min:3',
            'phoneNumber' => 'required|digits:10|numeric|starts_with:09,07',
            'plan' => 'required',
        ]);









        // dd($request->all());

        // Enter the details of the payment
        $data = [

            'amount' => $request->amount,
            'email' => 'natnaelbirhanu22@gmail.com',
            'tx_ref' => $reference,
            'currency' => "ETB",
            'callback_url' => route('callback', [$reference]),
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'phone_number' => $request->phoneNumber,
            "customization" => [
                "title" => 'Chapa test',
                "description" => "the test "
            ]
        ];



        //first put a stop at here and check your info (need to be same as your Chapa profile)
        // dd($data);
        $payment = Chapa::initializePayment($data);
        //now Check if the payment returns 'success' or 'fail'
        dd($payment);

        if ($payment['status'] !== 'success') {
            // notify something went wrong
            dd($payment);
            return;
        }
        // dd($payment);


        //if payment is successful
        return redirect($payment['data']['checkout_url']);
    }

    /**
     * Obtain Rave callback information
     * @return void
     */
    public function callback($reference, Request $request)
    {

        $data = Chapa::verifyTransaction($reference);
        dd($data);

        //if payment is successful
        if ($data['status'] ==  '   ') {

            $user = $request->user();
            $subscription = $user->subscription ?: new Subscription();
            $subscription->user_id = $user->id;
            $subscription->plan = $request->plan;
            $subscription->save();
            dd($data);
        } else {
            //oopsie something ain't right.
        }
    }
}

<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Smalot\PdfParser\Parser;


class PDFToSQLiteJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $filePath;
    private $records;

    /**
     * Create a new job instance.
     *
     * @param string $pdfPath
     * @return void
     */
    public function __construct($filePath)
    {
        $this->filePath = $filePath;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            Log::info("In Dispatch");

            set_time_limit(300);
            $parser = new Parser();
            // $pdf = $parser->parseFile('C:\Users\natna\Documents\genbot_28.pdf');
            $pdf = $parser->parseFile($this->filePath);
            Log::info("Got content");

            $text = $pdf->getText();
        } catch (\Exception $e) {
            // Handle the exception, e.g., log the error, return an error response
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
        Log::info("passed the location check");

        $records = [];
        $i = 0;
        foreach (explode("\n", $text) as $line) {
            if (!empty($line)) { // Skip empty lines
                $i++;
                if ($i > 2) { // Skip the first two lines
                    [$numberId, $firstName, $middleName, $lastName, $applicationNumber] = explode(" ", trim($line), 5);
                    if (!empty($numberId) && !empty($firstName) && !empty($middleName) && !empty($lastName) && !empty($applicationNumber)) {
                        $id = $numberId;
                        $firstName = $firstName;
                        $middleName = $middleName;
                        $lastName = $lastName;
                        $applicationNumber = $applicationNumber;
                        $dateOfPublish = "04. JUN. 2024"; // Assuming all records have the same publish date
                        $records[] = compact('id', 'firstName', 'middleName', 'lastName', 'applicationNumber', 'dateOfPublish');
                    } else {
                        Log::warning('Skipping line due to missing data: ' . $line);
                    }
                }
            }
        }
        Log::info("Before the insert");

        $resp = DB::table('p_d_f_to_s_q_lites')->insert($records);
        Log::info("After the insert");
    }
}

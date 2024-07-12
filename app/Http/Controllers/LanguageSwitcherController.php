<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class LanguageSwitcherController extends Controller
{

    public function switch($code)
    {
        App::setLocale($code);
        session()->put('locale', $code);
        return redirect()->back();
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DebugTestController extends Controller
{
    public function show(Request $request){
        $a = 1000;
        $b = 1200;

        $c = $a + $b * 3;
        $c += 23;

        return [
            "a" => $a,
            "b" => $b,
            "c" => $c
        ];
    }
}

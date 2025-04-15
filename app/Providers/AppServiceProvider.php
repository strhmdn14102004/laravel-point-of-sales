<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    
    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        if (app()->environment('production')) {
            error_reporting(E_ALL & ~E_WARNING);
        }
    }
    
}

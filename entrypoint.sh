#!/bin/bash
npm run dev &
php artisan serve --host=0.0.0.0 --port=8000

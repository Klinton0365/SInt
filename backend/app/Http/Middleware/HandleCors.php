<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HandleCors
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Handle preflight OPTIONS request
        if ($request->getMethod() === "OPTIONS") {
            return response()->json([], 200, $this->getCorsHeaders());
        }

        $response = $next($request);

        // Add CORS headers to response
        foreach ($this->getCorsHeaders() as $key => $value) {
            $response->headers->set($key, $value);
        }

        return $response;
    }

    /**
     * Get CORS headers
     */
    private function getCorsHeaders(): array
    {
        return [
            'Access-Control-Allow-Origin' => $this->getAllowedOrigin(),
            'Access-Control-Allow-Methods' => 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
            'Access-Control-Allow-Headers' => 'Content-Type, X-Requested-With, Authorization, Accept, Origin',
            'Access-Control-Allow-Credentials' => 'true',
            'Access-Control-Max-Age' => '86400', // 24 hours
        ];
    }

    /**
     * Get allowed origin based on environment
     */
    private function getAllowedOrigin(): string
    {
        $origin = request()->headers->get('Origin');
        
        $allowedOrigins = [
            'http://localhost:3000',
            'http://localhost:3001',
            'http://127.0.0.1:3000',
            config('app.frontend_url'),
            // Add production URLs here
        ];

        // Check if origin is in allowed list
        if (in_array($origin, array_filter($allowedOrigins))) {
            return $origin;
        }

        // Default to first allowed origin
        return $allowedOrigins[0];
    }
}
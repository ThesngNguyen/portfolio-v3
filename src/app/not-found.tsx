'use client'

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <html style={{ width: '100vw', height: '100vh' }}>
            <body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', backgroundColor: '#f0f0f0' }}>
                <div>
                    <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>404 - Page Not Found</p>
                    <p style={{ marginBottom: '2rem' }}>Sorry, the page you are looking for does not exist.</p>
                    <Link href="/">
                        <p style={{ color: '#1e90ff', textDecoration: 'underline' }}>&larr; Go to Home</p>
                    </Link>
                </div>
            </body>
        </html>
    );
}
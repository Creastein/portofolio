"use client";

import { useCursor } from '../hooks/useCursor';

export default function CustomCursor() {
    useCursor();

    return (
        <>
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>
        </>
    );
}

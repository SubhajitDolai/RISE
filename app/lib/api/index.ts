export async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'An error occurred');
    }

    return response.json();
}

export type APIResponse<T> = {
    success: boolean;
    data?: T;
    error?: string;
};

export function handleAPIError(error: unknown): APIResponse<never> {
    console.error('API Error:', error);
    return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
}

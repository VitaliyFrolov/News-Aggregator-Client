'use server';
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000';
const API_URL = `${SERVER_URL}/api`;

const serverFetch = {
    async _createRequest<TResponse>(url: string, options?: RequestInit) {
        const headers = new Headers({
            ...options?.headers,
        });

        if (typeof options?.body === 'string') {
            headers.append('Content-Type', 'application/json');
        }

        const res = await fetch(`${API_URL}${url}`, {
            ...options,
            headers,
        });

        const bodyText = (await res.text()) || JSON.stringify(null);

        if (!res.ok) {
            throw JSON.parse(bodyText);
        }

        return JSON.parse(bodyText) as TResponse;
    },

    async POST<TResponse>(url: string, options?: RequestInit) {
        return serverFetch._createRequest<TResponse>(url, {
            ...options,
            method: 'POST',
        });
    },

    async GET<TResponse>(url: string, options?: RequestInit) {
        return serverFetch._createRequest<TResponse>(url, {
            ...options,
            method: 'GET',
            cache: 'no-cache'
        });
    },

    async PATCH<TResponse>(url: string, options?: RequestInit) {
        return serverFetch._createRequest<TResponse>(url, {
            ...options,
            method: 'PATCH',
        });
    },
};

const { POST, GET, PATCH } = serverFetch;
export { POST, GET, PATCH };
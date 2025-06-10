const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL
const backendPort = process.env.NEXT_PUBLIC_BACKEND_PORT


export const baseURL = new URL(backendURL as string)
baseURL.port = backendPort as string


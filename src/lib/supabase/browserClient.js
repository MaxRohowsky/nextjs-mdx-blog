import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
    createBrowserClient(
        'https://bekowpfzavpgpymlsdgp.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJla293cGZ6YXZwZ3B5bWxzZGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NjAwOTUsImV4cCI6MjAzMTAzNjA5NX0.JWJWrKdA1o_1gcB4LZbqRid4nJjRrK_gGPJQjbuzqgA'
      );    
}



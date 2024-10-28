import handlers from "@/app/api/auth/[...nextauth]/route"; // Correct relative path

export const { GET, POST } = handlers; // Destructuring GET and POST from handlers


export async function GET(request: Request) {
    // Handle GET requests
    return new Response("GET method from auth");
  }
  
  export async function POST(request: Request) {
    // Handle POST requests
    const data = await request.json();
    return new Response(`POST method with data: ${JSON.stringify(data)}`);
}

// //import handlers from "@/app/api/auth/[...nextauth]/auth"
// import handlers from "../auth/"; // Assuming `auth.ts` is in the same directory

// // export const { GET, POST } = handlers;

// // app/api/auth/auth.ts
// // app/api/auth/route.ts
  
const greeting = {
    greeting: "Hello World"
}

export default function handler(request, response) {
    response.status(200).json(greeting);
}
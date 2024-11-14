export const login = async (email: string, passwprd: string) => {
    const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            passwprd: passwprd
        }),
    });

    if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
    };

    const data = await response.json();

    console.log(data)
};
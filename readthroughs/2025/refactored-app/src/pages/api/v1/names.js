export default async function handler(_req, res) {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = await fetch(url);
        data = (await response.json());
    }
    catch (err) {
        console.log(err);
        return res.status(500);
    }
    const names = data.map((item) => ({
        id: item.id,
        name: item.name,
    }));
    return res.status(200).json(names);
}

export const fetchNames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data = [];
    let names = [];
    try {
        const response = await fetch(url);
        data = (await response.json());
    }
    catch (_err) {
        names = [];
        console.log(_err);
    }
    names = data.map((item) => ({
        id: item.id,
        name: item.name,
    }));
    return names;
};

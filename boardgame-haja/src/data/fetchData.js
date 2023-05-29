async function fetchData() {
    try {
        const response = await fetch('http://localhost:3001/game');
        if(!response.ok) {
            throw new Error("failed to retrieve boardgame.json");
        }
        const json = await response.json();
        return json;
    } catch(error) {
        console.error(error);
    }
}

async function getDataById(id) {
    const data = await fetchData();
    return data[id-1];
}

export {fetchData, getDataById};


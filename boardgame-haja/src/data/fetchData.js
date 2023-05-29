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
    try {
        const response = await fetch(`http://localhost:3001/game/${id}`);
        if(!response.ok) {
            throw new Error("failed to retrieve boardgame.json");
        }
        const json = await response.json();
        return json;
    } catch(error) {
        console.error(error);
    }
}

async function getDataByKeyword(keyword) {
    try {
        const response = await fetch(`http://localhost:3001/game?name_like=${keyword}`);
        if(!response.ok) {
            throw new Error("failed to retrieve boardgame.json");
        }
        const json = await response.json();
        return json;
    } catch(error) {
        console.error(error);
    }
}

export {fetchData, getDataById, getDataByKeyword};


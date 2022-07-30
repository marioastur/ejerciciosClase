const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"

    async function getAllData(){
        try{
            const response = await fetch(url)
            const marvelJson = await response.json()
            return marvelJson      
        } catch (error) {
            console.log('Error : ' + error)
        }
    }
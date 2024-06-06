class Service {
    async getData(url){
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
}
export default new Service()

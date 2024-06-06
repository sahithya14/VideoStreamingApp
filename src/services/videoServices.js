import Service from "./services"


class VideoServices  {

    async getVideoList(url){
        const data = await Service.getData(url)
        return data;
    }
}

export default new VideoServices()
import axios from "axios"

const riot = axios.create({
  baseURL: "https://kr.api.riotgames.com/"
})

export const getSummoner = async (name: string) => {
  try {
    const res = await riot.get(`lol/summoner/v4/summoners/by-name/${name}`, {
      params: { api_key: "RGAPI-dbe08e63-edc3-4efa-a119-759c702ac782" }
    })
    return res
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}

export const getTier = async (id: string) => {
  try {
    const res = await riot.get(`lol/league/v4/entries/by-summoner/${id}`, {
      params: { api_key: "RGAPI-dbe08e63-edc3-4efa-a119-759c702ac782" }
    })
    return res
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}

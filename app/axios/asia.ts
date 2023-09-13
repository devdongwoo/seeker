import axios from "axios"

const asia = axios.create({
  baseURL: "https://asia.api.riotgames.com/"
})

export const getPuuidMatches = async (
  userPuuid: string,
  start: number,
  count: number
) => {
  try {
    const res = await asia.get(
      `lol/match/v5/matches/by-puuid/${userPuuid}/ids`,
      {
        params: {
          start,
          count,
          api_key: "RGAPI-dbe08e63-edc3-4efa-a119-759c702ac782"
        }
      }
    )
    return res
  } catch (error) {
    if (error instanceof Error) alert(error.message)
  }
}

export const getMatcheData = async (matcheId: string) => {
  try {
    const res = await asia.get(`lol/match/v5/matches/${matcheId}`, {
      params: { api_key: "RGAPI-dbe08e63-edc3-4efa-a119-759c702ac782" }
    })
    return res
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}

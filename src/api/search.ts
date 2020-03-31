import axios from 'axios'

const platforms = {
  PC: 'battle',
  XBOX: 'xbl',
  PS4: 'psn'
}

const URL_BASE: string = 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform'
// :platform/gamer/:username/profile/type/mp'

export function searchPlayerData (platform: string, username: string): Promise<any> {
  return axios({
    url: `${URL_BASE}/${platforms[platform]}/gamer/${username}/profile/type/mp`
  })
}

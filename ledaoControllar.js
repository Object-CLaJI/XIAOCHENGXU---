import { services } from '../ledaoService'

/**
 * 会员控制器
 * member handler
 */
class ledaoControllar extends services {

  constructor() {
    super()
  }

  getBannerList = this.getBannerList
}

export const LedaoControllar = new ledaoControllar()

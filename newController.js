import { services } from '../service'

/**
 * 会员控制器
 * member handler
 */
class newController extends services {

  constructor() {
    super()
  }

  getAllCate = this.getAllCate

  getActivityDetail = this.getActivityDetail

  getStageActivity = this.getStageActivity

  codeToSession = this.codeToSession
  
  getAllCate = this.getAllCate

  codeToSession = this.codeToSession

  getUserInfoEncript = this.getUserInfoEncript

  getAllBanner = this.getAllBanner
  
  checkIfRegister = this.checkIfRegister

  getOrderDetail = this.getOrderDetail

  getMyOrder = this.getMyOrder

  openWXPay = this.openWXPay
}

export const NewController = new newController()

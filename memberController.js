import { services } from '../service'

/**
 * 会员控制器
 * member handler
 */
class memberController extends services {

  constructor() {
    super()
  }

  postMessage = this.postMessage

  getMessage = this.getMessage

  getOpenId = this.getOpenId

  checkIfRegister = this.checkIfRegister

  decodePhone = this.decodePhone

  register = this.register

  getUserInfo = this.getUserInfo

  getUserVillageCurrent = this.getUserVillageCurrent

  getBannerList = this.getBannerList

  getActivityList = this.getActivityList

  getNoticeList = this.getNoticeList

  getMyComplains = this.getMyComplains

  getMyCars = this.getMyCars

  editCarInfo = this.editCarInfo

  delCarInfo = this.delCarInfo

  getMyRepairs = this.getMyRepairs

  getRepairTypeList = this.getRepairTypeList

  getMyHouseList = this.getMyHouseList

  getCommunityList = this.getCommunityList

  getVillageList = this.getVillageList

  getBuildingList = this.getBuildingList

  getHouseList = this.getHouseList

  editMyHouse = this.editMyHouse

  getHouseDetail = this.getHouseDetail

  removeByHouse = this.removeByHouse
  
  editRepair = this.editRepair

  validateFace = this.validateFace

  getComplainConfig = this.getComplainConfig

  editComplain = this.editComplain

  getComplainDetail = this.getComplainDetail

  joinActive = this.joinActive

  sendVeryCode = this.sendVeryCode

  checkVerycode = this.checkVerycode

  customerEdit = this.customerEdit

  addVisitor = this.addVisitor

  myVisitor = this.myVisitor

  reCode = this.reCode

  getmyCode = this.getmyCode

  getMyFaceHistory = this.getMyFaceHistory

  getmyActivity = this.getmyActivity

  getMyCarHistory = this.getMyCarHistory

  getphoneValid = this.getphoneValid
}

export const MemberController = new memberController()

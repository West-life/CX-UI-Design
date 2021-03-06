import {errorMap} from "../../../error/error"
import {getQuery} from "../../../../utils/index"

const customerMap = {
  //init customer search - 用户编辑初始化，用户数据 =>（ label 显示在select中 ）
  "customerEditInit": {
    "resultCode": "200",
    "resultMsg": "slect-远程搜索获取用户列表数据成功",
    "resultData": [
      {
        address: "天堂软件园 ",
        age: 0,
        areaId: null,
        areaName: null,
        autoForm: null,
        birthday: "1991-06-08",
        certificate: "330106199106086666",
        certificateType: "11",
        certificateTypeName: "护照",
        cityId: null,
        cityName: null,
        company: "新视窗",
        companyAddress: "天堂软件园",
        companyPhone: "18768183457",
        companyProperyty: "0",
        customerResultId: null,
        education: "4",
        educationName: "本科",
        email: "398755817@qq.com",
        emergencyContact: "朱莉莉",
        emergencyContactPhone: "13634110454",
        enterpriseId: 1,
        familyInfoVo: null,
        fax: "",
        gender: "1",
        genderName: "女",
        handlerId: null,
        interestsIdList: null,
        interestsIds: "0,9,2",
        interestsNames: "美食,旅游,音乐",
        legalRepresentative: "",
        linkman: "",
        linkmanPhone: "",
        mainHouseList: null,
        maritalStatus: "0",
        maritalStatusName: "未婚",
        mobile: "13634110454",
        nation: "10",
        nationName: "汉族",
        nativePlace: "浙江杭州",
        organizationId: 3,
        ownerBaseInfoOwnerId: null,
        ownerId: 68,
        ownerLevel: "0",
        ownerLevelName: "VIP",
        ownerName: "朱莉莉",
        ownerProperty: "0",
        ownerPropertyName: "业主",
        ownerRelationship: null,
        ownerType: "0",
        ownerTypeName: "个人",
        peopleCounts: 0,
        phone: "0714-88888888",
        picUrl: "http://192.168.1.200:81/M00/00/01/wKgByFo7dheANPp5AACfVU2HxiU455.jpg",
        pictures: null,
        precinctHouse: null,
        precinctId: 0,
        projectId: 0,
        provinceCityArea: null,
        provinceId: null,
        provinceName: null,
        qq: "771401093",
        region: "0",
        regionName: "中国",
        regionalInfo: "",
        registeredAddress: "",
        remark: "前端匠心铸造者",
        streetId: null,
        streetName: null,
        tradeId: "0",
        tradeName: "",
      }
    ]
  },
  //customer search - 用户搜索
  "customerSearch": {
    "resultCode": "200",
    "resultMsg": "slect-远程搜索获取用户列表数据成功",
    "resultData": [
      {
        address: "天堂软件园 ",
        age: 0,
        areaId: null,
        areaName: null,
        autoForm: null,
        birthday: "1991-10-22",
        certificate: "330106199110224015",
        certificateType: "11",
        certificateTypeName: "护照",
        cityId: null,
        cityName: null,
        company: "新视窗",
        companyAddress: "天堂软件园",
        companyPhone: "18768183457",
        companyProperyty: "0",
        customerResultId: null,
        education: "4",
        educationName: "高中",
        email: "771401093@qq.com",
        emergencyContact: "高仓雄",
        emergencyContactPhone: "13869709965",
        enterpriseId: 1,
        familyInfoVo: null,
        fax: "",
        gender: "1",
        genderName: "男",
        handlerId: null,
        interestsIdList: null,
        interestsIds: "0,9,2",
        interestsNames: "美食,旅游,音乐",
        legalRepresentative: "",
        linkman: "",
        linkmanPhone: "",
        mainHouseList: null,
        maritalStatus: "0",
        maritalStatusName: "未婚",
        mobile: "18768183457",
        nation: "10",
        nationName: "汉族",
        nativePlace: "浙江杭州",
        organizationId: 3,
        ownerBaseInfoOwnerId: null,
        ownerId: 66,
        ownerLevel: "0",
        ownerLevelName: "VIP",
        ownerName: "高仓雄",
        ownerProperty: "0",
        ownerPropertyName: "业主",
        ownerRelationship: null,
        ownerType: "0",
        ownerTypeName: "个人",
        peopleCounts: 0,
        phone: "0714-88888888",
        picUrl: "http://192.168.1.200:81/M00/00/01/wKgByFo7dheANPp5AACfVU2HxiU455.jpg",
        pictures: null,
        precinctHouse: null,
        precinctId: 0,
        projectId: 0,
        provinceCityArea: null,
        provinceId: null,
        provinceName: null,
        qq: "771401093",
        region: "0",
        regionName: "中国",
        regionalInfo: "",
        registeredAddress: "",
        remark: "前端匠心铸造者",
        streetId: null,
        streetName: null,
        tradeId: "0",
        tradeName: "",
      }
    ]
  },
}
export default {
  //init customer search - 用户编辑初始化，用户数据 =>（ label 显示在select中 ）
  customerEditInit: config => {
    return customerMap['customerEditInit'];
  },
  //remote - mocktest, data form remoteTest
  customerSearch: config => {
    const url = encodeURI(config.url);
    const customerName = getQuery(url, "customerName"); //query - areaLevel
    const isDeveloper = getQuery(url, "isDeveloper");   //query - areaCode
    if (decodeURI(decodeURI(customerName)) === '高仓雄') {
      return customerMap['customerSearch'];
    }
    if (decodeURI(decodeURI(customerName)) === '朱莉莉') {
      return customerMap['customerEditInit'];
    }
    else {
      return errorMap.customerSearch;
    }
  },
}

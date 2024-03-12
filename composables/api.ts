import httpRequest from './http'

function getCommon() {
  return httpRequest.get({ url: '/addons/cms/api.common/init' })
}
function getCaptcha(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.common/captcha', params })
}
function getEmsSend(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.ems/send', data: params })
}
function getSmsSend(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.sms/send', data: params })
}
function getArchives(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.archives/index', params })
}
function getArchivesDetail(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.archives/detail', params })
}
function getArchivesVote(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.archives/vote', data: params })
}
function getArchivesOrder(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.archives/order', data: params })
}
function getChannel(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.archives/get_channel', params })
}
function getChannelFields(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.archives/get_channel_fields', params })
}
function archivesPost(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.archives/archives_post', data: params })
}
function myArchives(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.archives/my', params })
}
function deleteArchives(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.archives/delete', data: params })
}
function getUserIndex() {
  return httpRequest.get({ url: '/addons/cms/api.user/index' })
}
function getUserProfile(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.user/profile', data: params })
}
function goUserLogout(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.user/logout', params })
}
function goUserAvatar(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.user/profile', data: params })
}
function getUserInfo(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.user/profile', data: params })
}
function getMyComment(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.my/comment', params })
}
function getMyboutus(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.my/aboutus', params })
}
function getOrder(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.my/order', params })
}
function getMyagree(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.my/agreement', params })
}
function goCommentPost(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.comment/post', data: params })
}
function goCommentIndex(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.comment/index', data: params })
}
function goLogin(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.login/login', data: params })
}
function mobilelogin(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.login/mobilelogin', data: params })
}
function goRegister(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.login/register', data: params })
}
function goResetpwd(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.login/resetpwd', data: params })
}
function goAppLogin(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.login/appLogin', data: params })
}
function getAuthUrl(params: any) {
  return httpRequest.get({ url: '/addons/third/api/getAuthUrl', params })
}
function goAuthCallback(params: any) {
  return httpRequest.post({ url: '/addons/third/api/callback', data: params })
}
function getBindList(params: any) {
  return httpRequest.get({ url: '/addons/third/api/getBindList', params })
}
function goUnbind(params: any) {
  return httpRequest.post({ url: '/addons/third/api/unbind', data: params })
}
function goThirdAccount(params: any) {
  return httpRequest.post({ url: '/addons/third/api/account', data: params })
}
function getMoneyLogs(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.the_logs/money', params })
}
function getScoreLogs(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.the_logs/score', params })
}
function selectpage(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.common/selectpage', params })
}
function search(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.search/index', params })
}
function signinConfig(params: any) {
  return httpRequest.get({ url: '/addons/signin/api.index/index', params })
}
function monthSign(params: any) {
  return httpRequest.get({ url: '/addons/signin/api.index/monthSign', params })
}
function dosign(params: any) {
  return httpRequest.get({ url: '/addons/signin/api.index/dosign', params })
}
function fillup(params: any) {
  return httpRequest.get({ url: '/addons/signin/api.index/fillup', params })
}
function signRank(params: any) {
  return httpRequest.get({ url: '/addons/signin/api.index/rank', params })
}
function signLog(params: any) {
  return httpRequest.get({ url: '/addons/signin/api.index/signLog', params })
}
function formField(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.diyform/index', params })
}
function postForm(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.diyform/postForm', data: params })
}
function formShow(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.diyform/show', params })
}
function tagIndex(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.tag/index', params })
}
function getCategory(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.common/getCategory', params })
}
function getSigned(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.user/getSigned', data: params })
}
function getVipIndex(params: any) {
  return httpRequest.get({ url: '/addons/vip/api.index/index', params })
}
function goVipSubmit(params: any) {
  return httpRequest.get({ url: '/addons/vip/api.order/submit', params })
}
function getCollection(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.collection/index', params })
}
function addCollection(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.collection/create', data: params })
}
function delCollection(params: any) {
  return httpRequest.post({ url: '/addons/cms/api.collection/delete', data: params })
}
function specialList(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.special/special', params })
}
function specialIndex(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.special/index', params })
}
function getPage(params: any) {
  return httpRequest.get({ url: '/index.php/api/Page/index', params })
}
function getPageDetail(params: any) {
  return httpRequest.get({ url: '/addons/cms/api.page/detail', params })
}

export {
  getCommon,
  getCaptcha,
  getEmsSend,
  getSmsSend,
  getArchives,
  getArchivesDetail,
  getArchivesVote,
  getArchivesOrder,
  getChannel,
  getChannelFields,
  archivesPost,
  myArchives,
  deleteArchives,
  getUserIndex,
  getUserProfile,
  goUserLogout,
  goUserAvatar,
  getUserInfo,
  getMyComment,
  getMyboutus,
  getOrder,
  getMyagree,
  goCommentPost,
  goCommentIndex,
  goLogin,
  mobilelogin,
  goRegister,
  goResetpwd,
  goAppLogin,
  getAuthUrl,
  goAuthCallback,
  getBindList,
  goUnbind,
  goThirdAccount,
  getMoneyLogs,
  getScoreLogs,
  selectpage,
  search,
  signinConfig,
  monthSign,
  dosign,
  fillup,
  signRank,
  signLog,
  formField,
  postForm,
  formShow,
  tagIndex,
  getCategory,
  getSigned,
  getVipIndex,
  goVipSubmit,
  getCollection,
  addCollection,
  delCollection,
  specialList,
  specialIndex,
  getPageDetail,
  getPage,
}

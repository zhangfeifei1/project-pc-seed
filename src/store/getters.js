const getters = {
  sidebar: state => state.app.sidebar,
  // device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  // token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  // access_token: state => state.user.access_token,
  tag: state => state.tags.tag,
  website: state => state.common.website,
  userInfo: state => state.user.userInfo,
  theme: state => state.common.theme,
  themeName: state => state.common.themeName,
  isShade: state => state.common.isShade,
  isCollapse: state => state.common.isCollapse,
  keyCollapse: (state, getters) => getters.screen > 1 ? getters.isCollapse : false,
  screen: state => state.common.screen,
  isLock: state => state.common.isLock,
  isFullScren: state => state.common.isFullScren,
  lockPasswd: state => state.common.lockPasswd,
  tagList: state => state.tags.tagList,
  tagWel: state => state.tags.tagWel,
  access_token: state => state.user.access_token,
  refresh_token: state => state.user.refresh_token,
  expires_in: state => state.user.expires_in,
  roles: state => state.user.roles,
  permissions: state => state.user.permissions,
  menu: state => state.user.menu,
  menuAll: state => state.user.menuAll,
  logsList: state => state.logs.logsList,
  logsLen: state => state.logs.logsList.length || 0,
  logsFlag: (state, getters) => getters.logsLen === 0
}
export default getters

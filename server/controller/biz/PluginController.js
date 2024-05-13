import {autowired, Result, RestController} from '#guoba.framework';
import {GuobaSupportMap} from '#guoba.platform'

export default class PluginController extends RestController {

  pluginService = autowired('pluginService')

  constructor(app) {
    super('/plugin', app)
  }

  registerRouters() {
    // 获取plugin列表
    this.get('/list', this.getPlugins)
    // 获取plugin readme
    this.get('/readme', this.getPluginReadme)
    // 安装plugin
    this.get('/install', this.installPlugin)
    // 卸载plugin
    this.get('/uninstall', this.uninstallPlugin)
    // 获取plugin icon（直接显示图片）
    this.get('/s/:pluginName/icon', this.getPluginIcon)
    // 获取plugin配置数据
    this.get('/s/:pluginName/config', this.getPluginConfig)
    // 设置plugin配置数据
    this.put('/s/:pluginName/config', this.setPluginConfig)
  }

  /**
   * 获取插件列表
   * @param req.query.force 是否清空缓存强制刷新
   * @return {Promise<Result>}
   */
  async getPlugins(req) {
    let {force} = req.query
    force = force === 'true'
    let data = await this.pluginService.getPlugins(force)
    return Result.ok(data)
  }

  async getPluginReadme(req) {
    let {link, force} = req.query
    force = force === 'true'
    let text = await this.pluginService.getReadmeText(link, force)
    return Result.ok(text)
  }

  async installPlugin(req) {
    let {link} = req.query
    let text = await this.pluginService.installPlugin(link)
    return Result.ok(text)
  }

  async uninstallPlugin(req) {
    let {name} = req.query
    let text = await this.pluginService.uninstallPlugin(name)
    return Result.ok(text)
  }

  getSupport(pluginName) {
    let supportObject = GuobaSupportMap.get(pluginName)
    if (!supportObject) {
      throw '该插件不支持锅巴'
    }
    return supportObject
  }

  // 获取插件icon（如果有）
  getPluginIcon(req, res) {
    let {pluginName} = req.params
    let supportObject = this.getSupport(pluginName)
    let {pluginInfo} = supportObject
    if (!pluginInfo || !pluginInfo.iconPath) {
      return Result.error('该插件没有配置iconPath')
    }
    res.sendFile(pluginInfo.iconPath)
    return Result.VOID
  }

  // 获取插件配置数据（如果有）
  async getPluginConfig(req) {
    let {pluginName} = req.params
    let supportObject = this.getSupport(pluginName)
    let {configInfo} = supportObject
    let getConfigData = configInfo?.getConfigData
    if (typeof getConfigData !== 'function') {
      return Result.error('该插件没有配置getConfigData')
    }
    return Result.ok(await getConfigData())
  }

  // 设置插件配置数据
  async setPluginConfig(req) {
    let {pluginName} = req.params
    let supportObject = this.getSupport(pluginName)
    let {configInfo} = supportObject
    let setConfigData = configInfo?.setConfigData
    if (typeof setConfigData !== 'function') {
      return Result.error('该插件没有配置setConfigData')
    }
    let flag = await setConfigData(req.body, {Result})
    if (flag instanceof Result) {
      return flag
    }
    return Result.ok(flag)
  }

}

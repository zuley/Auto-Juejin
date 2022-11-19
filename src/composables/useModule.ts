interface ModuleParams {
  rules: string[]
  load: Function
}

// 模块载入函数
export default function(opt: ModuleParams) {
  if (!opt.rules.some(rule => RuleMatch(rule))) return
  if (typeof opt.load === 'function') opt.load()
}
// 规则匹配函数
function RuleMatch (rule: string): boolean {
  if (rule === '*') return true
  if (rule === location.pathname) return true
  return false
}
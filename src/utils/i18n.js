export function generateSkinColor(color) {
  const hasKey = this.$te('skin.' + color); //$te这个方法用以判断需要翻译的key在你提供的语言包(messages)中是否存在.
  const translatedTitle = this.$t('skin.' + color); // $t :this method from vue-i18n, inject in @/lang/index.js

  if (hasKey) {
    return translatedTitle
  }
  return color
}
export function generateTitle(title) {
  const hasKey = this.$te('route.' + title);
  const translatedTitle = this.$t('route.' + title); // $t :this method from vue-i18n, inject in @/lang/index.js
  if (hasKey) {
    return translatedTitle
  }
  return title
}

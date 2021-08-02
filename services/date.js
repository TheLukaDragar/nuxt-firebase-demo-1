import moment from 'moment'
  // without this line it didn't work

var locale = window.navigator.userLanguage || window.navigator.language;
moment.locale(locale)

export default {
    toDate(value) {
        if (!value) {
            return ''
        }
        return moment.unix(value.seconds).format('D MMM YYYY')
    }
}
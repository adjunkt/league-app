import ApplicationAdapter from 'league/adapters/application'

export default ApplicationAdapter.extend({
  urlForQueryRecord(query, ...args) {
    if (query.me) {
      delete query.me
      return `${this._super(query, ...args)}/me`
    }

    return this._super(query, ...args)
  }
})

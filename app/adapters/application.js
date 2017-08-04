import DS from 'ember-data'
import HasManyQuery from 'ember-data-has-many-query'
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'
import ENV from 'league/config/environment'

const {
  JSONAPIAdapter
} = DS

const {
  RESTAdapterMixin
} = HasManyQuery

export default JSONAPIAdapter.extend(DataAdapterMixin, RESTAdapterMixin, {
  coalesceFindRequests: true,
  host: ENV.apiHost,
  authorizer: 'authorizer:oauth2-bearer'
})

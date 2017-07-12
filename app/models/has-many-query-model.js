import DS from 'ember-data'
import HasManyQuery from 'ember-data-has-many-query'

const {
  Model
} = DS

const { ModelMixin } = HasManyQuery

export default Model.extend(ModelMixin, {})

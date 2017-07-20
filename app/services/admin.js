import EmberAdminServiceAdmin from 'ember-admin/services/admin'

export default EmberAdminServiceAdmin.extend({
  includedModels: [
    'user',
    'league',
    'season',
    'organization',
    'sport',
    'team',
    'game'
  ],
  namespace: ''
})

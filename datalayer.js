// datalayer.js
// -------------------------------------
// This file defines the GTM dataLayer presets for testing.
// You can edit the existing presets or add new ones.
// Each preset is a { name, code } object.
//
// To add a new preset:
// - Use full JavaScript syntax (e.g., dataLayer.push(...))
// - The `name` will be used as button label
// -------------------------------------

window.gtmPresets = [
  {
    name: 'data',
    code: `dataLayer.push({
  'event': 'data',
  'user': {
    'user_id_subscriberkey': 'f12cd820-5cd3-4c52-841f-e4263b9e9104',
    'user_id_sfmc': '0034I00002ffwLeQAI',
    'logged_in': true
  },
  'site': {
    'site_environment': 'dev',
    'site_version': '1.2.3',
    'site_language': 'da'
  },
  'page': {
    'page_category': 'category',
    'page_id': '123-abc-987'
  },
  'cart': {
    'cart_id': '9871234',
    'cart_product_lines': 2,
    'cart_quantity': 3,
    'cart_value': 130.70,
    'items': [
      {
        'product_ean': '4741532901552',
        'product_id': '3243322',
        'category_id': '987123',
        'product_price': 50.10,
        'product_quantity': 1,
        'product_value': 100.20,
        'product_available': true
      },
      {
        'product_ean': '1234567890123',
        'product_id': '987654321',
        'category_id': 'sim123',
        'product_price': 30.50,
        'product_quantity': 2,
        'product_value': 30.50,
        'product_available': false
      }
    ]
  }
});`
  },

  {
    name: 'page_view',
    code: `dataLayer.push({
  'event': 'page_view'
});`
  },

  {
    name: 'category_view',
    code: `dataLayer.push({
  'event': 'category_view',
  'category': {
    'category_id': 'abc-123',
    'product_sorting': 'relevance'
  }
});`
  },

  // You can add new presets here:
  { name: 'custom_1', code: '' },
  { name: 'custom_2', code: '' },
  { name: 'custom_3', code: '' }

];


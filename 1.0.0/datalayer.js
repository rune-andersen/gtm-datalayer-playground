const presetEvents = [
// ===== START data =====  
{
  name: "data",
  code: `dataLayer.push({
  event: 'data',
  user: {
    user_id_subscriberkey: 'f12cd820-5cd3-4c52-841f-e4263b9e9104',
    user_id_sfmc: '0034I00002ffwLeQAI',
    logged_in: true
  },
  site: {
    site_environment: 'dev',
    site_version: '1.2.3',
    site_language: 'da'
  },
  page: {
    page_category: 'category',
    page_id: '123-abc-987'
  },
  cart: {
    cart_id: '9871234',
    cart_product_lines: 2,
    cart_quantity: 3,
    cart_value: 130.70,
    items: [
      {
        product_ean: '4741532901552',
        product_id: '3243322',
        category_id: '987123',
        product_price: 50.10,
        product_quantity: 1,
        product_value: 100.20,
        product_available: true
      },
      {
        product_ean: '1234567890123',
        product_id: '987654321',
        category_id: 'sim123',
        product_price: 30.50,
        product_quantity: 2,
        product_value: 30.50,
        product_available: false
      }
    ]
  }
});`
},
// ===== END data =====

// ===== START page_view =====  
{
  name: "page_view",
  code: `dataLayer.push({
  event: 'page_view'
});`
},
// ===== END page_view =====

// ===== START category_view =====  
{
  name: "category_view",
  code: `dataLayer.push({
  event: 'category_view',
  category: {
    category_id: 'abc-123',
    product_sorting: 'relevance'
  }
});`
},
// ===== END category_view =====

// ===== START login =====  
{
  name: "login",
  code: `dataLayer.push({
  event: 'login',
  auth: {
    login_method: 'MitID'
  }
});`
},
// ===== END login =====

// ===== START logout =====  
{
  name: "logout",
  code: `dataLayer.push({
  event: 'logout',
  auth: {
    logout_reason: 'timeout'
  }
});`
},
// ===== END logout =====
	
// ===== START login_fail =====  
{
  name: "login_fail",
  code: `dataLayer.push({
  event: 'login_fail',
  auth: {
    login_method: 'MitID',
	  login_error_message: 'Unknows user',
	  login_error_reason: 'abc-123'
  },
  user: {
	  logged_in: false
	}
});`
},
// ===== END login_fail =====

// ===== START product_view =====  
{
  name: "product_view",
  code: `dataLayer.push({
  event: 'product_view',
  product_view: {
    product_ean: '4741532901552',
    product_id: '12304543',
    category_id: '5103',
    product_price: 1299.00,
    product_available: true
  }
});`
},
// ===== END product_view =====

// ===== START search =====  
{
  name: "search",
  code: `dataLayer.push({
  event: 'search',
   'search': {
    'product_sorting': 'Relevance',
    'search_term': 'panik',
    'search_term_lenght': 5,
     'search_results': 34
  }
});`
},
// ===== END search =====

// ===== START cart_view =====  
{
  name: "cart_view",
  comment: "Always push a data event BEFORE a cart_view",
  code: `dataLayer.push({
  event: 'cart_view'
});`
},
// ===== END cart_view =====
	
];

window.gtmPresets = presetEvents;

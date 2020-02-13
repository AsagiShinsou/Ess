var Ess = {
    
    
    
    itemsView : function(essType){
        if (essType === undefined){
            essType = 'good-view';
        }
        var imp = [];
        $('div[data-ess="'+essType+'"]').each(function(k,v){
            var name        = (($(v).attr('data-name') != '') ? $(v).attr('data-name') : 'Не указано');
            var id          = (($(v).attr('data-id') != '') ? $(v).attr('data-id') : 'Не указано');
            var price       = (($(v).attr('data-price') != '') ? $(v).attr('data-price') : 'Не указано');
            var brand       = (($(v).attr('data-brand') != '') ? $(v).attr('data-brand') : 'Не указано');
            var category    = (($(v).attr('data-category') != '') ? $(v).attr('data-category') : 'Не указано');
            var variant     = (($(v).attr('data-variant') != '') ? $(v).attr('data-variant') : 'Не указано');
            var list        = (($(v).attr('data-list') != '') ? $(v).attr('data-list') : 'Не указано');
            var position    = (($(v).attr('data-position') != '') ? $(v).attr('data-position') : 'Не указано');
            var article     = (($(v).attr('data-article') != '') ? $(v).attr('data-article') : 'Не указано');
            
            imp.push({
               'name': name,       // Name or ID is required.
               'id': article,
               'price': price,
               'brand': brand,
               'category': category,
               'variant': variant,
               'list': list,
               'position': position
             });
        });
        
        
        dataLayer.push({
          'ecommerce': {
            'currencyCode': 'EUR',                       // Local currency is optional.
            'impressions': imp
          }
        });
        
    },
    
    itemClick : function(id, url){
                    
       
        var v  = $('[data-ess="good-view"][data-id="'+id+'"]');
       
        
        var name        = (($(v).attr('data-name') != '') ? $(v).attr('data-name') : 'Не указано');
        var price       = (($(v).attr('data-price') != '') ? $(v).attr('data-price') : 'Не указано');
        var brand       = (($(v).attr('data-brand') != '') ? $(v).attr('data-brand') : 'Не указано');
        var category    = (($(v).attr('data-category') != '') ? $(v).attr('data-category') : 'Не указано');
        var variant     = (($(v).attr('data-variant') != '') ? $(v).attr('data-variant') : 'Не указано');
        var list        = (($(v).attr('data-list') != '') ? $(v).attr('data-list') : 'Не указано');
        var position    = (($(v).attr('data-position') != '') ? $(v).attr('data-position') : 'Не указано');
        var article     = (($(v).attr('data-article') != '') ? $(v).attr('data-article') : 'Не указано');
         
        dataLayer.push({
            'event': 'productClick',
            'ecommerce': {
              'click': {
                'actionField': {'list': list},      
                'products': [{
                  'name': name,                     
                  'id': article,
                  'price': price,
                  'brand': brand,
                  'category': category,
                  'variant': variant,
                  'position': position
                 }]
               }
             },
             'eventCallback': function() {
               
               //document.location = url;
               
             }
          });
                       
    },
    
    itemView : function(id){
        
        
        var v  = $('[data-ess="good-view"][data-id="'+id+'"]');
       
        
        var name        = (($(v).attr('data-name') != '') ? $(v).attr('data-name') : 'Не указано');
       
        var price       = (($(v).attr('data-price') != '') ? $(v).attr('data-price') : 'Не указано');
        var brand       = (($(v).attr('data-brand') != '') ? $(v).attr('data-brand') : 'Не указано');
        var category    = (($(v).attr('data-category') != '') ? $(v).attr('data-category') : 'Не указано');
        var variant     = (($(v).attr('data-variant') != '') ? $(v).attr('data-variant') : 'Не указано');
        var list        = (($(v).attr('data-list') != '') ? $(v).attr('data-list') : 'Не указано');
        var position    = (($(v).attr('data-position') != '') ? $(v).attr('data-position') : 'Не указано');
        var article     = (($(v).attr('data-article') != '') ? $(v).attr('data-article') : 'Не указано');

        
        
        dataLayer.push({
          'ecommerce': {
            'detail': {
              'actionField': {'list': list},    // 'detail' actions have an optional list property.
              'products': [{
                'name': name,         // Name or ID is required.
                'id': article,
                'price': price,
                'brand': brand,
                'category': category,
                'variant': variant
               }]
             }
           }
        });
    },
    
    addToCart : function(id, qty){
        
        var v  = $('[data-ess="good-view"][data-id="'+id+'"]');
       
        
        var name        = (($(v).attr('data-name') != '') ? $(v).attr('data-name') : 'Не указано');
       
        var price       = (($(v).attr('data-price') != '') ? $(v).attr('data-price') : 'Не указано');
        var brand       = (($(v).attr('data-brand') != '') ? $(v).attr('data-brand') : 'Не указано');
        var category    = (($(v).attr('data-category') != '') ? $(v).attr('data-category') : 'Не указано');
        var variant     = (($(v).attr('data-variant') != '') ? $(v).attr('data-variant') : 'Не указано');
        var list        = (($(v).attr('data-list') != '') ? $(v).attr('data-list') : 'Не указано');
        var position    = (($(v).attr('data-position') != '') ? $(v).attr('data-position') : 'Не указано');
        var article     = (($(v).attr('data-article') != '') ? $(v).attr('data-article') : 'Не указано');
        
        
        dataLayer.push({
          'event': 'addToCart',
          'ecommerce': {
            'currencyCode': 'EUR',
            'add': {                                // 'add' actionFieldObject measures.
              'products': [{                        //  adding a product to a shopping cart.
                'name': name,
                'id': article,
                'price': price,
                'brand': brand,
                'category': category,
                'variant': variant,
                'quantity': qty
               }]
            }
          }
        });
    },
    
    removeFromCart : function(id, qty){
        
        if (qty === undefined){
            qty = 1;
        }
        
        var v  = $('[data-ess="good-view"][data-id="'+id+'"]');
       
        
        var name        = (($(v).attr('data-name') != '') ? $(v).attr('data-name') : 'Не указано');
       
        var price       = (($(v).attr('data-price') != '') ? $(v).attr('data-price') : 'Не указано');
        var brand       = (($(v).attr('data-brand') != '') ? $(v).attr('data-brand') : 'Не указано');
        var category    = (($(v).attr('data-category') != '') ? $(v).attr('data-category') : 'Не указано');
        var variant     = (($(v).attr('data-variant') != '') ? $(v).attr('data-variant') : 'Не указано');
        var list        = (($(v).attr('data-list') != '') ? $(v).attr('data-list') : 'Не указано');
        var position    = (($(v).attr('data-position') != '') ? $(v).attr('data-position') : 'Не указано');
        var article     = (($(v).attr('data-article') != '') ? $(v).attr('data-article') : 'Не указано');

        
        dataLayer.push({
          'event': 'removeFromCart',
          'ecommerce': {
            'remove': {                               // 'remove' actionFieldObject measures.
              'products': [{                          //  removing a product to a shopping cart.
                  'name': name,
                  'id': article,
                  'price': price,
                  'brand': brand,
                  'category': category,
                  'variant': variant,
                  'quantity': qty
              }]
            }
          }
        });
    },
    
    checkout : function(step, url){
        
        var imp = [];
        $('div[data-ess="good-view"]').each(function(k,v){
            var name        = (($(v).attr('data-name') != '') ? $(v).attr('data-name') : 'Не указано');
            var id          = (($(v).attr('data-id') != '') ? $(v).attr('data-id') : 'Не указано');
            var price       = (($(v).attr('data-price') != '') ? $(v).attr('data-price') : 'Не указано');
            var brand       = (($(v).attr('data-brand') != '') ? $(v).attr('data-brand') : 'Не указано');
            var category    = (($(v).attr('data-category') != '') ? $(v).attr('data-category') : 'Не указано');
            var variant     = (($(v).attr('data-variant') != '') ? $(v).attr('data-variant') : 'Не указано');
            var list        = (($(v).attr('data-list') != '') ? $(v).attr('data-list') : 'Не указано');
            var qty         = (($(v).attr('data-qty') != '') ? $(v).attr('data-qty') : 'Не указано');
            var article     = (($(v).attr('data-article') != '') ? $(v).attr('data-article') : 'Не указано');
            
            imp.push({
               'name': name,       // Name or ID is required.
               'id': article,
               'price': price,
               'brand': brand,
               'category': category,
               'variant': variant,
               'list': list,
               'quantity': qty
             });
        });
        
        
        dataLayer.push({
            'event': 'checkout',
            'ecommerce': {
              'checkout': {
                'actionField': {'step': step},
                'products': imp
             }
           },
           'eventCallback': function() {
              document.location = url;
           }
          });
    },
    
    addOption : function(step, checkoutOption) {
      dataLayer.push({
        'event': 'checkoutOption',
        'ecommerce': {
          'checkout_option': {
            'actionField': {'step': step, 'option': checkoutOption}
          }
        }
      })
    }
    
    
}

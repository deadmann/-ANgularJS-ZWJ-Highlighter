/**
 * Highlights text that matches $select.search.
 *
 * Taken from AngularUI Bootstrap Typeahead
 * See https://github.com/angular-ui/bootstrap/blob/0.10.0/src/typeahead/typeahead.js#L340
 */
.filter('zwjHighlight', function() {
  function escapeRegexp(queryToEscape) {
    return ('' + queryToEscape).replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }

  function isZeroWidthJoiner(first, second){
    //Get First Character and match Whitespaces
    if(second.substr(0,1).match(/\s+/))
      return false;

    //Get Last Character and Match Persian Letters That Should Use ZWJ
    return !!first.substr(first.length>0?first.length-1:0).match(/[يئبپتجچحخسشصضطظعغفقکگلمنهی]/);
  }

  return function(matchItem, query) {
    var result;
    if(query && matchItem) {
      var parts = matchItem.split(new RegExp(escapeRegexp(query), 'gi'));
      result = "";
      for (var i = 0; i < parts.length; i++) {
        if (isZeroWidthJoiner(parts[i], query)) {
          if(i == parts.length-1)
            result += parts[i];
          else if (isZeroWidthJoiner(query, parts[i+1]?parts[i+1]:" "))
            result += parts[i] + '&zwj;<span class="ui-select-highlight">&zwj;' + query + '&zwj;</span>&zwj;';
          else
            result += parts[i] + '&zwj;<span class="ui-select-highlight">&zwj;' + query + '</span>';
        } else {
          if(i == parts.length-1)
            result += parts[i];
          else if (isZeroWidthJoiner(query, parts[i+1]?parts[i+1]:" "))
            result += parts[i] + '<span class="ui-select-highlight">' + query + '&zwj;</span>&zwj;';
          else
            result += parts[i] + '<span class="ui-select-highlight">' + query + '</span>';
        }
      }
    }else{
      result = matchItem;
    }
    return result;
    //return query && matchItem ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '&zwj;<span class="ui-select-highlight">$&</span>&zwj;') : matchItem;
  };
})

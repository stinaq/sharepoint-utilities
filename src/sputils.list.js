function $_global_sputils_list () {
  (function (window, $, _spPageContextInfo) {
    'use strict';

    var getListByName = function (name, config) {
      var url = '/_api/Web/Lists/getByTitle(\'' + name + '\')/items/';
      return sputils.rest.get(url, config)
        .then(sputils.rest.unwrapResults);
    };

    /*

    EXAMPLE USE

    sputils.list.getListByName('Announcements')
      .then(function (data) { console.log(data.d.results) });

    */

    var postListByName = function (name, data, config) {
      var url = '/_api/Web/Lists/getByTitle(\'' + name + '\')/items/';
      return sputils.rest.post(url, data, config)
        .then(sputils.rest.unwrapResults);
    };

    /*

    EXAMPLE USE

    var data = {"Title": "listlessly POSTing",
                "__metadata": { type: "SP.Data.AnnouncementsListItem"} };
    sputils.list.postListByName("Announcements", data)
      .then(function (data) { console.log(data); });

    */

    window.sputils = window.sputils || {};
    window.sputils.list = {
      getListByName: getListByName,
      postListByName: postListByName
    };
  })(window, jQuery, _spPageContextInfo);
}
$_global_sputils_list();

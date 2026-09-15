'use strict';
'require view';

return view.extend({
  render: function () {
    const node = new form.Map('dnsproxy', 'DNS Proxy');

    return node;
  },
});

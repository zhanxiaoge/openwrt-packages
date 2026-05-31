'use strict';
'require view';

return view.extend({
  render: function () {
    const node = new form.Map('dockerman', 'Docker Manager');

    return node;
  },
});

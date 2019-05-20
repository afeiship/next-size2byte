var nx = require('next-js-core2');
require('../src/next-size2byte');

test('nx.size2byte', function() {
  var rs1 = nx.size2byte(0);
  var rs2 = nx.size2byte(1024);

  expect(rs1[0]).toBe(0);
  expect(rs2).toEqual([1, 'KB']);
});

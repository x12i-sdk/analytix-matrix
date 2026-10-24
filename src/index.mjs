import assert from 'node:assert/strict';
import { MatrixExecutor } from '@x12i/analytix-matrix';
const timestamp = '2026-01-01T00:00:00.000Z';
const common = { _catalogId: 'fixture', id: 'fixture', version: 1, status: 'active', title: 'Example',
  createdAt: timestamp, updatedAt: timestamp, createdBy: 'example', updatedBy: 'example', metadata: {},
};
function analyticResult(id, data) { return { analyticId: id, analyticType: 'query', version: 1, status: 'active', data,
  meta: { cache: { hit: false, key: 'fixture' }, probes: [], execution: { durationMs: 0, startedAt: timestamp, finishedAt: timestamp, traceId: 'fixture-trace' } },
}; }
const definition = { ...common, matrixId: 'orders', level: 'demo', target: 'source',
  rows: { dimension: 'region', label: 'Region' }, columns: { dimension: 'status', label: 'Status' },
  metric: { type: 'sum', field: 'amount', label: 'Amount' },
};
const matrix = MatrixExecutor.run(definition, [{ region: 'East', status: 'paid', amount: 20 }, { region: 'East', status: 'paid', amount: 5 }, { region: 'West', status: 'pending', amount: 10 }]);
assert.equal(matrix.cells.find(cell => cell.rowKey === 'East' && cell.columnKey === 'paid').value, 25);
assert.equal(matrix.cells.find(cell => cell.rowKey === 'West' && cell.columnKey === 'paid').state, 'zero');
console.log(matrix);

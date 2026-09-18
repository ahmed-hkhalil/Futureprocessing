import store from './core/redux/store';
import { setToogleHeader, set_product_list } from './core/redux/action';

describe('Redux Store and State Management Tests', () => {
  test('initializes with default state values', () => {
    const state = store.getState();
    expect(state).toBeDefined();
    expect(state.toggle_header).toBe(false);
    expect(Array.isArray(state.product_list)).toBe(true);
    expect(Array.isArray(state.customerdata)).toBe(true);
    expect(Array.isArray(state.supplierdata)).toBe(true);
  });

  test('toggles header state correctly', () => {
    store.dispatch(setToogleHeader(true));
    expect(store.getState().toggle_header).toBe(true);

    store.dispatch(setToogleHeader(false));
    expect(store.getState().toggle_header).toBe(false);
  });

  test('updates product list correctly', () => {
    const mockProducts = [
      { id: 999, productName: 'Test Product', sku: 'PT0099', price: '$99.00' }
    ];
    store.dispatch(set_product_list(mockProducts));
    expect(store.getState().product_list).toEqual(mockProducts);
  });
});

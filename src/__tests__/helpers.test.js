/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const cart = require('../helpers.js');

test('Saat ditambahkan akan bertambah 1', ()=>{
    expect(cart.incrementQty(4)).toBe(5);
});

test('Saat dikurangkan akan berkurang 1', ()=>{
    expect(cart.decrementQty(4)).toBe(3);
});

test('Hitung diskon dengan kode promo', ()=>{
    expect(cart.calculateDiscount(500000, "XKGQQQ")).toBe(400000);
});

test("Hitung subtotal 30000 dengan total 3 barang menjadi 90000", () => {
    expect(cart.recalculateSubtotal(30000, 3)).toBe(90000);
});

import currency from "currency.js"

export const formatterMataUang = (nilai, jenis) => {
    if (jenis === "Rp") {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(nilai)
    }

    if (jenis === "USD") {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 8 }).format(nilai)
    }
}

export const hitungProfit = (aset, persentase) => {
    if (!aset) {
        return 0;
    }

    return currency(aset * persentase / 100).value
}

export const hitungTotal = (aset, profit) => {
    if (!aset) {
        return 0;
    }

    aset = currency(aset)
    profit = currency(profit)
    
    return aset.add(profit).value;
}

export const gantiCss = (profit) => {
    return profit >= 0 ? "hasil-up" : "hasil-down"
}
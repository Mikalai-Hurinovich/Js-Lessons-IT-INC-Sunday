import {IGlobalState} from "./state";

interface IRootState extends IGlobalState {
}

export const selectCurrencies = (state: IRootState) => state.currency.currencies
export const selectCurrentCurrency = (state: IRootState) => state.currency.currentCurrency
export const selectAmountOfCurrency = (state: IRootState) => state.currency.amountOfCurrency
export const selectIsBuying = (state: IRootState) => state.currency.isBuying

export const selectCurrencyState = (state: IRootState) => state.currency
